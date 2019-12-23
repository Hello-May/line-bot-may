const line = require('@line/bot-sdk');
const config = require('./config');// 導入設定檔
const client = new line.Client(config);

const textCommandSolver = (event) => {
    // event

    return client.replyMessage(event.replyToken, {
        type: 'text',
        text: "test"
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