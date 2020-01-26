const db = require('../../models');
const { monsters } = require("../../models");
const Monster = db.monsters;
const character = ['行動派', '嚴謹派', '領導派', '樂天派', '懵懂無知'];
const targetName = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE'];

const searchById = async (id) => {
    let monster = await monsters.findAll({ where: { monsterId: id } });
    return monster[0];
}

const searchByRandomAndLevel = async (level, count) => {
    console.log('searchByRandomAndLevel')
    let monster = await monsters.findAll({ where: { level: level } });
    console.log('monster.length=' + monster.length)
    if (monster.length < count) {
        for (let i = 0; i < count - monster.length; i++) {
            await createByRandom(level);
            console.log('createByRandom')
        }
        monster = await monsters.findAll({ where: { level: level } });
        console.log('monster')
        console.log(monster)
        return monster;
    }
    let t = [];
    let output = [];
    for (let i = 0; i < monster.length; i++) {
        t.push(i);
    }
    for (let i = 0; i < count; i++) {
        let r = Math.round(((Math.random() * ((t.length - 1) - i)) + i));
        let tmp = t[i];
        t[i] = t[r];
        t[r] = tmp;
    }
    for (let i = 0; i < count; i++) {
        output.push(monster[t[i]])
    }
    console.log('output')
    console.log(output)
    return output;
}

const increaseMoney = async (id) => {
    await monsters.increment({ money: 1 }, { where: { monsterId: id } });
}

const increaseEXP = async (id) => {
    await monsters.increment({ exp: 1 }, { where: { monsterId: id } });
}

const levelUp = async (id) => {
    await monsters.update({ exp: 0 }, { where: { monsterId: id } });
    await monsters.increment({ level: 1 }, { where: { monsterId: id } });
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
        console.log('i=' + i + '  r=' + r);
        tmp = point[i];
        point[i] = point[r];
        point[r] = tmp;
    }

    await Monster.create({
        force: true,
        name: targetName[Math.round((Math.random() * (targetName.length - 1)))],
        skin: '喵仔獸',
        born: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        level: level,
        exp: 0,
        character: character[Math.round((Math.random() * (character.length - 1)))],
        money: 0,
        food: 3,
        agi: 1 + point[0],
        vit: 1 + point[1],
        str: 1 + point[2],
        lucky: 1 + point[3],
        target: true,
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
        food: 10,
        agi: 1,
        vit: 1,
        str: 1,
        lucky: 1,
        target: false,
        createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
    });
}

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
        food: 10,
        agi: 1,
        vit: 1,
        str: 1,
        lucky: 1,
        target: false,
        createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
    }, { where: { monsterId: id } });
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
    searchByRandomAndLevel
}