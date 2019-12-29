const line = require('@line/bot-sdk');
const config = require('../config');// 導入設定檔
const client = new line.Client(config);

const main = require('./main');
// const main = require('./test');

const textCommandSolver = (event) => {
    var shutUp;
    if(shutUp!==undefined && event.message.text !== 'call' && shutUp){
        return;
    }
    let msg = '無此功能'
    // event
    switch(event.message.text){
        case '閉嘴':
            shutUp = true;
            msg = main.test(event);
            break;
        case '呼叫':
            shutUp = false;
            msg = main.test(event);
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