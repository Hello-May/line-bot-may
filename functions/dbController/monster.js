const db = require('../../models');
const { monsters } = require("../../models");
const Monster = db.monsters;

const create = async () => {
    await Monster.create({
        force: true,
        name: '小怪獸',
        born: new Date(),
        level: 1,
        exp: 0,
        characte: 0,
        money: 0,
        food: 10,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    console.log('---------------------------有沒有近來?')
}

//更新成初始化的小怪獸initialization

module.exports = {
    create
}