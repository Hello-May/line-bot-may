const lineBot = require('@line/bot-sdk');
const configBot = require('../config');
const clientBot = new lineBot.Client(configBot);
const lineNotify = require('./notification');
const math = require('mathjs');
const path = require('path');
const dbController = require('./dbController');
const main = require('./main');
const pause = require('./pause');
const richMenu = require('./main/richMenu');
const life = require('./main/life');
const monster = require('./main/monster');
const task = require('./main/task');
const pk = require('./main/pk');
const talk = require('./main/talk');
const db = require('../models');
const dbUser = require('./dbController/user');
const dbMonster = require('./dbController/monster');
const dbTask = require('./dbController/task');
const dbHabit = require('./dbController/habit');
const dbBattle = require('./dbController/battle');
const date = new Date().Format("yyyy/MM/dd");
const sticker = [[1, 2], [1, 4], [1, 5], [1, 13], [1, 14], [1, 114], [1, 119], [1, 125], [1, 132], [1, 134], [1, 137], [1, 138], [1, 139], [1, 407], [2, 34], [2, 45], [2, 144], [2, 164], [2, 166], [2, 171], [2, 172], [2, 516], [3, 180], [3, 184], [3, 186], [3, 195], [3, 200]];

function timeFn(d1) {//di作为一个变量传进来
    //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
    var dateBegin = new Date(d1.replace(/-/g, "/"));//将-转化为/，使用new Date
    var dateEnd = new Date();//获取当前时间
    var dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
    var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
    var leave1 = dateDiff % (24 * 3600 * 1000)    //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000))//计算出小时数
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000)    //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000))//计算相差分钟数
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000)      //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000)
    return minutes;
    // console.log(" 相差 "+dayDiff+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒")
    // console.log(dateDiff+"时间差的毫秒数",dayDiff+"计算出相差天数",leave1+"计算天数后剩余的毫秒数"
    // ,hours+"计算出小时数",minutes+"计算相差分钟数",seconds+"计算相差秒数");
}

const textCommandSolver = async (event, status) => {
    let userId = (event.source.type == 'user' ? event.source.userId : event.source.groupId);
    let input = event.message.text;
    let output;
    let tmpMonster;
    let tmpUser = await dbUser.searchById(userId);
    let habit = await dbHabit.getAll();
    for (let i = 0; i < habit.length; i++) {
        if (habit[i].secret == input && timeFn(date + ' ' + habit[i].time) < 30) {
            let stickno = Math.floor(Math.random() * sticker.length);
            await dbHabit.done(userId, input);
            await dbMonster.increaseMoney(tmpUser.monsterId);
            return clientBot.replyMessage(event.replyToken, [{
                type: 'text',
                text: '[已簽到] 賺取自律幣$1！'
            }, {
                type: 'sticker',
                packageId: sticker[stickno][0].toString(),
                stickerId: sticker[stickno][1].toString(),
                stickerResourceType: 'STATIC'
            }]);
        }
    }
    if (input.includes('你') && input.includes('誰')) {
        output = {
            type: 'text',
            text: '我是小怪獸～'
        }
    } else if (status.includes(':')) {
        let str = status.split(":");
        switch (str[0]) {
            case '戰鬥監聽':    //強制逃跑
                if (input == '逃跑') {
                    output = {
                        type: 'text',
                        text: '[結束戰鬥] 逃跑成功'
                    }
                    await dbUser.saveStatus(userId, '正常');
                    await dbBattle.destroy(userId);
                } else {
                    output = {
                        type: 'text',
                        text: '戰鬥還未結束，請輸入逃跑以強制結束。'
                    }
                }
                break;
            case '新增象限監聽':
                await dbTask.create(userId, str[1], input);
                output = {
                    type: 'text',
                    text: '[已新增任務]'
                }
                await dbUser.saveStatus(userId, '正常');
                break;
            case '任務修改監聽':
                await dbTask.update(userId, str[1], input);
                output = {
                    type: 'text',
                    text: '[任務已修改] ' + input
                }
                await dbUser.saveStatus(userId, '正常');
                break;
            case '新增自律監聽':         //如果有重複的習慣就擋掉，還沒做
                if (input == '取消') {
                    output = {
                        type: 'text',
                        text: '[已取消]'
                    }
                    await dbUser.saveStatus(userId, '正常');
                } else {
                    switch (str.length) {
                        case 3:
                            await dbUser.saveStatus(userId, status + ':' + input);  //input是習慣
                            output = [{
                                type: 'text',
                                text: '習慣: ' + input
                            },
                            {
                                type: 'text',
                                text: '請輸入密語，或者輸入取消'
                            }];
                            break;
                        case 4:
                            await dbUser.saveStatus(userId, status + ':' + input);  //input是密語
                            await dbHabit.create(userId, str[1] + ":" + str[2], str[3], input);
                            output = {
                                type: 'text',
                                text: '[已新增自律指令]\n' + '時間: '+str[1] + ":" + str[2] + " / 習慣: " + str[3] + " / 密語: " + input
                            };
                            await dbUser.saveStatus(userId, '正常');
                            break;
                    }
                }
                break;
            case '修改自律監聽':
                if (input == '取消') {
                    output = {
                        type: 'text',
                        text: '[已取消]'
                    }
                    await dbUser.saveStatus(userId, '正常');
                } else {
                    let j = await dbHabit.searchByHabit(userId, str[2]);
                    if (j == 0) {
                        output = {
                            type: 'text',
                            text: '已沒有此習慣 '
                        }
                        await dbUser.saveStatus(userId, '正常');
                    } else {
                        switch (str[1]) {
                            case '習慣監聽':
                            case '密語監聽':
                                await dbHabit.update(userId, str[1], str[2], input);
                                output = {
                                    type: 'text',
                                    text: '[已修改自律指令] ' + input
                                }
                                await dbUser.saveStatus(userId, '正常');
                                break;
                        }
                    }
                }
                break;

        }
    } else {
        switch (status) {
            case '猜拳監聽':    //強制逃跑
                if (input == '逃跑') {
                    output = {
                        type: 'text',
                        text: '[結束戰鬥] 逃跑成功'
                    }
                    await dbUser.saveStatus(userId, '正常');
                    await dbBattle.destroy(userId);
                } else {
                    output = {
                        type: 'text',
                        text: '戰鬥還未結束，請輸入逃跑以強制結束。'
                    }
                }
                break;
            case '修改自律視窗':
                if (input == '取消') {
                    output = {
                        type: 'text',
                        text: '[已取消]'
                    }
                    await dbUser.saveStatus(userId, '正常');
                } else {
                    let j = await dbHabit.searchByHabit(userId, input);
                    if (j.length == 0) {
                        output = {
                            type: 'text',
                            text: '沒有此習慣，請重新輸入，或輸入取消'
                        }
                    } else {
                        output = life.update(input);
                        await dbUser.saveStatus(userId, '正常');
                    }
                }
                break;
            case '刪除自律監聽':
                if (input == '取消') {
                    output = {
                        type: 'text',
                        text: '[已取消]'
                    }
                    await dbUser.saveStatus(userId, '正常');
                } else {
                    let j = await dbHabit.destroy(userId, input);
                    if (j != 0) {
                        await dbUser.saveStatus(userId, '正常');
                    }
                    output = {
                        type: 'text',
                        text: (j != 0 ? '[已刪除習慣] ' + input : '沒有此習慣，請重新輸入，或輸入取消')
                    }
                }
                break;
            case '小怪獸改名監聽':
                tmpMonster = await dbMonster.searchById(tmpUser.monsterId);
                await dbMonster.updateName(tmpMonster.monsterId, input);
                output = {
                    type: 'text',
                    text: '[小怪獸已改名] ' + input
                }
                await dbUser.saveStatus(userId, '正常');
                break;
            default:
                switch (input) {
                    case 'get':
                        output = {
                            "type": "flex",
                            "altText": "Flex Message",
                            "contents": {
                                "type": "bubble",
                                "direction": "ltr",
                                "footer": {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [
                                        {
                                            "type": "button",
                                            "action": {
                                                "type": "uri",
                                                "label": "TEST",
                                                "uri": "line://app/1653656986-4qXdKG0k"
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                        break;
                    case 'send':
                        output = {
                            "type": "flex",
                            "altText": "Flex Message",
                            "contents": {
                                "type": "bubble",
                                "direction": "ltr",
                                "footer": {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [
                                        {
                                            "type": "button",
                                            "action": {
                                                "type": "uri",
                                                "label": "TEST",
                                                // "uri": "line://app/1653656986-RmBdnj2y"  //別人的網址
                                                "uri": "line://app/1653656986-Vk7PXO28"  //自己做api
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                        break;
                    case 'T':
                        output = life.selectTime('自律時間');
                        break;
                    case 'P':
                        output = lineNotify.test();
                        break;
                    case '嗨':
                        output = main.test(event);
                        break;
                    case '#':
                        output = richMenu.call(event);
                        break;
                    case '#連動':
                        dbController.saveTmpId(event);
                        output = lineNotify.authorize();
                        break;;
                    case '#呼叫':
                        dbUser.saveStatus(userId, '正常');
                        output = pause.pause(event);
                        break;
                    case '#閉嘴':
                        dbUser.saveStatus(userId, '睡眠');
                        output = pause.pause(event);
                        break;
                    case '#修煉':
                        output = await life.call(event);
                        break;
                    case '#任務':
                        output = await task.call(event);
                        break;
                    case '#小怪獸':
                        output = await monster.call(userId);
                        // output = monster.call(event).catch(err=>{console.log(err)});
                        break;
                    case '#戰鬥':
                        output = await pk.call(event);
                        break;
                    case '#酒館':
                        output = talk.call(event);
                        break;
                    default:
                        let msg;
                        try {
                            msg = '答案是' + math.eval(input.toLowerCase()).toString();
                            output = {
                                type: 'text',
                                text: msg
                            }
                        } catch (err) {
                            // let timestamp = new Date(event.timestamp).toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });
                            // let name = event.source.userId;
                            // let profile = client.getChatMemberProfile;
                            // msg = timestamp + '\n' + name + '說了：' + input;
                            // msg = '你說了：' + input;
                            console.log(err);
                        }
                }
        }
    }

    if (input.includes("#")) {  //這樣會有缺點是非指令也會增加經驗值
        tmpMonster = await dbMonster.searchById(tmpUser.monsterId);
        await dbMonster.increaseEXP(tmpMonster.monsterId);
        if (tmpMonster.exp == tmpMonster.level * 5) {   //判斷升等 依據個性分配點數
            await dbMonster.levelUp(tmpMonster);
            let output2 = {
                type: 'text',
                text: '[LEVEL UP] ' + tmpMonster.name + '長大了!!'
            }
            return clientBot.replyMessage(event.replyToken, [output, output2]);
        }
    }
    return clientBot.replyMessage(event.replyToken, output);
}

const imgCommandSolver = (event) => {
    let msg = '水啦~'
    let stickno = Math.floor(Math.random() * sticker.length);
    return clientBot.replyMessage(event.replyToken, [{
        type: 'text',
        text: msg
    }, {
        type: 'sticker',
        packageId: sticker[stickno][0].toString(),
        stickerId: sticker[stickno][1].toString(),
        stickerResourceType: 'STATIC'
    }]);
}

const stickerCommandSolver = (event) => {
    let stickno = Math.floor(Math.random() * sticker.length);
    return clientBot.replyMessage(event.replyToken, {
        type: 'sticker',
        packageId: sticker[stickno][0].toString(),
        stickerId: sticker[stickno][1].toString(),
        stickerResourceType: 'STATIC'
    });
}

module.exports = {
    textCommandSolver,
    imgCommandSolver,
    stickerCommandSolver
}