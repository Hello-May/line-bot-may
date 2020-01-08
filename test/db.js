const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '1234',
        port: '3306',
        database: 'test'
    }
});

const Bookshelf = require('bookshelf')(knex);

const User = Bookshelf.Model.extend({
    tableName: 'users'
});

const Group = Bookshelf.Model.extend({
    tableName: 'userGroups'
});

module.exports = {
    User,
    Group
}