const dbMonster = require('../dbController/monster');
const dbUser = require('../dbController/user');
const lineNotify = require('./index');
const s = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });
var token;

const eat = async () => {
  await dbMonster.decreaseFoodEveryOne();
}

async function eatNotify() {
  token = await dbUser.getToken('Ue27cb7389b27243fb30e2c61c47539c4');
  lineNotify.notify(token, { 'message': '小怪獸們吃吃\n' + s });
}

async function hungryNotify() {
  let hungry = await dbMonster.hungry();
  for (let i = 0; i < hungry.length; i++) {
    token = await dbUser.getTokenByMonsterId(hungry[i].monsterId);
    lineNotify.notify(token, { 'message': '\n' + hungry[i].name + '餓餓QQ' });
  }
}

eat();
eatNotify();
hungryNotify();