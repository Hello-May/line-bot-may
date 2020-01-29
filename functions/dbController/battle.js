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

const destroy = async (id) => {
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
  let luckyDifference = (focus == 'player' ? (player.lucky - target.lucky) : (target.lucky - player.lucky)); //我比對方多出多少幸運值
  if (luckyDifference > 5) {
    luckyDifference = 5;
  }
  let luckyRate = Math.round((Math.random() * (6 - luckyDifference))); //自身爆擊率就越高，負數爆擊率越低

  let agiDifference = (focus == 'player' ? (target.agi - player.agi) : (player.agi - target.agi)); //對方比我多出多少敏捷
  if (agiDifference > 5) {
    agiDifference = 5;
  }
  let agiRate = Math.round((Math.random() * (6 - agiDifference))); //對方閃避率就越高，負數閃避率越低

  let hurt = (focus == 'player' ? (luckyRate == 0 ? player.str * 15 : player.str * 10) : (luckyRate == 0 ? target.str * 15 : target.str * 10));
  let extraHurt = (luckyRate == 0 ? (focus == 'player' ? (player.str * 15 - player.str * 10) : (target.str * 15 - target.str * 10)) : 0);

  if (agiRate == 0) {
    hurt = 0;
  } else {
    let newHp = (focus == 'player' ? (target.hp - hurt) : (player.hp - hurt));
    let passive = (focus == 'player' ? 'target' : 'player');
    await Battle.update({
      hp: newHp,
    }, { where: { userId: userId, identity: passive } });
  }

  return { hurt: hurt, extraHurt: extraHurt };  //如果傷害是0就是miss //如果有額外傷害就是有爆擊
}

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
    skin: myMonster.skin,
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
    skin: tarMonster.skin,
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
