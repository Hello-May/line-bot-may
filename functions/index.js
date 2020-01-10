const lineBot = require('@line/bot-sdk');
const configBot = require('../config');
const clientBot = new lineBot.Client(configBot);
const lineNotify = require('./notify');
const math = require('mathjs');
const path = require('path');

const main = require('./main');
const pause = require('./pause');
const richMenu = require('./main/richMenu');

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
            case '+':   //想插入userId
                const User = db.sequelize.define('users', {
                    id: {
                        type: Sequelize.STRING,
                        autoIncrement: true,
                        primaryKey: true
                    },
                    createdAt: DataTypes.DATE,
                    updatedAt: DataTypes.DATE,
                });

                User.sync({
                    force: true
                }).then(() => {
                    // Table created
                    return User.create({
                        id: '5'
                    });
                }).then(() => {
                    process.exit()
                })
                break;
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
                output = richMenu.richMenu();
                break;
            case '連動':
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
                output = richMenu.life(event);
                break;
            case '#任務':
                output = richMenu.task(event);
                break;
            case '#小怪獸':
                output = richMenu.monster(event);
                break;
            case '#戰鬥':
                output = richMenu.pk(event);
                break;
            case '#酒館':
                output = richMenu.talk(event);
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
    lineNotify.accesssToken = 'fEIHxeKHz3aftAMHNBGT3gXEqV4h72es0IWfw0HxDH4',
    lineNotify.notify({
        type: 'message',
        text: input
    });
    return clientBot.replyMessage(event.replyToken, output);
}

const imgCommandSolver = (event) => {
    let msg = '水啦~'
    // event
    return clientBot.replyMessage(event.replyToken, {   //要啥無法傳兩個?
        type: 'text',
        text: msg
    }, {
        id: '325708',
        type: 'sticker',
        packageId: '1',
        stickerId: '1',
        stickerResourceType: 'STATIC'
    });
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