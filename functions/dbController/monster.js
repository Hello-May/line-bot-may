const db = require('../../models');
const { monsters } = require("../../models");
const Monster = db.monsters;

const searchById = async (id) => {
    let monster = await monsters.findAll({ where: { monsterId: id } });
    return monster[0];
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

const create = async () => {
    await Monster.create({
        force: true,
        name: '小怪獸',
        born: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        level: 1,
        exp: 0,
        character: 0,
        money: 50,
        food: 10,
        createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
    });
}

const initialization = async (id) => {
    await Monster.update({
        force: true,
        name: '小怪獸',
        born: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        level: 1,
        exp: 0,
        character: 0,
        money: 0,
        food: 10,
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
    levelUp
}