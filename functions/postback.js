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

const postbackCommandSolver = async (event, status) => {
    let input = event.postback.data;
    let output;
    let userId = (event.source.type == 'user' ? event.source.userId : event.source.groupId);

    if (input.includes('新增象限')) {
        let qadrant = input.split(":");
        await dbUser.saveStatus(userId, '新增象限監聽:' + qadrant[1]);
        output = {
            type: 'text',
            text: '請輸入事項內容'
        }
    } else if (input.includes('任務修改視窗')) {
        let desc = input.split(":");
        output = task.update(desc[1]);
    } else if (input.includes('任務修改')) {
        let desc = input.split(":");
        await dbUser.saveStatus(userId, '任務修改監聽');
        output = {
            type: 'text',
            text: '請輸入修改後的事項內容'
        }
    } else if (input.includes('任務刪除')) {
        let desc = input.split(":");
        await dbTask.destroy(userId,desc[1]);
        output = {
            type: 'text',
            text: '[已刪除任務]'
        }
    } else if (input.includes('任務完成')) {
        let desc = input.split(":");
        await dbTask.destroy(userId,desc[1]);
        //小怪獸+素質(影響性格)
        output = {
            type: 'text',
            text: '[已完成任務] 小怪獸變聰明了~'
        }
    } else {
        switch (input) {
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