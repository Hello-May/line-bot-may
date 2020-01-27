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
const dbBattle = require('./dbController/battle');

const postbackCommandSolver = async (event, status) => {
    let input = event.postback.data;
    let output;
    let str;
    let userId = (event.source.type == 'user' ? event.source.userId : event.source.groupId);
    //↓增加經驗值
    let tmpUser = await dbUser.searchById(userId);
    let tmpMonster = await dbMonster.searchById(tmpUser.monsterId);
    await dbMonster.increaseEXP(tmpMonster.monsterId);
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
                // let tmpUser = await dbUser.searchById(userId);
                // let tmpMonster = await dbMonster.searchById(tmpUser.monsterId);
                await dbMonster.saveCharacter(tmpMonster.monsterId, tmpTask.level); //怪物個性先直接存成任務象限
                await dbTask.destroy(userId, str[1]);
                output = {
                    type: 'text',
                    text: '[已完成任務] ' + tmpMonster.name + '更有主見了~'
                }
                break;
            case '戰鬥開始':
                output = await pk.firstMove(userId, str[1]);    //tarMonster.monsterId
                break;
            case '戰鬥先攻':
                output = pk.firstMoveJudge(str[1]);
                break;
            case '戰鬥回合':
                //如果有一方血沒了，改變狀態為正常，回傳勝利訊息及增加經驗等獎勵
                //要繼續打call dbBattle的函式，傳userId和目前攻擊的人是誰，傳進去抓battle的兩隻比對
                let j2 = await dbBattle.round(userId, str[1]);
                console.log(j2 + '<--------------')
                switch (j2) {
                    case '對方勝':
                        output = {
                            type: 'text',
                            text: '[戰鬥結束] ' + j2
                        }
                        break;
                    case '玩家勝':
                        //獎勵
                        output = {
                            type: 'text',
                            text: '[戰鬥結束] ' + j2
                        }
                        break;
                    default:
                        // output = {   //要一直監聽避免一直案
                        //     type: 'postback',
                        //     label: j2 + '\n下回合',
                        //     data: '戰鬥回合:' + (focus == 'player' ? 'target' : 'player')
                        // }
                        output = {
                            "type": "flex",
                            "altText": "Flex Message",
                            "contents": {
                                "type": "bubble",
                                "direction": "ltr",
                                "body": {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                        {
                                            "type": "text",
                                            "text": j2,
                                            "align": "center"
                                        }
                                    ]
                                },
                                "footer": {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [
                                        {
                                            "type": "button",
                                            "action": {
                                                "type": "postback",
                                                "label": '\n下回合',
                                                "data": '戰鬥回合:' + (str[1] == 'player' ? 'target' : 'player')
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                        break;
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
            case '戰鬥隨機':
                output = await pk.target(event);
                break;
            case '查詢指令':
                output = {
                    type: 'text',
                    text: '[指令] 說明\n[#] 叫出選單\n[#連動] 連動line notify\n[#呼叫] 啟動機器人\n[#閉嘴] 關閉機器人\n[#修煉] 選單1\n[#任務] 選單2\n[#小怪獸] 選單3\n[#戰鬥] 選單4\n[#酒館] 選單5'
                };
                break;
            case '抖內開發者':
                output = {
                    type: 'text',
                    text: 'HI~麻煩轉帳至台新銀行(812)帳號是28881001521601或是點擊連結開啟Richart APP可以直接帶入我的帳號唷 https://richart.tw/TSDIB_RichartWeb/RC04/RC040300?token=my3nMz81ous%3D'
                };
                break;
            case '購買自律商品':
                await dbUser.saveStatus(userId, '購買商品監聽');
                output = {
                    type: 'text',
                    text: '請輸入欲購買之商品編號'
                };
                break;
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
                if (!input.includes("#")) {
                    output = {
                        type: 'text',
                        text: input
                    }
                }
        }
    }
    //判斷升等
    if (tmpMonster.exp == tmpMonster.level * 5) {
        await dbMonster.levelUp(tmpMonster.monsterId);
        let output2 = {
            type: 'text',
            text: '[LEVEL UP] ' + tmpMonster.name + '長大了!!'
        }
        return clientBot.replyMessage(event.replyToken, [output, output2]);
    } else {
        return clientBot.replyMessage(event.replyToken, output);
    }
}

module.exports = {
    postbackCommandSolver
}