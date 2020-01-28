const dbUser = require('../dbController/user');
const dbMonster = require('../dbController/monster');
const dbSaying = require('../dbController/saying');
const dbSkin = require('../dbController/skin');

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

const call = async (userId) => {
    let user;
    let monster;
    let saying;
    let skin;
    // let userId = (event.source.type == 'user' ? event.source.userId : event.source.groupId);
    try {
        user = await dbUser.searchById(userId);
        monster = await dbMonster.searchById(user.monsterId);
        // console.log("monster:" + JSON.stringify(monster));
        saying = await dbSaying.searchByRandom();
        skin = await dbSkin.searchByNameAndRandom(monster.skin);
    } catch (err) {
        console.log(err);
    }

    let character;
    switch (monster.character) {    //應該要算累積完成任務多寡，之後再改，要存在user表內
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
                        "text": monster.name,
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
                                "text": "誕辰：" + monster.born.Format("yyyy/MM/dd hh:mm:ss")
                            },
                            {
                                "type": "text",
                                "text": "品種：" + monster.skin
                            },
                            {
                                "type": "text",
                                "text": "等級：" + monster.level
                            },
                            {
                                "type": "text",
                                "text": "經驗值：" + monster.exp
                            },
                            {
                                "type": "text",
                                "text": "性格：" + character
                            },
                            {
                                "type": "text",
                                "text": "自律幣：$" + monster.money
                            },
                            {
                                "type": "text",
                                "text": "精神糧食：" + monster.food + " (-1/hr)"
                            },
                            {
                                "type": "text",
                                "text": "agi/vit/str/lucky：" + monster.agi + '/' + monster.vit + '/' + monster.str + '/' + monster.lucky
                            }
                        ]
                    },
                    {
                        "type": "separator",
                        "margin": "lg"
                    },
                    {
                        "type": "text",
                        "text": saying.sentence,
                        "margin": "lg",
                        "action": {
                            "type": "postback",
                            "label": "小語",
                            "text": saying.sentence,
                            "data": "#whisper"
                        },
                        "wrap": true
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
                            "label": "修改",
                            "data": "小怪獸修改",
                        }
                    }
                ]
            }
        }
    }
}

const initialization = (event) => {
    return {
        "type": "template",
        "altText": "this is a confirm template",
        "template": {
            "type": "confirm",
            "actions": [
                {
                    "type": "postback",
                    "label": "是",
                    "data": "小怪獸初始化確定"
                },
                {
                    "type": "message",
                    "label": "否",
                    "text": "不要亂來齁~"
                },
            ],
            "text": "確定要初始化？"
        }
    }
}

const update = (event) => {
    return {
        "type": "template",
        "altText": "this is a confirm template",
        "template": {
            "type": "confirm",
            "actions": [
                {
                    "type": "postback",
                    "label": "改名",
                    "data": "小怪獸改名"
                },
                {
                    "type": "postback",
                    "label": "初始化",
                    "data": "小怪獸初始化"
                }
            ],
            "text": "要做什麼修改？"
        }
    }
}

module.exports = {
    call,
    update,
    initialization
}



