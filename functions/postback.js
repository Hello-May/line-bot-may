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

const postbackCommandSolver = async (event,status) => {
    let input = event.postback.data;
    let output;
    switch (input) {
        case '小怪獸修改':
            output = monster.update;
            break;
        case '#':
            output = richMenu.call();
            break;
        case '連動':
            dbController.saveTmpId(event);
            output = lineNotify.authorize();
            break;;
        case '呼叫':
            shutUp = false;
            output = pause.pause(event);
            break;
        case '閉嘴':
            shutUp = true;
            output = pause.pause(event);
            break;
        case '嗨':
            output = main.test(event);
            break;
        case '#修煉':
            output = life.call(event);
            break;
        case '#任務':
            output = task.call(event);
            break;
        case '#小怪獸':
            output = await monster.call(event);
            break;
        case '#戰鬥':
            output = pk.call(event);
            break;
        case '#酒館':
            output = talk.call(event);
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