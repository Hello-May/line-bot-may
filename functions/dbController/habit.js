const db = require('../../models');
const { habits } = require("../../models");
const Habit = db.habits;


const initialization = async (id) => {
    await Habit.create({
        force: true,
        userId: id,
        time: level,    //設定時間
        habit: desc,
        secret: desc,
        createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
    });
}

module.exports = {
    initialization
}