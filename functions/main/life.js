const dbUser = require('../dbController/user');
const dbHabit = require('../dbController/habit');

function genByHabit(habit) {
    let output = [];
    for (let i = 0; i < habit.length; i++) {
        output.push({
            "type": "box",
            "layout": "horizontal",
            "contents": [
                {
                    "type": "text",
                    "text": habit[i].time
                },
                {
                    "type": "text",
                    "text": habit[i].habit
                },
                {
                    "type": "text",
                    "text": habit[i].secret
                }
            ]
        })
    }
    return output;
}


const call = async (event) => {
    let habit;
    let userId = (event.source.type == 'user' ? event.source.userId : event.source.groupId);
    try {
        habit = await dbHabit.searchById(userId);
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
                                    "type": "message",
                                    "label": "新增",
                                    "text": "請輸入時間/習慣/密語"
                                }
                            },
                            {
                                "type": "separator"
                            },
                            {
                                "type": "button",
                                "action": {
                                    "type": "message",
                                    "label": "修改",
                                    "text": "改名/初始化"
                                }
                            },
                            {
                                "type": "separator"
                            },
                            {
                                "type": "button",
                                "action": {
                                    "type": "message",
                                    "label": "刪除",
                                    "text": "請輸入刪除之習慣"
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
                                "text": "目前小怪獸擁有自律幣 $64",
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

module.exports = {
    call
}