const line = require('@line/bot-sdk');
const config = require('../config');// 導入設定檔
const client = new line.Client(config);

const main = require('./main');

const textCommandSolver = (event) => {
    let msg = '無此功能'
    // event
    switch(event.message.text){
        case 'HI':
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