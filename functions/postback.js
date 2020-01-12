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

const postbackCommandSolver = async (event, status) => {
    let input = event.postback.data;
    let output;
    let userId = (event.source.type == 'user' ? event.source.userId : event.source.groupId);
    switch (input) {
        case '小怪獸修改':
            output = monster.update(event);
            break;
        case '小怪獸改名':
            dbUser.saveStatus(userId, '小怪獸改名監聽');
            output = {
                type: 'text',
                text: '請輸入小怪獸的新暱稱'
            }
            break;
        case '小怪獸初始化':
            output = monster.initialization(event);
            break;
        case '小怪獸初始化確認':
            dbMonster.initialization(userId);
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
    return clientBot.replyMessage(event.replyToken, output);
}

module.exports = {
    postbackCommandSolver
}