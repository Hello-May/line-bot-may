const db = require('../../models');
const { users } = require("../../models");
const User = db.users;

const searchById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await users.findAll({ where: { userId: id } });
            console.log(user[0]);
            resolve(user[0]);
        } catch (e) {
            reject(e);
        }
    });
    // return user[0];
}

module.exports = {
    searchById
}


