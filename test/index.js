
// import { createPool } from "mysql";

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

// const db = require('../models');
// const { monsters } = require("../models");
// const Monster = db.monsters;

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

// const Task = db.tasks;

// const create = async () => {
//     await Task.create({
//         force: true,
//         userId: '555',
//         level: 5,
//         desc: '5566',
//         createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
//         updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
//     });
// }

// create();

// const destroy = async (id, desc) => {
//     await Task.destroy({ where: { userId: id, desc: desc } });
// }

// destroy('555','5566');

Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

// let time = ['08:00','07:00','10:00','09:00'];
// let date = new Date().Format("yyyy/MM/dd");
// console.log(time);

// function sortByTime(habit) {
//     for (let i = 1; i < habit.length; i++) {
//         for (let j = 0; j < habit.length - i; j++) {
//             if ((Date.parse(date+' '+habit[j])).valueOf() > (Date.parse(date+' '+habit[j + 1])).valueOf()) {
//                 let tmp = habit[j];
//                 habit[j] = habit[j + 1];
//                 habit[j + 1] = tmp;
//             }
//         }
//     }
// }

// sortByTime(time);
// console.log(time);

// let tmp ='08:00:00';
// let tmp2 = tmp.Format("hh:mm");
// console.log(tmp2);
// const dbUser = require('../functions/dbController/user');
// const { users } = require("../models");
// async function test() {
//     let j = await dbHabit.searchByHabit('Ue27cb7389b27243fb30e2c61c47539c4', '嘿嘿');
//     console.log(j);
//     console.log(j.length);
// }
// test();

// let tmp;
// const getToken = async (id) =>{
//     let user = await users.findAll({ where: { userId: id } });
//     console.log(JSON.stringify(user));
//     return user[0].token;
// }
// const go = async ()=>{
//  tmp = await getToken('Ue27cb7389b27243fb30e2c61c47539c4');
//  console.log(tmp);
// }
// go();

// function convertUTCDateToLocalDate(date) {
//     var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

//     var offset = date.getTimezoneOffset() / 60;
//     var hours = date.getHours();

//     newDate.setHours(hours - offset);

//     return newDate;   
// }
// function convertUTCDateToLocalDate(date) {
//     var newDate = new Date(date.getTime() - date.getTimezoneOffset()*60*1000);
//     return newDate;   
// }
// function convertUTCDateToLocalDate(date) {
//     return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
// }
// var date = convertUTCDateToLocalDate(new Date());
// console.log(date);
// console.log(date.getHours());

// let d = new Date().toLocaleTimeString('zh-TW', { timeZone: 'Asia/Taipei' });
// let str = d.split(':');
// console.log(str[1]);
// console.log(d);
// console.log(d.toLo);

// console.log(d.getTimezoneOffset());
// let n=toLocalTime(d);
// console.log(n);
// let h = n.getHours();
// console.log(h);
// console.log(date.getMinutes);

// console.log(Math.round((Math.random()*7)));

// const lineNotify = require('express-line-notify');
// const configNotify = require('../config/notify');
// const clientNotify = lineNotify(configNotify);
// const unirest = require('unirest');

// const notify = () => {
//     var sticker = [[1, 2], [1, 4], [1, 5], [1, 13], [1, 14], [1, 114], [1, 119], [1, 125], [1, 132], [1, 134], [1, 137], [1, 138], [1, 139], [1, 407], [2, 34], [2, 45], [2, 144], [2, 164], [2, 166], [2, 171], [2, 172], [2, 516], [3, 180], [3, 184], [3, 186], [3, 195], [3, 200]];
//     var stickno = Math.floor(Math.random() * sticker.length)

//     let req = unirest('POST', configNotify.notifyApi)
//         .headers({
//             'Authorization': 'Bearer ' + 'QMaunpHdxlny8lbiQSSeGb5pvJd4sPcRmei8KlDEUhv',
//             'Content-Type': 'multipart/form-data; boundary=--------------------------054153815016971257363988'
//         })
//         .field({
//             'message': "Hello!",
//             'stickerPackageId': sticker[stickno][0].toString(),
//             'stickerId': sticker[stickno][1].toString(),
//         })
//         .end(function (res) {
//             if (res.error) throw new Error(res.error);
//             console.log(res.raw_body);
//         });
// }

// notify();

// function sayHello() {
// var sticker = [[1, 2], [1, 4], [1, 5], [1, 13], [1, 14], [1, 114], [1, 119], [1, 125], [1, 132], [1, 134], [1, 137], [1, 138], [1, 139], [1, 407], [2, 34], [2, 45], [2, 144], [2, 164], [2, 166], [2, 171], [2, 172], [2, 516], [3, 180], [3, 184], [3, 186], [3, 195], [3, 200]];
// var stickno = Math.floor(Math.random() * sticker.length);

//     var ss = SpreadsheetApp.getActive();

//     var tokenlist = ss.getRange("設定!P1").getValue().split(',');
//     var sending_url = 'https://notify-api.line.me/api/notify';
//     for (var i = 0; i < tokenlist.length; i++) {
//         var param = {
//             'headers': { 'Authorization': 'Bearer ' + 'QMaunpHdxlny8lbiQSSeGb5pvJd4sPcRmei8KlDEUhv' },
//             'method': 'post',
//             'payload':
//             {
//                 'message': "\nHello!",
//                 'stickerPackageId': sticker[stickno][0].toString(),
//                 'stickerId': sticker[stickno][1].toString(),
//             }
//         }
//         UrlFetchApp.fetch(sending_url, param)
//     }
// }
// sayHello();


// notify('QMaunpHdxlny8lbiQSSeGb5pvJd4sPcRmei8KlDEUhv', {
//     type: 'message',
//     text: '阿阿阿'
// type: 'sticker',
// stickerPackageId: 1,
// stickerId: 2571
// });

// {
//     "type": "sticker",
//     "packageId": "1",
//     "stickerId": "2571"
//   }


// const db = require('../models');
// const { habits } = require("../models");
// const Habit = db.habits;

// const test = async () => {
//     await Habit.update({ done: true }, { where: { habitId: 1 } });
//     await Habit.update({ done: true }, { where: { habitId: 21 } });
// }
// const clearAllDone = async () => {
//     await Habit.update({ done: false }, { where: { done: true } });
// }
// test();
// clearAllDone();


// let n = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });
// let str = t.split(":");
// let str2 = n.split(":");

// console.log(t);
// console.log(n);
// console.log(str);
// console.log(str2);

// console.log(((str2[0]-str[0])*60)+str2[1]-str[1]);
// if((str2[0]-str[0])*60+str2[1]-str[0]<30){

// }

// let d = t.getTime();
// console.log(d);