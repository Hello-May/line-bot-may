const lineBot = require('@line/bot-sdk');
const configBot = require('../config');
const clientBot = new lineBot.Client(configBot);
const lineNotify = require('./notification');
const dbUser = require('./dbController/user');
const dbHabit = require('./dbController/habit');
const schedule = require('node-schedule');

//先查habit表中的時間 存下userId 在查user表的token 如果沒token

const send = () => {
  schedule.scheduleJob('15 * * * * *',async function () {
    // lineNotify.notify('XNVldsovy2m6RTMubkUrIPM5FRIFXvDUir4G0Dq75eX', {
    //   type: 'message',
    //   text: '測試每分鐘30秒:' + new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
    // });
    let date = new Date();
    let hour = date.getHours()+7;
    let min = date.getMinutes();
    let habitData = await dbHabit.searchByTime((hour < 10 ? '0' + hour : hour), (min < 10 ? '0' + min : min));
    console.log((hour < 10 ? '0' + hour : hour), (min < 10 ? '0' + min : min));
    console.log(JSON.stringify(habitData));

    for (let i; i < habitData.length; i++) {
      let token = await dbUser.getToken(habitData[i].userId);
      console.log(token+'<------------------token');
      console.log(habitData[i].habit+'<------------------habit');
      if (token != 'null') {
        lineNotify.notify(token, {
          type: 'message',
          text: habitData[i].habit + '，請30分鐘內輸入密語或按簽到！' //簽到
        });
      }
    }
  });
}

send();

// module.exports = {
//   send
// }