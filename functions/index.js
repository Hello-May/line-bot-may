const line = require('@line/bot-sdk');
const config = require('../config');// 導入設定檔
const client = new line.Client(config);

const math = require('mathjs');
const models = require('models');
const main = require('./main');
const pause = require('./pause');

var shutUp = null;

const textCommandSolver = (event) => {
    let input = event.message.text;
    if (shutUp !== null && input !== '呼叫' && shutUp) {
        return;
    }

    let msg = '無此功能'
    if (input.includes('你') && input.includes('誰')) {
        msg = '我是May~'
    } else {
        switch (input) {
            case '呼叫':
                shutUp = false;
                msg = pause.pause(event);
                break;
            case '閉嘴':
                shutUp = true;
                msg = pause.pause(event);
                break;
            case '嗨':
                msg = main.test(event);
                break;
            default:
                try {
                    msg = '答案是' + math.eval(input.toLowerCase()).toString();
                } catch (err) {
                    let timestamp = new Date(event.timestamp).toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });
                    let name = event.source.userId;
                    let profile = client.getChatMemberProfile;
                    msg = profile.toString + '\n' + timestamp + '\n' + name + '說了：' + input;
                }
        }
    }

    return client.replyMessage(event.replyToken, {
        type: 'text',
        text: msg
    });
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