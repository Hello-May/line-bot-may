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

var shutUp = null;

const textCommandSolver = async (event) => {
    let input = event.message.text;
    let output;
    if (shutUp !== null && input !== '呼叫' && shutUp) {
        return;
    }
    if (input.includes('你') && input.includes('誰')) {
        output = {
            type: 'text',
            text: '我是May~'
        }
    } else {
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
            case '.':
                output = lineNotify.test();
                break;
            case '#':
                output = richMenu.call();
                break;
            case '連動':
                dbController.saveTmpId(event);
                output = lineNotify.authorize();
                break;;
            case '呼叫':
                shutUp = false;
                output = pause.pause(event);
                break;
            case '閉嘴':
                shutUp = true;
                output = pause.pause(event);
                break;
            case '嗨':
                output = main.test(event);
                break;
            case '#修煉':
                output = life.call(event);
                break;
            case '#任務':
                output = task.call(event);
                break;
            case '#小怪獸':
                    output = monster.call(event);
                    // output = monster.call(event).catch(err=>{console.log(err)});
                break;
            case '#戰鬥':
                output = pk.call(event);
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
    console.log('<------------------------------------');
    console.log(output);
    return clientBot.replyMessage(event.replyToken, output);
    // return clientBot.replyMessage(event.replyToken, output).catch(err=>{console.log(err)});
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