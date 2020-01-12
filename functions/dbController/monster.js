const db = require('../../models');
const { monsters } = require("../../models");
const Monster = db.monsters;

const searchById = (id) => {
    try {
    return new Promise(async (resolve, reject) => {
            let monster = await monsters.findAll({ where: { monsterId: id } });
            console.log(monster[0]);
            resolve(monster[0]);
        } catch (e) {
            reject(e);
        }
    });
    // return monster[0];
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