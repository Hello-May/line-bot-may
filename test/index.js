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


// const Sequelize = require('sequelize');

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

// const db = require('../models');
// const { groups } = require("../models");

// (async () => {
//     // 搜尋多個例項
//     const group = await groups.findAll({ where: { groupId: 'C53dba6bb007ff46457c28be90b10208c' } });
//     // 條件搜尋name = 'John Doe'
//     // const user = await users.findByPk(1)

//     console.log(group)
//     if (group == '') {
//         console.log('哈哈哈哈')
//     }
//     console.log(group[0].token);
    // console.log('--------------1-------------------')
    // console.log(user[4])
    // console.log('---------------2------------------')
    // console.log(user[4].id)
    // console.log('---------------3------------------')
    // console.log(user[4].createdAt)
    // console.log('----------------4-----------------')
    // console.log(user[4].updatedAt)

//     process.exit();
// })()

// const User = db.users;
// const Group = db.groups;

// const User = db.sequelize.define('users', {
//     userId: {
//         type: Sequelize.STRING,
//         autoIncrement: true,
//         primaryKey: true
//     }
// });

// User.create({
//     force: true,
//     userId: 'Utest777',
//     token:'null',
//     mosterId:'null',
//     status: false,
//     createdAt: new Date(),
//     updatedAt: new Date()
// });

// Group.create({
//     force: true,
//     groupId: 'Gtest777',
//     token:'null',
//     mosterId:'null',
//     status: false,
//     createdAt: new Date(),
//     updatedAt: new Date()
// });


// User.sync({
//     force: true
// }).then(() => {
//     // Table created
//     return User.create({
//         id: '5'
//     });
// }).then(() => {
//     process.exit()
// })

// const user =  users.findAll()
// // 條件搜尋name = 'John Doe'
// // const user = await users.findByPk(1)

// console.log(user)

const db = require('../models');
const { monsters } = require("../models");
const Monster = db.monsters;

    // Monster.create({
    //     force: true,
    //     name: '小怪獸',
    //     born: new Date(),
    //     level: 1,
    //     exp: 0,
    //     character: 0,
    //     money: 0,
    //     food: 10,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    // });
    // const go = async (event) => {
    // let monster = await monsters.findAll();
    // console.log(monster);
    // console.log(monster.length);
    // console.log(monster[monster.length-1].monsterId);
    // }

    // go();

    const db = require('../../models');
    const { monsters } = require("../../models");
    const Monster = db.monsters;
    
    const updateName = async (id,name) => {
        await Monster.update({
            name: name,
        }, { where: { monsterId: id } });
    }

    updateName()