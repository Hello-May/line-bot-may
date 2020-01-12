const db = require('../../models');
const { users } = require("../../models");
const User = db.users;

const searchById = (id) => {
    let user =  users.findAll({ where: { userId: id } });
    console.log(user[0]);
    return user[0];
}

module.exports = {
    searchById
}


