const db = require('../../models');
const { habits } = require("../../models");
const Habit = db.habits;
// const date = new Date().Format("yyyy/MM/dd");

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

const getAll = async () => {
    return await Habit.findAll();
}

const done = async (id, secret) => {
    await Habit.update({ done: true }, { where: { userId: id, secret: secret } });
}

const clearAllDone = async () => {
    await Habit.update({ done: false }, { where: { done: true } });
}

const searchById = async (id) => {
    let habit = await habits.findAll({ where: { userId: id } });
    sortByTime(habit);
    return habit;
}

const searchByHabit = async (id, habit) => {
    let habitData = await habits.findAll({ where: { userId: id, habit: habit } });
    return habitData;
}

const searchByTime = async (hour, min) => {
    let habit = await habits.findAll({ where: { time: hour + ":" + min } });
    return habit;
}

function sortByTime(habit) {
    const date = new Date().Format("yyyy/MM/dd");
    for (let i = 1; i < habit.length; i++) {
        for (let j = 0; j < habit.length - i; j++) {
            if ((Date.parse(date + ' ' + habit[j].time)).valueOf() > (Date.parse(date + ' ' + habit[j + 1].time)).valueOf()) {
                let tmp = habit[j];
                habit[j] = habit[j + 1];
                habit[j + 1] = tmp;
            }
        }
    }
}

const create = async (id, time, habit, secret) => {
    await Habit.create({
        force: true,
        userId: id,
        time: time,
        habit: habit,
        secret: secret,
        done: false,
        createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
    });
}

const destroy = async (id, habit) => {
    return await Habit.destroy({ where: { userId: id, habit: habit } });
}

const initialization = async (id) => {
    // let time = [date.getHours()+':'+date.getMinutes()];
    let tmpTimes = ['07:00', '08:00', '12:00', '15:00', '18:00', '19:00', '21:00', '23:00'];
    let tmpHabits = ['早起', '收信', '午餐', '運動', '晚餐', '吃藥', '讀書', '早睡'];
    let tmpSecrets = ['早安', '開工啦', '放風去', '跑起來', '爽爽吃', '我吃了', 'be better', '晚安'];

    for (let i = 0; i < tmpTimes.length; i++) {
        await Habit.create({
            force: true,
            userId: id,
            time: tmpTimes[i],
            habit: tmpHabits[i],
            secret: tmpSecrets[i],
            done: false,
            createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
            updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
        });
    }
}

const update = async (id, item, habit, input) => {
    switch (item) {
        case '時間監聽':
            await Habit.update({
                time: input
            }, { where: { userId: id, habit: habit } });
            break;
        case '習慣監聽':
            await Habit.update({
                habit: input
            }, { where: { userId: id, habit: habit } });
            break;
        case '密語監聽':
            await Habit.update({
                secret: input
            }, { where: { userId: id, habit: habit } });
            break;
    }
}

module.exports = {
    initialization,
    searchById,
    create,
    destroy,
    update,
    searchByHabit,
    searchByTime,
    clearAllDone,
    done,
    getAll
}