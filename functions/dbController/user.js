const db = require('../../models');
const { users } = require("../../models");
const User = db.users;

const searchById = async (id) => {
    let user = await users.findAll({ where: { userId: id } });
    return user[0];
}

const saveStatus = async (id,status)=> {
    await users.update({ status: status }, { where: { userId: id } });
}

const getToken = async (id) =>{
    let user = await users.findAll({ where: { userId: id } });
    return user[0].token;
}

module.exports = {
    searchById,
    saveStatus,
    getToken
}


