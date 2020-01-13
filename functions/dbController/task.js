const db = require('../../models');
const { tasks } = require("../../models");
const Task = db.tasks;

const searchById = async (id) => {
    let task = await tasks.findAll({ where: { userId: id } });
    return task;
}

const initialization = async (id) => {
    //1
    await Task.create({
        force: true,
        userId: id,
        level: 1,
        desc: '幫老闆接小孩',
        createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
    });
    await Task.create({
        force: true,
        userId: id,
        level: 1,
        desc: '繳電費要被斷電了阿阿阿阿',
        createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
    });
    await Task.create({
        force: true,
        userId: id,
        level: 1,
        desc: 'ptt.cc/bbs/Gossiping/index.html',
        createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
    });
    //2
    await Task.create({
        force: true,
        userId: id,
        level: 2,
        desc: '客戶禮物挑選',
        createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
    });
    await Task.create({
        force: true,
        userId: id,
        level: 2,
        desc: '砍掉沒用的信用卡',
        createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
    });
    await Task.create({
        force: true,
        userId: id,
        level: 2,
        desc: '整理上課筆記',
        createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
    });
    //3
    await Task.create({
        force: true,
        userId: id,
        level: 3,
        desc: '晚上要倒垃圾',
        createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
    });
    await Task.create({
        force: true,
        userId: id,
        level: 3,
        desc: '超市六折限時特價',
        createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
    });
    await Task.create({
        force: true,
        userId: id,
        level: 3,
        desc: '冷氣漏水要找廠商修',
        createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
    });
    //4
    await Task.create({
        force: true,
        userId: id,
        level: 4,
        desc: '進擊的巨人最新季',
        createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
    });
    await Task.create({
        force: true,
        userId: id,
        level: 4,
        desc: '晚上跟朋友喇咧',
        createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
    });
    await Task.create({
        force: true,
        userId: id,
        level: 4,
        desc: '想吃肉圓加辣椒',
        createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
    });
}

const create = async (id, level, desc) => {
    await Task.create({
        force: true,
        userId: id,
        level: level,
        desc: desc,
        createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
    });
}

const update = async (id, desc) => {
    await Task.update({
        desc: desc,
    }, { where: { userId: id, desc: desc } });
}

const destroy = async (id, desc) => {
    await Task.destroy({ where: { userId: id, desc: desc } });
}

module.exports = {
    searchById,
    initialization,
    create,
    update,
    destroy
}