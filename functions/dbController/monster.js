const db = require('../../models');
const { monsters } = require("../../models");
const Monster = db.monsters;

const searchById = async (id) => {
    try {
        let monster = await monsters.findAll({ where: { monsterId: id } });
        console.log(monster[0]);
        return monster[0];
    } catch (err) {
        console.log(err);
    }
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

//這個還沒測試過
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
    searchById
}