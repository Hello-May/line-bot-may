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
    let output2;
    let output3;
    let str;
    let userId = (event.source.type == 'user' ? event.source.userId : event.source.groupId);
    //↓增加經驗值
    let tmpUser = await dbUser.searchById(userId);
    let tmpMonster = await dbMonster.searchById(tmpUser.monsterId);
    await dbMonster.increaseEXP(tmpMonster.monsterId);
    if (input.includes(':')) {
        str = input.split(":");
        switch (str[0]) {
            case '購買糧食':
                if (tmpMonster.money >= parseInt(str[2])) {
                    await dbMonster.updateMoney(tmpMonster.monsterId, tmpMonster.money - parseInt(str[2]));
                    await dbMonster.updateFood(tmpMonster.monsterId, tmpMonster.food + parseInt(str[1]));
                    output = {
                        type: 'text',
                        text: '[購買成功] ' + tmpMonster.name + '覺得活在世上更有意義了！'
                    }
                } else {
                    output = {
                        type: 'text',
                        text: '沒有足夠的自律幣'
                    }
                }
                break;
            case '變種商店':
                output = life.skinStore(str[1]);
                break;
            case '購買外觀':
                if (tmpMonster.battleMoney >= parseInt(str[2])) {
                    await dbMonster.updateBattleMoney(tmpMonster.monsterId, tmpMonster.battleMoney - parseInt(str[2]));
                    await dbMonster.updateSkin(tmpMonster.monsterId, str[1]);
                    output = {
                        type: 'text',
                        text: '[購買成功] ' + tmpMonster.name + '把東西吃掉後，身體產生巨大變化！'
                    }
                } else {
                    output = {
                        type: 'text',
                        text: '沒有足夠的戰利幣'
                    }
                }
                break;
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
                await dbMonster.saveCharacter(tmpMonster.monsterId, tmpTask.level); //怪物個性先直接存成任務象限
                await dbTask.destroy(userId, str[1]);
                output = {
                    type: 'text',
                    text: '[已完成任務] ' + tmpMonster.name + '更有主見了~'
                }
                break;
            case '戰鬥開始':
                if (status != '正常') {
                    output = {
                        type: 'text',
                        text: '請先輸入取消，以取消當前操作。'
                    }
                } else {
                    output = await pk.firstMove(userId, str[1]);    //str[1]=tarMonster.monsterId
                }
                break;
            case '戰鬥先攻':
                if (status == '猜拳監聽') {
                    output = await pk.firstMoveJudge(userId, str[1]);
                } else {
                    output = {
                        type: 'text',
                        text: '無效'
                    }
                }
                break;
            case '戰鬥回合':
                let str2 = status.split(":");
                if (str2[1] != str[1]) {
                    output = {
                        type: 'text',
                        text: '無效'
                    }
                } else {
                    if (input.includes('逃跑')) {
                        //這裡判斷雙方agi
                        await dbUser.saveStatus(userId, '正常');
                        await dbBattle.destroy(userId);
                        output = {
                            type: 'text',
                            text: '[戰鬥結束] 逃跑成功'
                        }
                    } else if (input.includes('道具')) {
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
                                                "type": "postback",
                                                "label": "下回合",
                                                "data": str[0] + ':' + str[1] + ':' + str[2] + ':攻擊'
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    } else {
                        let next = parseInt(str[1]) + 1;
                        await dbUser.saveStatus(userId, '戰鬥監聽:' + next);
                        let j2;
                        if (str[2] == 'player' && input.includes('選擇')) {
                            output2 = await pk.round(userId, next, 'player');
                        } else if (str[2] == 'player' && input.includes('攻擊')) {
                            j2 = await dbBattle.round(userId, str[2]);
                            switch (j2) {
                                case '對方勝':
                                    output = {
                                        type: 'text',
                                        text: '[戰鬥結束] ' + j2
                                    }
                                    break;
                                case '玩家勝':
                                    //增加戰利幣
                                    await dbMonster.increaseBattleMoney(tmpMonster.monsterId);
                                    output = {
                                        type: 'text',
                                        text: '[戰鬥結束] ' + j2 + '，贏得戰利幣$1'
                                    }
                                    break;
                                default:
                                    output = {
                                        type: 'text',
                                        text: '戰鬥回合' + str[1] + ': ' + j2 + '  foucs:' + str[2]
                                    }
                                    output2 = {
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
                                                            "type": "postback",
                                                            "label": "對方攻來",
                                                            "data": str[0] + ':' + next + ':' + 'target' + ':下回合'
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                    break;
                            }
                        } else if (str[2] == 'target') {
                            j2 = await dbBattle.round(userId, str[2]);
                            switch (j2) {
                                case '對方勝':
                                    output = {
                                        type: 'text',
                                        text: '[戰鬥結束] ' + j2
                                    }
                                    break;
                                case '玩家勝':
                                    //增加戰利幣
                                    await dbMonster.increaseBattleMoney(tmpMonster.monsterId);
                                    output = {
                                        type: 'text',
                                        text: '[戰鬥結束] ' + j2
                                    }
                                    break;
                                default:
                                    output = {
                                        type: 'text',
                                        text: '戰鬥回合' + str[1] + ': ' + j2 + '  foucs:' + str[2]
                                    }
                                    output2 = await pk.round(userId, next, 'player');
                                    break;
                            }
                        }
                    }
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
                output = talk.keyWord();
                break;
            case '抖內開發者':
                output = {
                    type: 'text',
                    text: 'HI~麻煩轉帳至台新銀行(812)帳號是28881001521601或是點擊連結開啟Richart APP可以直接帶入我的帳號唷 https://richart.tw/TSDIB_RichartWeb/RC04/RC040300?token=my3nMz81ous%3D'
                };
                break;
            case '變種商店':
                output = life.lightOrDark();
                break;
            case '糧食商店':
                output = life.foodStore();
                break;
            case '能力商店':
                output = {
                    type: 'text',
                    text: '能力商店的訊息窗'
                };
                break;
            // case '購買自律商品':
            //     await dbUser.saveStatus(userId, '購買商品監聽');
            //     output = {
            //         type: 'text',
            //         text: '請輸入欲購買之商品編號'
            //     };
            //     break;
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
    //判斷升等  依據個性分配點數
    if (tmpMonster.exp == tmpMonster.level * 5) {
        await dbMonster.levelUp(tmpMonster);
        if (output2 == undefined) {
            output2 = {
                type: 'text',
                text: '[LEVEL UP] ' + tmpMonster.name + '長大了!!'
            }
        } else {
            output3 = {
                type: 'text',
                text: '[LEVEL UP] ' + tmpMonster.name + '長大了!!'
            }
        }

    }
    if (output2 != undefined) {
        if (output3 != undefined) {
            return clientBot.replyMessage(event.replyToken, [output, output2, output3]);
        }
        return clientBot.replyMessage(event.replyToken, [output, output2]);
    }
    return clientBot.replyMessage(event.replyToken, output);
}

module.exports = {
    postbackCommandSolver
}