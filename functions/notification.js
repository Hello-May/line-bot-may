const lineBot = require('@line/bot-sdk');
const configBot = require('../config');
const clientBot = new lineBot.Client(configBot);
const lineNotify = require('./notification');
const dbController = require('./dbController');

//先查habit表中的時間 存下userId 在查user表的token 如果沒token

const send = async () => {
  try {
    let token;
    token = await dbController.getToken(event);
    if (token != 'null') {
      lineNotify.notify(token, {
        type: 'message',
        text: 'token:' + token
      });
    }
  } catch (err) {
    console.log(err);
  }

}


module.exports = {
  send
}