const db = require('../../models');
const { monsters } = require("../../models");
const Monster = db.monsters;

const searchById = async (id) => {
    let monster = await monsters.findAll({ where: { monsterId: id } });
    return monster[0];
}

const updateName = async (id,name) => {
    await Monster.update({
        name: name,
    }, { where: { monsterId: id } });
}

const create = async () => {
    await Monster.create({
        force: true,
        name: '小怪獸',
        born: new Date(),
        level: 1,
        exp: 0,
        character: 0,
        money: 0,
        food: 10,
        createdAt: new Date(),
        updatedAt: new Date()
    });
}

const initialization = async (id) => {
    await Monster.update({
        force: true,
        name: '小怪獸',
        born: new Date(),
        level: 1,
        exp: 0,
        character: 0,
        money: 0,
        food: 10,
        createdAt: new Date(),
        updatedAt: new Date()
    }, { where: { monsterId: id } });
}

module.exports = {
    create,
    initialization,
    searchById,
    updateName
}