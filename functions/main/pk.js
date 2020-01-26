const dbUser = require('../dbController/user');
const dbMonster = require('../dbController/monster');
// const name = ['AAA', 'BBB', 'CCC'];
// const character = ['行動派', '嚴謹派', '領導派', '樂天派', '懵懂無知'];
// const date = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });
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
                            "data": "戰鬥:" + target[i].monsterId,
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
        target = await dbMonster.searchByRandomAndLevel(monster.level,3);
        output = await genByTarget(target);
        // console.log("monster:" + JSON.stringify(monster));
    } catch (err) {
        console.log(err);
    }

    console.log('-----------------')
    console.log(output)
    console.log('-----------------')

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
                        "text": "range:3等內",
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

module.exports = {
    call,
    target
}