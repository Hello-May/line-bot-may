const dbHabit = require('../dbController/habit');
const dbUser = require('../dbController/user');
const lineNotify = require('./index');
const s = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });

const clearAll = async () => {
  await dbHabit.clearAllDone();
}

async function clearNotify() {
    let token = await dbUser.getToken('Ue27cb7389b27243fb30e2c61c47539c4');
    lineNotify.notify(token, { 'message': '簽到已清空\n' + s });
}

clearAll();
clearNotify();

//這裡還要做food-1