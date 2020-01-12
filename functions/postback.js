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
            output = monster.update(event);
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