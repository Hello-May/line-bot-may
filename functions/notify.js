const lineNotify = require('./notification');
const dbUser = require('./dbController/user');
const dbHabit = require('./dbController/habit');
const schedule = require('node-schedule');
const sticker = [[1, 2], [1, 4], [1, 5], [1, 13], [1, 14], [1, 114], [1, 119], [1, 125], [1, 132], [1, 134], [1, 137], [1, 138], [1, 139], [1, 407], [2, 34], [2, 45], [2, 144], [2, 164], [2, 166], [2, 171], [2, 172], [2, 516], [3, 180], [3, 184], [3, 186], [3, 195], [3, 200]];

const send = () => {
  schedule.scheduleJob('15 * * * * *', async function () {
    let date = new Date().toLocaleTimeString('zh-TW', { timeZone: 'Asia/Taipei' });
    let str = date.split(':');
    let hour = (str[0] < 10 ? '0' + str[0] : str[0]);
    let min = (str[1] < 10 ? '0' + str[1] : str[1]);
    let habitData = await dbHabit.searchByTime(hour, min);
    let stickno = Math.floor(Math.random() * sticker.length)

    for (let i = 0; i < habitData.length; i++) {
      let token = await dbUser.getToken(habitData[i].userId);
      if (token != 'null') {
        lineNotify.notify(token, {
          'message': habitData[i].habit + '，請30分鐘內輸入密語！',
          'stickerPackageId': sticker[stickno][0].toString(),
          'stickerId': sticker[stickno][1].toString(),
        });
      }
    }
  });
}

send();