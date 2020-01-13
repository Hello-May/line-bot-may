const db = require('../../models');
const { habits } = require("../../models");
const Habit = db.habits;


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
            createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
            updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
        });
    }

}

module.exports = {
    initialization
}