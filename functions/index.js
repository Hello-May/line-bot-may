const line = require('@line/bot-sdk');
const notify = require('express-line-notify');
const config = require('../config');// 導入設定檔
const config2 = require('../config/notify');

const client = new line.Client(config);
const client2 = notify(config2);


const math = require('mathjs');
const models = require('../models');
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

        function doPost() {
            UrlFetchApp.fetch('https://notify-api.line.me/api/notify', {
                'headers': {
                    'Authorization': 'Bearer ' + config2.channelAccessToken,
                },
                'method': 'post',
                'payload': {
                    'message':'測試一下！',
                    'stickerPackageId':'1',
                    'stickerId':'2'
                }
            });
        }


    } else {
        switch (input) {
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
    return client2.replyMessage(event.replyToken, output);
    // return client.replyMessage(event.replyToken, output);
}

const imgCommandSolver = (event) => {
    let msg = '水啦~'
    // event
    return client.replyMessage(event.replyToken, {
        type: 'text',
        text: msg
    });
}

const stickerCommandSolver = (event) => {
    // event
    return client.replyMessage(event.replyToken, {
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