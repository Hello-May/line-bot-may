const dbUser = require('../dbController/user');
const dbHabit = require('../dbController/habit');
const dbMonster = require('../dbController/monster');
const reward = ["糧食商店", "外觀商店", "能力商店", "商品4", "商品5", "商品6"];
const price = ['600', '300', '200', '100', '50', '10'];
const skin = [  //賣外觀的商店
    { monster: '炸蝦獸', image: 'https://i.postimg.cc/t4VXNgGB/0.png', price: '1', name: '深夜食堂' },
    { monster: '草莓獸', image: 'https://i.postimg.cc/yxhBp04V/0.png', price: '1', name: '少女心' },
    { monster: '餅乾獸', image: 'https://i.postimg.cc/bv6Rb5ZP/0.png', price: '1', name: '呆萌奶糖味' },
    { monster: '星月獸', image: 'https://i.postimg.cc/rww0Wwxd/0.png', price: '1', name: '海中撈月' },
    { monster: '銀河獸', image: 'https://i.postimg.cc/hvGWs6r0/0.png', price: '1', name: '城市夜色' },
    { monster: '蛋蛋獸', image: 'https://i.postimg.cc/gcDXShYS/0.png', price: '1', name: '一日之計' },
    { monster: '浪濤獸', image: 'https://i.postimg.cc/rF58ZXC8/0.png', price: '1', name: '擱淺浪花' },
    { monster: '哈味獸', image: 'https://i.postimg.cc/zvtT9H1g/0.png', price: '1', name: '青之森' },
    { monster: '摩卡獸', image: 'https://i.postimg.cc/52MtfNNY/0.png', price: '1', name: '黃金比例' },
    { monster: '可可獸', image: 'https://i.postimg.cc/htH6kfS6/0.png', price: '1', name: '漂浮棉花糖' },
    { monster: '芒果獸', image: 'https://i.postimg.cc/HxKSfL1j/0.png', price: '1', name: '初夏滋味' },
    { monster: '太陽獸', image: 'https://i.postimg.cc/Nf1c73RR/0.png', price: '1', name: '熾熱溫度' },
    { monster: '塔派獸', image: 'https://i.postimg.cc/rwrtJFQQ/0.png', price: '1', name: '奶香秋意濃' },
    { monster: '神秘獸', image: 'https://i.postimg.cc/s20xdk6v/0.png', price: '1', name: '仲夏夜之夢' }
]

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
    let output = [];
    for (let i = 0; i < reward.length; i++) {
        output.push({
            "type": "box",
            "layout": "horizontal",
            "contents": [
                {
                    "type": "text",
                    "text": (i + 1) + '',
                    "align": "center"
                },
                {
                    "type": "text",
                    "text": reward[i]
                },
                {
                    "type": "text",
                    "text": '$' + price[i]
                }
            ]
        })
    }
    return output;
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

function genBySkin(skin) {
    let output = [];
    for (let i = 0; i < skin.length; i++) {
        output.push(
            {
                "type": "bubble",
                "direction": "ltr",
                "header": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": skin[i].name,
                            "size": "lg",
                            "align": "center",
                            "weight": "bold"
                        }
                    ]
                },
                "hero": {
                    "type": "image",
                    "url": skin[i].image,
                    "size": "lg",
                    "aspectRatio": "1.51:1",
                    "aspectMode": "fit"
                },
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": "自律幣 $" + skin[i].price,
                            "margin": "lg",
                            "align": "center",
                            "wrap": false
                        }
                    ]
                },
                "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "button",
                            "action": {
                                "type": "postback",
                                "label": "購買",
                                "data": "購買外觀:" + skin[i].monster
                            }
                        }
                    ]
                }
            }
        )
    }
    return output;
}

const skinStore = () => {
    let output = genBySkin(skin);
    return {
        "type": "flex",
        "altText": "Flex Message",
        "contents": {
            "type": "carousel",
            "contents": output
        }
    }
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
    let output2 = genByReward(reward, price);

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
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "糧食商店",
                                    "data": "糧食商店"
                                }
                            },
                            {
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "變身商店",
                                    "data": "變身商店"
                                }
                            },
                            {
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "能力商店",
                                    "data": "能力商店"
                                }
                            }
                        ]
                    }
                },
                // {
                //     "type": "bubble",
                //     "direction": "ltr",
                //     "header": {
                //         "type": "box",
                //         "layout": "vertical",
                //         "contents": [
                //             {
                //                 "type": "text",
                //                 "text": "自律商城",
                //                 "size": "lg",
                //                 "align": "center",
                //                 "weight": "bold"
                //             }
                //         ]
                //     },
                //     "body": {
                //         "type": "box",
                //         "layout": "vertical",
                //         "contents": [
                //             {
                //                 "type": "separator"
                //             },
                //             {
                //                 "type": "box",
                //                 "layout": "horizontal",
                //                 "margin": "xs",
                //                 "contents": [
                //                     {
                //                         "type": "text",
                //                         "text": "商品",
                //                         "align": "start"
                //                     },
                //                     {
                //                         "type": "text",
                //                         "text": "獎勵",
                //                         "align": "start"
                //                     },
                //                     {
                //                         "type": "text",
                //                         "text": "自律幣"
                //                     }
                //                 ]
                //             },
                //             {
                //                 "type": "separator",
                //                 "margin": "xs"
                //             },
                //             {
                //                 "type": "box",
                //                 "layout": "vertical",
                //                 "margin": "lg",
                //                 "contents": output2
                //             },
                //             {
                //                 "type": "separator",
                //                 "margin": "lg"
                //             },
                //             {
                //                 "type": "text",
                //                 "text": "目前小怪獸擁有自律幣 $" + monster.money,
                //                 "margin": "lg",
                //                 "align": "center",
                //                 "wrap": false
                //             }
                //         ]
                //     },
                //     "footer": {
                //         "type": "box",
                //         "layout": "horizontal",
                //         "contents": [
                //             {
                //                 "type": "button",
                //                 "action": {
                //                     "type": "postback",
                //                     "label": "購買",
                //                     "data": "購買自律商品"
                //                 }
                //             }
                //         ]
                //     }
                // },
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
    update,
    skinStore
}