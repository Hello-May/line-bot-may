const db = require('../../models');
const { users } = require("../../models");
const User = db.users;

const searchById = async (id) => {
    let user = await users.findAll({ where: { userId: id } });
    console.log("<--------------------user start");
    console.log(user[0]);
    console.log("<--------------------user start");
    return user[0];
}

module.exports = {
    searchById
}


