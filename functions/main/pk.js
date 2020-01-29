const dbUser = require('../dbController/user');
const dbMonster = require('../dbController/monster');
const dbSkin = require('../dbController/skin');
const dbBattle = require('../dbController/battle');
const opt = ['剪刀', '石頭', '布'];
const pic = ['https://image.winudf.com/v2/image1/dHcubmV0Lml3b3JrLnNpZHNzY19zY3JlZW5fMV8xNTQ3Nzk5Mzk3XzAwMw/screen-1.jpg?fakeurl=1&type=.jpg', 'https://image.winudf.com/v2/image1/dHcubmV0Lml3b3JrLnNpZHNzY19zY3JlZW5fMl8xNTQ3Nzk5Mzk5XzAxNQ/screen-2.jpg?fakeurl=1&type=.jpg', 'https://image.winudf.com/v2/image1/dHcubmV0Lml3b3JrLnNpZHNzY19zY3JlZW5fM18xNTQ3Nzk5NDAwXzA0MQ/screen-3.jpg?fakeurl=1&type=.jpg'];


Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

function checkWinner(player, target) {
    let winner;
    if (player == target) {
        winner = 0;
    }
    if (player == opt[0] && target == opt[1]) {
        winner = 2;
    }
    if (player == opt[0] && target == opt[2]) {
        winner = 1;
    }

    if (player == opt[1] && target == opt[0]) {
        winner = 1;
    }
    if (player == opt[1] && target == opt[2]) {
        winner = 2;
    }

    if (player == opt[2] && target == opt[0]) {
        winner = 2;
    }
    if (player == opt[2] && target == opt[1]) {
        winner = 1;
    }
    return winner;
}

async function genByTarget(target) {
    let output = [];
    let skin;
    let character;
    for (let i = 0; i < target.length; i++) {
        skin = await dbSkin.searchByNameAndRandom(target[i].skin);
        switch (target[i].character) {
            case 1:
                character = '行動派';   //agi
                break;
            case 2:
                character = '嚴謹派';   //vit
                break;
            case 3:
                character = '領導派';   //str
                break;
            case 4:
                character = '樂天派';   //lucky
                break;
            default:
                character = "懵懂無知";
        }
        output.push({
            "type": "bubble",
            "direction": "ltr",
            "header": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": target[i].name,
                        "size": "lg",
                        "align": "center",
                        "weight": "bold"
                    }
                ]
            },
            "hero": {
                "type": "image",
                // "url": "https://images2.gamme.com.tw/news2/2018/86/51/qZqVnqaYl6aWp6Q.gif",  //皮卡丘
                // "url": "https://i.imgur.com/YptXiwa.gif",   //綠水靈
                "url": skin.image,
                "size": "lg",
                "aspectRatio": "1.51:1",
                "aspectMode": "fit",
                "action": {
                    "type": "postback",
                    "label": "叫聲",
                    "data": skin.say
                }
            },
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "separator"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "none",
                        "margin": "lg",
                        "contents": [
                            {
                                "type": "text",
                                "text": "誕辰：" + target[i].born.Format("yyyy/MM/dd hh:mm:ss")
                            },
                            {
                                "type": "text",
                                "text": "品種：" + target[i].skin
                            },
                            {
                                "type": "text",
                                "text": "等級：" + target[i].level
                            },
                            {
                                "type": "text",
                                "text": "性格：" + character,
                            },
                            {
                                "type": "text",
                                "text": "agi/vit/str/lucky：" + target[i].agi + '/' + target[i].vit + '/' + target[i].str + '/' + target[i].lucky
                            }
                        ]
                    }
                ]
            },
            "footer": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "separator"
                    },
                    {
                        "type": "button",
                        "action": {
                            "type": "postback",
                            "label": "戰鬥",
                            "data": "戰鬥開始:" + target[i].monsterId,
                        }
                    }
                ]
            }
        })
    }
    return output;
}

const target = async (event) => {
    let user;
    let monster;
    let target;
    let output;
    let userId = (event.source.type == 'user' ? event.source.userId : event.source.groupId);

    try {
        user = await dbUser.searchById(userId);
        monster = await dbMonster.searchById(user.monsterId);
        target = await dbMonster.searchByRandomAndLevel(monster.level, 3);
        output = await genByTarget(target);
        // console.log("monster:" + JSON.stringify(monster));
    } catch (err) {
        console.log(err);
    }

    return {
        "type": "flex",
        "altText": "Flex Message",
        "contents": {
            "type": "carousel",
            "contents": output
        }
    }
}

const call = (event) => {
    return {
        "type": "flex",
        "altText": "Flex Message",
        "contents": {
            "type": "bubble",
            "direction": "ltr",
            "header": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "戰鬥",
                        "size": "lg",
                        "align": "center",
                        "weight": "bold",
                        "color": "#000000"
                    }
                ]
            },
            "hero": {
                "type": "image",
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbWVf29gHx_rYMtQqzauk_l2KxzlhdVZq0Y8q9GxDkWbFaDmAI&s",
                "size": "xl",
                "aspectRatio": "1.51:1",
                "aspectMode": "fit"
            },
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "separator"
                    },
                    {
                        "type": "text",
                        "text": "小怪獸們認為不打不相識，每遇見一隻獸，總要打上一場才算交流，並且堅信著在與他獸的切磋中，更能激發潛能、成長茁壯。\nrange:小怪獸同等或高於3等內",
                        "margin": "xxl",
                        "align": "start",
                        "gravity": "center",
                        "weight": "bold",
                        "wrap": true
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
                            "label": "隨機",
                            "data": "戰鬥隨機"
                        }
                    },
                    {
                        "type": "separator"
                    },
                    {
                        "type": "button",
                        "action": {
                            "type": "postback",
                            "label": "指定",
                            "data": "戰鬥指定"
                        }
                    }
                ]
            }
        }
    }
}

const firstMove = async (userId, player, tarMonsterId) => {
    let target = await dbMonster.searchById(tarMonsterId);
    if (target == undefined) {
        return {
            type: 'text',
            text: '已沒有此敵人'
        }
    }
    if (target.level < player.level) {
        return {
            type: 'text',
            text: '敵人等級低於' + player.name
        }
    }
    let targetSkin = await dbSkin.searchByNameAndRandom(target.skin);
    let playerSkin = await dbSkin.searchByNameAndRandom(player.skin);
    await dbBattle.create(userId, player, target);
    await dbUser.saveStatus(userId, '猜拳監聽');
    let battle = await dbBattle.searchByUserId(userId);
    let battleTarget;
    let battlePlayer;
    for (let i = 0; i < battle.length; i++) {
        if (battle[i].identity == 'target') {
            battleTarget = battle[i];
        } else {
            battlePlayer = battle[i];
        }
    }
    return {
        "type": "flex",
        "altText": "Flex Message",
        "contents": {
            "type": "bubble",
            "direction": "ltr",
            "header": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "請猜拳決定先攻",
                        "size": "lg",
                        "align": "center",
                        "weight": "bold"
                    }
                ]
            },
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "margin": "lg",
                        "contents": [
                            {
                                "type": "image",
                                "url": targetSkin.image,
                                "gravity": "center",
                                "size": "xs",
                                "action": {
                                    "type": "postback",
                                    "label": "叫聲",
                                    "data": targetSkin.say
                                }
                            },
                            {
                                "type": "image",
                                "url": playerSkin.image,
                                "size": "xs",
                                "action": {
                                    "type": "postback",
                                    "label": "叫聲",
                                    "data": playerSkin.say
                                }
                            }
                        ]
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "text",
                                "text": "敵方:" + target.name,
                                "align": "center",
                                "size": "xxs",
                                "wrap": true
                            },
                            {
                                "type": "text",
                                "text": "我方:" + player.name,
                                "align": "center",
                                "size": "xxs",
                                "wrap": true
                            }
                        ]
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "text",
                                "text": "HP:" + battleTarget.hp,
                                "align": "center",
                                "size": "xxs",
                                "wrap": true
                            },
                            {
                                "type": "text",
                                "text": "HP:" + battlePlayer.hp,
                                "align": "center",
                                "size": "xxs",
                                "wrap": true
                            }
                        ]
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "text",
                                "text": "agi/vit/str/lucky:\n" + battleTarget.agi + '/' + battleTarget.vit + '/' + battleTarget.str + '/' + battleTarget.lucky,
                                "align": "center",
                                "size": "xxs",
                                "wrap": true
                            },
                            {
                                "type": "text",
                                "text": "agi/vit/str/lucky:\n" + battlePlayer.agi + '/' + battlePlayer.vit + '/' + battlePlayer.str + '/' + battlePlayer.lucky,
                                "align": "center",
                                "size": "xxs",
                                "wrap": true
                            }
                        ]
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
                            "label": "剪刀",
                            "data": "戰鬥先攻:剪刀"
                        }
                    },
                    {
                        "type": "separator"
                    },
                    {
                        "type": "button",
                        "action": {
                            "type": "postback",
                            "label": "石頭",
                            "data": "戰鬥先攻:石頭"
                        }
                    },
                    {
                        "type": "separator"
                    },
                    {
                        "type": "button",
                        "action": {
                            "type": "postback",
                            "label": "布",
                            "data": "戰鬥先攻:布"
                        }
                    }
                ]
            }
        }
    }
}

const firstMoveJudge = async (userId, player) => {
    let target = opt[Math.round(Math.random() * (opt.length - 1))];
    let winner = checkWinner(player, target);
    if (winner == 0) {
        return {
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
                            "text": "平手，再來一次！",
                            "align": "center",
                            "wrap": true
                        },
                        {
                            "type": "box",
                            "layout": "horizontal",
                            "margin": "lg",
                            "contents": [
                                {
                                    "type": "image",
                                    "url": (target == opt[0] ? pic[0] : (target == opt[1] ? pic[1] : pic[2])),
                                    "gravity": "center",
                                    "size": "xxs"
                                },
                                {
                                    "type": "image",
                                    "url": (player == opt[0] ? pic[0] : (player == opt[1] ? pic[1] : pic[2])),
                                    "size": "xxs"
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "敵方",
                                    "align": "center",
                                    "size": "xs"
                                },
                                {
                                    "type": "text",
                                    "text": "我方",
                                    "align": "center",
                                    "size": "xs"
                                }
                            ]
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
                                "label": "剪刀",
                                "data": "戰鬥先攻:剪刀"
                            }
                        },
                        {
                            "type": "separator"
                        },
                        {
                            "type": "button",
                            "action": {
                                "type": "postback",
                                "label": "石頭",
                                "data": "戰鬥先攻:石頭"
                            }
                        },
                        {
                            "type": "separator"
                        },
                        {
                            "type": "button",
                            "action": {
                                "type": "postback",
                                "label": "布",
                                "data": "戰鬥先攻:布"
                            }
                        }
                    ]
                }
            }
        }
    }
    await dbUser.saveStatus(userId, "戰鬥回合:1:" + (winner == 1 ? "player" : "target") + ':選擇');
    return {
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
                        "type": "box",
                        "layout": "horizontal",
                        "margin": "lg",
                        "contents": [
                            {
                                "type": "image",
                                "url": (target == opt[0] ? pic[0] : (target == opt[1] ? pic[1] : pic[2])),
                                "gravity": "center",
                                "size": "xxs"
                            },
                            {
                                "type": "image",
                                "url": (player == opt[0] ? pic[0] : (player == opt[1] ? pic[1] : pic[2])),
                                "size": "xxs"
                            }
                        ]
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "text",
                                "text": "敵方",
                                "align": "center",
                                "size": "xs"
                            },
                            {
                                "type": "text",
                                "text": "我方",
                                "align": "center",
                                "size": "xs"
                            }
                        ]
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
                            "label": (winner == 1 ? "玩家先攻" : "對手先攻"),
                            "data": "戰鬥回合:1:" + (winner == 1 ? "player" : "target") + ':選擇'
                        }
                    }
                ]
            }
        }
    }
}

const fight = async (userId, round, hurt, foucs) => {
    let battle = await dbBattle.searchByUserId(userId);
    let target;
    let player;
    for (let i = 0; i < battle.length; i++) {
        if (battle[i].identity == 'target') {
            target = battle[i];
        } else {
            player = battle[i];
        }
    }
    let targetSkin = await dbSkin.searchByNameAndRandom(target.skin);
    let playerSkin = await dbSkin.searchByNameAndRandom(player.skin);
    return {
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
                        "text": '戰鬥回合' + round + ': 傷害' + hurt + '  foucs:' + foucs,
                        "align": "center",
                        "wrap": true
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "text",
                                "text": (foucs == 'target' ? "⚔" : "-" + hurt),
                                "align": "center",
                                "weight": "bold",
                                "color": (foucs == 'target' ? "#0700FF" : "#FF0000")
                            },
                            {
                                "type": "text",
                                "text": "Text",
                                "align": (foucs == 'player' ? "⚔" : "-" + hurt),
                                "weight": "bold",
                                "color": (foucs == 'player' ? "#0700FF" : "#FF0000")
                            }
                        ]
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "image",
                                "url": targetSkin.image,
                                "gravity": "center",
                                "size": "xs",
                                "action": {
                                    "type": "postback",
                                    "label": "叫聲",
                                    "data": targetSkin.say
                                }
                            },
                            {
                                "type": "image",
                                "url": playerSkin.image,
                                "size": "xs",
                                "action": {
                                    "type": "postback",
                                    "label": "叫聲",
                                    "data": playerSkin.say
                                }
                            }
                        ]
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "text",
                                "text": "敵方:" + target.name,
                                "align": "center",
                                "size": "xxs",
                                "wrap": true
                            },
                            {
                                "type": "text",
                                "text": "我方:" + player.name,
                                "align": "center",
                                "size": "xxs",
                                "wrap": true
                            }
                        ]
                    }
                ]
            }
        }
    }
}

const round = async (userId, next, focus) => {
    let battle = await dbBattle.searchByUserId(userId);
    let target;
    let player;
    let btn;
    for (let i = 0; i < battle.length; i++) {
        if (battle[i].identity == 'target') {
            target = battle[i];
        } else {
            player = battle[i];
        }
    }
    let targetSkin = await dbSkin.searchByNameAndRandom(target.skin);
    let playerSkin = await dbSkin.searchByNameAndRandom(player.skin);
    if (focus == 'player') {
        btn = {
            "type": "box",
            "layout": "horizontal",
            "contents": [
                {
                    "type": "button",
                    "action": {
                        "type": "postback",
                        "label": '攻擊',
                        "data": '戰鬥回合:' + next + ':' + 'player' + ':攻擊'
                    }
                },
                {
                    "type": "separator"
                },
                {
                    "type": "button",
                    "action": {
                        "type": "postback",
                        "label": '道具',
                        "data": '戰鬥回合:' + next + ':' + 'player' + ':道具'
                    }
                },
                {
                    "type": "separator"
                },
                {
                    "type": "button",
                    "action": {
                        "type": "postback",
                        "label": '逃跑',
                        "data": '戰鬥回合:' + next + ':' + 'player' + ':逃跑'
                    }
                }
            ]
        }
    } else {
        btn = {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "button",
                    "action": {
                        "type": "postback",
                        "label": "對方攻來",
                        "data": '戰鬥回合:' + next + ':' + 'target' + ':下回合'
                    }
                }
            ]
        }
    }
    return {
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
                        "text": "戰鬥回合:" + next + "  focus:" + focus,
                        "align": "center",
                        "wrap": true
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "margin": "lg",
                        "contents": [
                            {
                                "type": "image",
                                "url": targetSkin.image,
                                "gravity": "center",
                                "size": "xs",
                                "action": {
                                    "type": "postback",
                                    "label": "叫聲",
                                    "data": targetSkin.say
                                }
                            },
                            {
                                "type": "image",
                                "url": playerSkin.image,
                                "size": "xs",
                                "action": {
                                    "type": "postback",
                                    "label": "叫聲",
                                    "data": playerSkin.say
                                }
                            }
                        ]
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "text",
                                "text": "敵方:" + target.name,
                                "align": "center",
                                "size": "xxs",
                                "wrap": true
                            },
                            {
                                "type": "text",
                                "text": "我方:" + player.name,
                                "align": "center",
                                "size": "xxs",
                                "wrap": true
                            }
                        ]
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "text",
                                "text": "HP:" + target.hp,
                                "align": "center",
                                "size": "xxs",
                                "wrap": true
                            },
                            {
                                "type": "text",
                                "text": "HP:" + player.hp,
                                "align": "center",
                                "size": "xxs",
                                "wrap": true
                            }
                        ]
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "text",
                                "text": "agi/vit/str/lucky:\n" + target.agi + '/' + target.vit + '/' + target.str + '/' + target.lucky,
                                "align": "center",
                                "size": "xxs",
                                "wrap": true
                            },
                            {
                                "type": "text",
                                "text": "agi/vit/str/lucky:\n" + player.agi + '/' + player.vit + '/' + player.str + '/' + player.lucky,
                                "align": "center",
                                "size": "xxs",
                                "wrap": true
                            }
                        ]
                    }
                ]
            },
            "footer": btn
        }
    }
}

module.exports = {
    call,
    target,
    firstMove,
    firstMoveJudge,
    round,
    fight
}