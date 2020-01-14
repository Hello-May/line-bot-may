const lineBot = require('@line/bot-sdk');
const configBot = require('../config');
const clientBot = new lineBot.Client(configBot);
const lineNotify = require('./notify');
const math = require('mathjs');
const path = require('path');
const dbController = require('./dbController');
const main = require('./main');
const pause = require('./pause');
const richMenu = require('./main/richMenu');
const life = require('./main/life');
const monster = require('./main/monster');
const task = require('./main/task');
const pk = require('./main/pk');
const talk = require('./main/talk');
const db = require('../models');
const dbUser = require('./dbController/user');
const dbMonster = require('./dbController/monster');
const dbTask = require('./dbController/task');
const dbHabit = require('./dbController/habit');

const textCommandSolver = async (event, status) => {
    let input = event.message.text;
    let output;
    let userId = (event.source.type == 'user' ? event.source.userId : event.source.groupId);
    if (input.includes('你') && input.includes('誰')) {
        output = {
            type: 'text',
            text: '我是May~'
        }
    } else if (status.includes(':')) {
        let str = status.split(":");
        switch (str[0]) {
            case '新增象限監聽':
                await dbTask.create(userId, str[1], input);
                output = {
                    type: 'text',
                    text: '[已新增任務]'
                }
                await dbUser.saveStatus(userId, '正常');
                break;
            case '任務修改監聽':
                // let tmpUser = await dbUser.searchById(userId);
                // let tmpMonster = await dbMonster.searchById(tmpUser.monsterId);
                // await dbMonster.updateName(tmpMonster.monsterId, input);
                await dbTask.update(userId, str[1], input);
                output = {
                    type: 'text',
                    text: '[任務已修改] ' + input
                }
                await dbUser.saveStatus(userId, '正常');
                break;
            case '新增自律':
                switch (str.length) {
                    case 3:
                        await dbUser.saveStatus(userId, status + ':' + input);  //input是習慣
                        output = {
                            type: 'text',
                            text: '請輸入密語'
                        };
                        break;
                    case 4:
                        await dbUser.saveStatus(userId, status + ':' + input);  //input是密語
                        await dbHabit.create(userId, str[1], str[2], input);
                        output = {
                            type: 'text',
                            text: '[已新增自律指令] ' + str[1] + "/" + str[2] + "/" + input
                        };
                        break;
                }
                break;
        }
    } else {
        switch (status) {
            case '小怪獸改名監聽':
                let tmpUser = await dbUser.searchById(userId);
                let tmpMonster = await dbMonster.searchById(tmpUser.monsterId);
                await dbMonster.updateName(tmpMonster.monsterId, input);
                output = {
                    type: 'text',
                    text: '[小怪獸已改名] ' + input
                }
                await dbUser.saveStatus(userId, '正常');
                break;
            default:
                switch (input) {
                    // case '+':   //想插入userId
                    //     const User = db.sequelize.define('users', {
                    //         id: {
                    //             type: Sequelize.STRING,
                    //             autoIncrement: true,
                    //             primaryKey: true
                    //         },
                    //         createdAt: DataTypes.DATE,
                    //         updatedAt: DataTypes.DATE,
                    //     });

                    //     User.sync({
                    //         force: true
                    //     }).then(() => {
                    //         // Table created
                    //         return User.create({
                    //             id: '5'
                    //         });
                    //     }).then(() => {
                    //         process.exit()
                    //     })
                    //     break;
                    // case '..':
                    //     const { users } = require("../models");
                    //     // 搜尋多個例項
                    //     const user = await users.findAll()
                    //     // 條件搜尋name = 'John Doe'
                    //     // const user = await users.findByPk(1)
                    //     output = {
                    //         type: 'text',
                    //         text: (user[0].userId === undefined ? '沒東西啦~' : user[0].userId) + ' 阿阿阿阿'
                    //     }
                    //     break;
                    case 'T':
                        output = life.selectTime('自律時間');
                        break;
                    case '.':
                        output = lineNotify.test();
                        break;
                    case '#':
                        output = richMenu.call(event);
                        break;
                    case '連動':
                        dbController.saveTmpId(event);
                        output = lineNotify.authorize();
                        break;;
                    case '呼叫':
                        dbUser.saveStatus(userId, '正常');
                        output = pause.pause(event);
                        break;
                    case '閉嘴':
                        dbUser.saveStatus(userId, '睡眠');
                        output = pause.pause(event);
                        break;
                    case '嗨':
                        output = main.test(event);
                        break;
                    case '#修煉':
                        output = await life.call(event);
                        break;
                    case '#任務':
                        output = await task.call(event);
                        break;
                    case '#小怪獸':
                        output = await monster.call(event);
                        // output = monster.call(event).catch(err=>{console.log(err)});
                        break;
                    case '#戰鬥':
                        output = await pk.call(event);
                        break;
                    case '#酒館':
                        output = talk.call(event);
                        break;
                    default:
                        let msg;
                        try {
                            msg = '答案是' + math.eval(input.toLowerCase()).toString();
                        } catch (err) {
                            let timestamp = new Date(event.timestamp).toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });
                            let name = event.source.userId;
                            // let profile = client.getChatMemberProfile;
                            msg = timestamp + '\n' + name + '說了：' + input;
                        }
                        output = {
                            type: 'text',
                            text: msg
                        }
                }
        }
    }

    //如果排程要如果取得token?

    // try {
    //     let token;
    //     token = await dbController.getToken(event);
    //     if (token != 'null') {
    //         lineNotify.notify(token, {
    //             type: 'message',
    //             text: 'token:' + token
    //         });
    //     }
    // } catch (err) {
    //     console.log(err);
    // }
    return clientBot.replyMessage(event.replyToken, output);
}

const imgCommandSolver = (event) => {
    let msg = '水啦~'
    // event
    return clientBot.replyMessage(event.replyToken, [{   //要啥無法傳兩個?
        type: 'text',
        text: msg
    }, {
        id: '325708',
        type: 'sticker',
        packageId: '1',
        stickerId: '1',
        stickerResourceType: 'STATIC'
    }]);
}

const stickerCommandSolver = (event) => {
    // event
    return clientBot.replyMessage(event.replyToken, {
        id: '325708',
        type: 'sticker',
        packageId: '1',
        stickerId: '1',
        stickerResourceType: 'STATIC'
    });
}

module.exports = {
    textCommandSolver,
    imgCommandSolver,
    stickerCommandSolver
}