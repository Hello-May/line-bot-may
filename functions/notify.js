const lineBot = require('@line/bot-sdk');
const configBot = require('../config');
const clientBot = new lineBot.Client(configBot);
const lineNotify = require('./notify');
const dbController = require('./dbController');
const dbUser = require('./dbController/user');
const dbHabit = require('./dbController/habit');
const schedule = schedule = require('node-schedule');

//先查habit表中的時間 存下userId 在查user表的token 如果沒token

const send = async () => {
  schedule.scheduleJob('30 * * * * *', function () {
    lineNotify.notify('XNVldsovy2m6RTMubkUrIPM5FRIFXvDUir4G0Dq75eX', {
            type: 'message',
            text: '測試每分鐘30秒'
          });
    // try {


    //   let token = await dbUser.getToken(userId);
    //   if (token != 'null') {
    //     lineNotify.notify(token, {
    //       type: 'message',
    //       text: 'token:' + token
    //     });
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  });
}

send();

// module.exports = {
//   send
// }