const lineBot = require('@line/bot-sdk');
const configBot = require('../config');
const clientBot = new lineBot.Client(configBot);
const lineNotify = require('./notify');
const math = require('mathjs');
const path = require('path');
const db = require('../test/sql');

const main = require('./main');
const pause = require('./pause');
const richMenu = require('./main/richMenu');

var shutUp = null;

const textCommandSolver = (event) => {
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
            case '..':
                const { users } = require("../models");
                const user
                (async () => {
                    // 搜尋多個例項
                    const user = await users.findAll()
                    // 條件搜尋name = 'John Doe'
                    // const user = await users.findByPk(1)

                    console.log(user[0].id + '<-------------------')
                    output = {
                        type: 'text',
                        text: user[0].id + ' 阿阿阿阿'
                    }
                    process.exit();
                })()
                output = {
                    type: 'text',
                    text: user[0].id + ' 阿阿阿阿阿'
                }
                break;
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