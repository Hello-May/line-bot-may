const lineBot = require('@line/bot-sdk');
const configBot = require('../config');
const clientBot = new lineBot.Client(configBot);
const lineNotify = require('./notification');
const dbController = require('./dbController');
const dbUser = require('./dbController/user');
const dbHabit = require('./dbController/habit');
const schedule = require('node-schedule');

//先查habit表中的時間 存下userId 在查user表的token 如果沒token

Date.prototype.Format = function (fmt) { //author: meizz 
  var o = {
      "M+": this.getMonth() + 1, //月份 
      "d+": this.getDate(), //日 
      "h+": this.getHours(), //小时 
      "m+": this.getMinutes(), //分 
      "s+": this.getSeconds(), //秒 
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
      "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

const send = async () => {
  schedule.scheduleJob('30 * * * * *', function () {
    lineNotify.notify('XNVldsovy2m6RTMubkUrIPM5FRIFXvDUir4G0Dq75eX', {
            type: 'message',
            text: '測試每分鐘30秒:'+ new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }).Format("yyyy/MM/dd hh:mm:ss")
          });
    // try {
          let date = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }).Format("yyyy/MM/dd hh:mm:ss");

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