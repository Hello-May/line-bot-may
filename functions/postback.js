const lineBot = require('@line/bot-sdk');
const configBot = require('../config');
const clientBot = new lineBot.Client(configBot);
const lineNotify = require('./notify');
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

const postbackCommandSolver = async (event, status) => {
    let input = event.postback.data;
    let output;
    let str;
    let userId = (event.source.type == 'user' ? event.source.userId : event.source.groupId);
    if (input.includes(':')) {
        str = input.split(":");
        switch (str[0]) {
            case '新增象限':
                await dbUser.saveStatus(userId, '新增象限監聽:' + str[1]);
                output = {
                    type: 'text',
                    text: '請輸入事項內容'
                }
                break;
            case '任務修改視窗':
                output = task.update(str[1]);
                break;
            case '任務修改':
                await dbUser.saveStatus(userId, '任務修改監聽:' + str[1]);
                output = {
                    type: 'text',
                    text: '請輸入修改後的事項內容'
                }
                break;
            case '任務刪除':
                await dbTask.destroy(userId, str[1]);
                output = {
                    type: 'text',
                    text: '[已刪除任務]'
                }
                break;
            case '任務完成':
                let tmpTask = await dbTask.searchByDesc(userId, str[1]);
                await dbMonster.saveCharacter(userId,tmpTask.level); //怪物個性先直接存成任務象限
                await dbTask.destroy(userId, str[1]);
                output = {
                    type: 'text',
                    text: '[已完成任務] 小怪獸變聰明了~'
                }
                break;
            case '修改自律監聽':
                let j = await dbHabit.searchByHabit(userId, str[2]);
                if (j == 0) {
                    output = {
                        type: 'text',
                        text: '已沒有此習慣'
                    }
                } else {
                    switch (str[1]) {
                        case '時間監聽':
                            await dbHabit.update(userId, str[1], str[2], event.postback.params.time);
                            output = {
                                type: 'text',
                                text: '[已修改自律指令] ' + event.postback.params.time
                            }
                            break;
                        case '時間視窗':
                            output = life.selectTime(str[0] + ":時間監聽:" + str[2]);
                            break;
                        case '習慣監聽':
                        case '密語監聽':
                            await dbUser.saveStatus(userId, input);
                            output = {
                                type: 'text',
                                text: '請新增修改後內容，或輸入取消'
                            }
                            break;
                    }
                }
                break;
        }
    } else {
        switch (input) {
            case '刪除自律指令':
                await dbUser.saveStatus(userId, '刪除自律監聽');
                output = {
                    type: 'text',
                    text: '請輸入欲刪除之習慣，或輸入取消'
                };
                break;
            case '修改自律指令':
                await dbUser.saveStatus(userId, '修改自律視窗');
                output = {
                    type: 'text',
                    text: '請輸入欲修改之習慣，或輸入取消'
                };
                break;
            case '新增自律時間':
                await dbUser.saveStatus(userId, '新增自律監聽:' + event.postback.params.time);
                output = {
                    type: 'text',
                    text: '請輸入習慣，或者輸入取消'
                };
                break;
            case '新增自律指令':
                output = [{
                    type: 'text',
                    text: '請依序輸入時間/習慣/密語'
                }, life.selectTime('新增自律時間')];
                break;
            case '自律時間':
                output = {
                    type: 'text',
                    text: event.postback.params.time
                }
                break;
            case '小怪獸修改':
                output = monster.update(event);
                break;
            case '小怪獸改名':
                await dbUser.saveStatus(userId, '小怪獸改名監聽');
                output = {
                    type: 'text',
                    text: '請輸入小怪獸的新暱稱'
                }
                break;
            case '小怪獸初始化':
                output = monster.initialization(event);
                break;
            case '小怪獸初始化確定':
                let tmpUser = await dbUser.searchById(userId);
                let tmpMonster = await dbMonster.searchById(tmpUser.monsterId);
                dbMonster.initialization(tmpMonster.monsterId);
                output = {
                    type: 'text',
                    text: '[已初始化小怪獸]'
                }
                break;
            default:
                output = {
                    type: 'text',
                    text: 'postback:' + input
                }
        }
    }
    return clientBot.replyMessage(event.replyToken, output);
}

module.exports = {
    postbackCommandSolver
}