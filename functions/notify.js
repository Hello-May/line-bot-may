const lineNotify = require('./notification');
const dbUser = require('./dbController/user');
const dbHabit = require('./dbController/habit');
const schedule = require('node-schedule');

const send = () => {
  schedule.scheduleJob('15 * * * * *', async function () {
    let date = new Date().toLocaleTimeString('zh-TW', { timeZone: 'Asia/Taipei' });
    let str = date.split(':');
    let hour = (str[0] < 10 ? '0' + str[0] : str[0]);
    let min = (str[1] < 10 ? '0' + str[1] : str[1]);
    let habitData = await dbHabit.searchByTime(hour, min);

    for (let i = 0; i < habitData.length; i++) {
      let token = await dbUser.getToken(habitData[i].userId);
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