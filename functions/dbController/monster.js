const db = require('../../models');
const Op = db.Sequelize.Op;
const { monsters } = require("../../models");
const Monster = db.monsters;
const character = ['行動派', '嚴謹派', '領導派', '樂天派', '懵懂無知'];
const targetName = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF', 'GGG', 'HHH', 'III', 'JJJ', 'KKK', 'LLL', 'MMM', 'NNN', 'OOO', 'PPP', 'QQQ', 'RRR', 'SSS', 'TTT', 'UUU', 'VVV', 'WWW', 'XXX', 'YYY', 'ZZZ'];
const skinName = ['喵仔獸', '炸蝦獸', '草莓獸', '餅乾獸', '星月獸', '銀河獸', '蛋蛋獸', '浪濤獸', '哈味獸', '摩卡獸', '可可獸', '芒果獸', '太陽獸', '塔派獸', '神秘獸']

const searchById = async (id) => {
    let monster = await monsters.findAll({ where: { monsterId: id } });
    return monster[0];
}

const searchByRandomAndLevel = async (playerMonster, level, count) => {
    let monster = await monsters.findAll({ where: { level: level } });
    if (monster.length < count) {
        for (let i = 0; i < count - monster.length + 2; i++) {
            await createByRandom(level);
        }
        monster = await monsters.findAll({ where: { level: level } });
        // return monster;
    }
    let t = [];
    let output = [];
    for (let i = 0; i < monster.length; i++) {
        t.push(i);
    }
    for (let i = 0; i < monster.length; i++) {
        let r = Math.round(((Math.random() * ((t.length - 1) - i)) + i));
        let tmp = t[i];
        t[i] = t[r];
        t[r] = tmp;
    }
    for (let i = 0; i < monster.length && output.length < count; i++) {
        if (playerMonster.monsterId == monster[t[i]].monsterId) {
            continue;
        }
        output.push(monster[t[i]]);
    }
    return output;
}

const updateSkin = async (id, skin) => {
    await Monster.update({
        skin: skin,
    }, { where: { monsterId: id } });
}

const updateMoney = async (id, money) => {
    await Monster.update({
        money: money,
    }, { where: { monsterId: id } });
}

const updateBattleMoney = async (id, money) => {
    await Monster.update({
        battleMoney: money,
    }, { where: { monsterId: id } });
}

const decreaseFoodEveryOne = async () => {
    await monsters.decrement({ food: 1 }, { where: { food: { [Op.gt]: 0 } } });
    await Monster.destroy({ where: { food: 0, target: true } });
}

const hungry = async () => {
    let hungry = await monsters.findAll({ where: { food: 0, target: false } });
    return hungry;
}

const updateFood = async (id, food) => {
    await Monster.update({
        food: food,
    }, { where: { monsterId: id } });
}

const increaseMoney = async (id) => {
    await monsters.increment({ money: 1 }, { where: { monsterId: id } });
}

const increaseBattleMoney = async (id) => {
    await monsters.increment({ battleMoney: 1 }, { where: { monsterId: id } });
}

const increaseEXP = async (id) => {
    await monsters.increment({ exp: 1 }, { where: { monsterId: id } });
}

const levelUp = async (tmpMonster) => {
    let point = tmpMonster.character;
    if (point == 0) {
        point = Math.round((Math.random() * 3) + 1);
    }
    switch (point) {
        case 1:
            await monsters.increment({ agi: 1 }, { where: { monsterId: tmpMonster.monsterId } });
            break;
        case 2:
            await monsters.increment({ vit: 1 }, { where: { monsterId: tmpMonster.monsterId } });
            break;
        case 3:
            await monsters.increment({ str: 1 }, { where: { monsterId: tmpMonster.monsterId } });
            break;
        case 4:
            await monsters.increment({ lucky: 1 }, { where: { monsterId: tmpMonster.monsterId } });
            break;
    }
    await monsters.update({ exp: 0 }, { where: { monsterId: tmpMonster.monsterId } });
    await monsters.increment({ level: 1 }, { where: { monsterId: tmpMonster.monsterId } });
}

const saveCharacter = async (id, character) => {
    await monsters.update({ character: character }, { where: { monsterId: id } });
}

const updateName = async (id, name) => {
    await Monster.update({
        name: name,
    }, { where: { monsterId: id } });
}

async function createByRandom(level) {
    let n = level - 1;
    let a = Math.round((Math.random() * n));
    let b = Math.round((Math.random() * (n - a)));
    let c = Math.round((Math.random() * (n - a - b)));
    let d = n - a - b - c;
    let point = [a, b, c, d];
    let r;
    let tmp;
    for (let i = 0; i < point.length; i++) {
        r = Math.round((Math.random() * ((point.length - 1) - i) + i));
        tmp = point[i];
        point[i] = point[r];
        point[r] = tmp;
    }

    await Monster.create({
        force: true,
        name: targetName[Math.round((Math.random() * (targetName.length - 1)))],
        skin: skinName[Math.round((Math.random() * (skinName.length - 1)))],
        born: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        level: level,
        exp: 0,
        character: Math.round((Math.random() * (character.length - 1))),
        money: 0,
        battleMoney: 0,
        food: 24,
        agi: 1 + point[0],
        vit: 1 + point[1],
        str: 1 + point[2],
        lucky: 1 + point[3],
        target: true,
        poison: 0,
        boom: 0,
        medicine: 0,
        createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
    });
}

const create = async () => {
    await Monster.create({
        force: true,
        name: '小怪獸',
        skin: '喵仔獸',
        born: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        level: 1,
        exp: 0,
        character: 0,
        money: 0,
        battleMoney: 0,
        food: 100,
        agi: 1,
        vit: 1,
        str: 1,
        lucky: 1,
        target: false,
        poison: 0,
        boom: 0,
        medicine: 0,
        createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
    });
}   //這裡

const initialization = async (id) => {
    await Monster.update({
        force: true,
        name: '小怪獸',
        skin: '喵仔獸',
        born: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        level: 1,
        exp: 0,
        character: 0,
        money: 0,
        battleMoney: 0,
        food: 100,
        agi: 1,
        vit: 1,
        str: 1,
        lucky: 1,
        target: false,
        poison: 0,
        boom: 0,
        medicine: 0,
        createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
    }, { where: { monsterId: id } });
}

const destroy = async (id) => {
    await Monster.destroy({ where: { userId: id } });
}

module.exports = {
    create,
    initialization,
    searchById,
    updateName,
    saveCharacter,
    increaseEXP,
    levelUp,
    increaseMoney,
    searchByRandomAndLevel,
    decreaseFoodEveryOne,
    hungry,
    increaseBattleMoney,
    updateMoney,
    updateBattleMoney,
    updateSkin,
    updateFood,
    destroy
}