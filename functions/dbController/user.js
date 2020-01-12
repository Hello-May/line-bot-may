const db = require('../../models');
const { users } = require("../../models");
const User = db.users;

const searchById = async (id) => {
    try {
        let user = await users.findAll({ where: { userId: id } });
        console.log(user[0]);
        return user[0];
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    searchById
}


