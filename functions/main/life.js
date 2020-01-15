const dbUser = require('../dbController/user');
const dbHabit = require('../dbController/habit');
const dbMonster = require('../dbController/monster');
const reward = [""];
const price = [];

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

function genByReward(reward, price) {

}

function genByHabit(habit) {
    let output = [];
    let tmpTime;
    for (let i = 0; i < habit.length; i++) {
        tmpTime = habit[i].time.split(':');
        output.push({
            "type": "box",
            "layout": "horizontal",
            "contents": [
                {
                    "type": "text",
                    "text": tmpTime[0] + ":" + tmpTime[1]
                },
                {
                    "type": "text",
                    "text": habit[i].habit,
                    "wrap": true
                },
                {
                    "type": "text",
                    "text": habit[i].secret,
                    "wrap": true
                }
            ]
        })
    }
    return output;
}

const selectTime = (postback) => {
    return {
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
                            "type": "datetimepicker",
                            "label": "按此選擇時間",
                            "data": postback,
                            "mode": "time"
                        }
                    }
                ]
            }
        }
    };
}

const call = async (event) => {
    let habit;
    let user;
    let monster;
    let userId = (event.source.type == 'user' ? event.source.userId : event.source.groupId);
    try {
        habit = await dbHabit.searchById(userId);
        user = await dbUser.searchById(userId);
        monster = await dbMonster.searchById(user.monsterId);
    } catch (err) {
        console.log(err);
    }

    let output = genByHabit(habit);

    return {
        "type": "flex",
        "altText": "Flex Message",
        "contents": {
            "type": "carousel",
            "contents": [
                {
                    "type": "bubble",
                    "direction": "ltr",
                    "header": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "修煉",
                                "size": "lg",
                                "align": "center",
                                "gravity": "center",
                                "weight": "bold",
                                "color": "#000000"
                            }
                        ]
                    },
                    "hero": {
                        "type": "image",
                        "url": "https://www.myguitarfriend.com/wp-content/uploads/2012/09/icon-form-fill.jpg",
                        "size": "xl",
                        "aspectRatio": "1.51:1",
                        "aspectMode": "fit",
                        "backgroundColor": "#FFFFFF"
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
                                "text": "小怪獸生活在自律至高的世界裡，這個世界是以自律幣為流通貨幣，唯有透過說出密語，完成自律指令，才能賺取自律幣，請幫助小怪獸賺取自律幣以維持日常生活吧！",
                                "margin": "xxl",
                                "align": "start",
                                "gravity": "center",
                                "weight": "bold",
                                "wrap": true
                            }
                        ]
                    }
                },
                {
                    "type": "bubble",
                    "direction": "ltr",
                    "header": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "自律指令",
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
                                "type": "separator"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "margin": "xs",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "時間",
                                        "align": "start"
                                    },
                                    {
                                        "type": "text",
                                        "text": "習慣",
                                        "align": "start"
                                    },
                                    {
                                        "type": "text",
                                        "text": "密語"
                                    }
                                ]
                            },
                            {
                                "type": "separator",
                                "margin": "xs"
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "margin": "lg",
                                "contents": output
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
                                    "label": "新增",
                                    "data": "新增自律指令"
                                }
                            },
                            {
                                "type": "separator"
                            },
                            {
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "修改",
                                    "data": "修改自律指令"
                                }
                            },
                            {
                                "type": "separator"
                            },
                            {
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "刪除",
                                    "data": "刪除自律指令"
                                }
                            }
                        ]
                    }
                },
                {
                    "type": "bubble",
                    "direction": "ltr",
                    "header": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "自律商城",
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
                                "type": "separator"
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "margin": "xs",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "商品",
                                        "align": "start"
                                    },
                                    {
                                        "type": "text",
                                        "text": "獎勵",
                                        "align": "start"
                                    },
                                    {
                                        "type": "text",
                                        "text": "自律幣"
                                    }
                                ]
                            },
                            {
                                "type": "separator",
                                "margin": "xs"
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "margin": "lg",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "1",
                                                "align": "center"
                                            },
                                            {
                                                "type": "text",
                                                "text": "小旅行"
                                            },
                                            {
                                                "type": "text",
                                                "text": "$600"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "2",
                                                "align": "center"
                                            },
                                            {
                                                "type": "text",
                                                "text": "看電影"
                                            },
                                            {
                                                "type": "text",
                                                "text": "$300"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "3",
                                                "align": "center"
                                            },
                                            {
                                                "type": "text",
                                                "text": "玩桌遊"
                                            },
                                            {
                                                "type": "text",
                                                "text": "$200"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "4",
                                                "align": "center"
                                            },
                                            {
                                                "type": "text",
                                                "text": "吃好料"
                                            },
                                            {
                                                "type": "text",
                                                "text": "$100"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "5",
                                                "align": "center"
                                            },
                                            {
                                                "type": "text",
                                                "text": "逛街"
                                            },
                                            {
                                                "type": "text",
                                                "text": "$50"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "6",
                                                "align": "center"
                                            },
                                            {
                                                "type": "text",
                                                "text": "一場lol"
                                            },
                                            {
                                                "type": "text",
                                                "text": "$10"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "separator",
                                "margin": "lg"
                            },
                            {
                                "type": "text",
                                "text": "目前小怪獸擁有自律幣 $" + monster.money,
                                "margin": "lg",
                                "align": "center",
                                "wrap": false
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
                                    "type": "message",
                                    "label": "購買",
                                    "text": "請輸入欲購買之商品編號"
                                }
                            }
                        ]
                    }
                },
                {
                    "type": "bubble",
                    "direction": "ltr",
                    "header": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "自律說明",
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
                                "type": "separator"
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "spacing": "xxl",
                                "margin": "lg",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "* 時間到了，會跳出提醒通知",
                                        "wrap": false
                                    },
                                    {
                                        "type": "text",
                                        "text": "* 請回答 [密語] 幫助小怪獸自律"
                                    },
                                    {
                                        "type": "text",
                                        "text": "* 密語可多種組合，以；做分隔"
                                    },
                                    {
                                        "type": "text",
                                        "text": "* 每自律一次，可賺取自律幣 $1"
                                    },
                                    {
                                        "type": "text",
                                        "text": "* 連續達成21天，獎勵雙倍自律幣"
                                    },
                                    {
                                        "type": "text",
                                        "text": "* 獎勵可+小怪獸精神糧食 (20%)"
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    }
}

const update = (habit) => {
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
                        "text": "要修改 " + habit + " 的什麼呢？",
                        "align": "center",
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
                            "label": "時間",
                            "data": "修改自律監聽:時間視窗:" + habit
                        }
                    },
                    {
                        "type": "separator"
                    },
                    {
                        "type": "button",
                        "action": {
                            "type": "postback",
                            "label": "習慣",
                            "data": "修改自律監聽:習慣監聽:" + habit
                        }
                    },
                    {
                        "type": "separator"
                    },
                    {
                        "type": "button",
                        "action": {
                            "type": "postback",
                            "label": "密語",
                            "data": "修改自律監聽:密語監聽:" + habit
                        }
                    }
                ]
            }
        }
    }
}

module.exports = {
    call,
    selectTime,
    update
}