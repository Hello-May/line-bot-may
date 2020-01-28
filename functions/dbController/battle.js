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

const destroy = async (id)=>{
  await Battle.destroy({ where: { userId: id } });
}

const round = async (userId, focus) => {
  let p = await battles.findAll({ where: { userId: userId, identity: 'player' } });
  let t = await battles.findAll({ where: { userId: userId, identity: 'target' } });
  let player = p[0];
  let target = t[0];

  if (player.hp <= 0 || target.hp <= 0) {
    await Battle.destroy({ where: { userId: userId } });
    if (player.hp <= 0) {
      return '對方勝'
    }
    return '玩家勝'
  }

  //lucky可能爆擊
  //agi可能可以閃避
  let newHp = (focus == 'player' ? (target.hp - player.str * 5) : (player.hp - target.str * 5));
  let passive = (focus == 'player' ? 'target' : 'player');

  await Battle.update({
    hp: newHp,
  }, { where: { userId: userId, identity: passive } });

  return focus + '造成' + passive + '扣' + (focus == 'player' ? (player.str * 5) + '傷害' : (target.str * 5) + '傷害')
}

//接受到userId，抓battle的兩隻出來比對數值，先判斷是不是某方死了，看目前是誰攻擊，進行回合後扣血，再存進去

const create = async (userId, myMonster, tarMonster) => {
  await Battle.create({
    force: true,
    userId: userId,
    monsterId: myMonster.monsterId,
    identity: 'player',
    hp: myMonster.vit * 50,
    agi: myMonster.agi,
    vit: myMonster.vit,
    str: myMonster.str,
    lucky: myMonster.lucky,
    character: myMonster.character,
    skin :myMonster.skin,
    name: myMonster.name,
    createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
    updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
  });
  await Battle.create({
    force: true,
    userId: userId,
    monsterId: tarMonster.monsterId,
    identity: 'target',
    hp: tarMonster.vit * 50,
    agi: tarMonster.agi,
    vit: tarMonster.vit,
    str: tarMonster.str,
    lucky: tarMonster.lucky,
    character: tarMonster.character,
    skin :tarMonster.skin,
    name: tarMonster.name,
    createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
    updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
  });
}

module.exports = {
  searchByUserId,
  searchByMonsterId,
  create,
  round,
  destroy
}
