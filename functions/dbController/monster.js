const db = require('../../models');
const { monsters } = require("../../models");
const Monster = db.monsters;
const character = ['行動派', '嚴謹派', '領導派', '樂天派', '懵懂無知'];

const searchById = async (id) => {
    let monster = await monsters.findAll({ where: { monsterId: id } });
    return monster[0];
}

const searchByRandomAndLevel = async (level) => {
    let monster = await monsters.findAll({ where: { level: level } });
    if(monster.length==0){

    }
    return monster[Math.round((Math.random() * (monster.length - 1)))];
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

const createRandom = async (level) => {
    let point = []
    await Monster.create({
        force: true,
        name: '小怪獸',
        skin: '喵仔獸',
        born: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        level: level,
        exp: 0,
        character: character[Math.round((Math.random() * (character.length - 1)))],
        money: 0,
        food: 10,
        agi: 1,
        vit: 1,
        str: 1,
        lucky: 1,
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