const db = require('../../models');
const { users } = require("../../models");
const User = db.users;

const getAll = async () => {
    let user = await users.findAll();
    return user;
}

const searchById = async (id) => {
    let user = await users.findAll({ where: { userId: id } });
    return user[0];
}

const saveStatus = async (id, status) => {
    await users.update({ status: status }, { where: { userId: id } });
}

const getToken = async (id) => {
    let user = await users.findAll({ where: { userId: id } });
    return user[0].token;
}

const getTokenByMonsterId = async (id) => {
    let user = await users.findAll({ where: { monsterId: id } });
    return user[0].token;
}

module.exports = {
    searchById,
    saveStatus,
    getToken,
    getAll,
    getTokenByMonsterId
}


