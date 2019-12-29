const line = require('@line/bot-sdk');
const config = require('../config');// 導入設定檔
const client = new line.Client(config);

const main = require('./main');
const pause = require('./pause');

var shutUp = null;

const textCommandSolver = (event) => {
    if (shutUp !== null && event.message.text !== '呼叫' && shutUp) {
        return;
    }
    let msg = '無此功能'
    // event
    switch (event.message.text) {
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
    }

    return client.replyMessage(event.replyToken, {
        type: 'text',
        text: msg
    });
}

const imgCommandSolver = (event) => {
    // event
    return client.replyMessage(event.replyToken, {
        type: 'text',
        text: "test"
    });
}

module.exports = {
    textCommandSolver,
    imgCommandSolver
}