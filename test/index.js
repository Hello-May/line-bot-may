// var s = new Date(1577865102384).toLocaleString('zh-TW', {timeZone: 'Asia/Taipei'});
// // var d = s.getFullYear() + "-" + (s.getMonth() < 10 ? '0' + (s.getMonth() + 1) : (s.getMonth() + 1)) + "-" + (s.getDate() < 10 ? '0' + s.getDate() : s.getDate());
// // var t = (s.getHours() < 10 ? '0' + s.getHours() : s.getHours()) + ":" + (s.getMinutes() < 10 ? '0' + s.getMinutes() : s.getMinutes()) + ":" + (s.getSeconds() < 10 ? '0' + s.getSeconds() : s.getSeconds());
// // console.log(d + ' ' + t);
// console.log(s);


// const db = require('../models');

// var r = '?';
// db.sql.query('select * from student', function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//     var r = result[0].name;
//     console.log(r);
// });

// console.log(r);


const Sequelize = require('sequelize');

// const sequelize = new Sequelize('heroku_4937b744ad5d721', 'bbc0599e0bd410', '36b45c49', {
//     host: 'us-cdbr-iron-east-05.cleardb.net',
//     port: 3306,
//     dialect: 'mysql',
//     operatorsAliases: false,
//     // logging: false,

//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     },
// });

// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//         process.exit();
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });

const db  = require('../models');
const { users } = require("../models");

(async () => {
    // 搜尋多個例項
    const user = await users.findAll()
    // 條件搜尋name = 'John Doe'
    // const user = await users.findByPk(1)
    
    console.log(user)
    console.log('---------------------------------')
    console.log(user[0])
    console.log('---------------------------------')
    console.log(user[0].id)
        
    process.exit();
    })()

// const User = db.sequelize.define('users', {
//     id: {
//         type: Sequelize.STRING,
//         primaryKey: true
//     }
// });

// User.sync({
//     force: true
// }).then(() => {
//     // Table created
//     return User.create({
//         id: '1'
//     });
// }).then(() => {
//     process.exit()
// })

// const user =  users.findAll()
// // 條件搜尋name = 'John Doe'
// // const user = await users.findByPk(1)

// console.log(user)