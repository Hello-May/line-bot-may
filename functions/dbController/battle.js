const db = require('../../models');
const { battles } = require("../../models");
const Battle = db.battles;

const searchByUserId = async (id) => {
  let battle = await battles.findAll({ where: { userId: id } });
  return battle;
}

const searchByMonsterId = async (id) => {
  let battle = await battles.findAll({ where: { monsterId: id } });
  return battle[0];
}

const round = async (userId, focus) => {
  let player = await battles.findAll({ where: { userId: userId, identity: 'player' } });
  let target = await battles.findAll({ where: { userId: userId, identity: 'target' } });

  if (player.hp <= 0 || target.hp <= 0) {
    await Battle.destroy({ where: { userId: userId } });
    if (player.hp <= 0) {
      return '對方勝'
    }
    return '玩家勝'
  }

  //lucky可能爆擊
  //agi可能打兩次
  await Battle.update({
    hp: (focus == 'player' ? (target.hp - player.str * 5) : (palyer.hp - target.str * 5)),
  }, { where: { userId: userId, identity: focus } });

  return focus + '造成' + (focus == 'player' ? 'target扣' + player.str * 5 + '傷害' : 'player扣' + target.str * 5 + '傷害')
}

//接受到userId，抓battle的兩隻出來比對數值，先判斷是不是某方死了，看目前是誰攻擊，進行回合後扣血，再存進去

const create = async (userId, myMonster, tarMonster) => {
  await Battle.create({
    force: true,
    userId: userId,
    monsterId: myMonster.monsterId,
    identity: 'player',
    hp: myMonster.vit * 50,
    createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
    updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
  });
  await Battle.create({
    force: true,
    userId: userId,
    monsterId: tarMonster.monsterId,
    identity: 'target',
    hp: tarMonster.vit * 50,
    createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
    updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
  });
}

module.exports = {
  searchByUserId,
  searchByMonsterId,
  create,
  round
}
