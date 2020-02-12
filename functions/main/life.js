const dbUser = require('../dbController/user');
const dbHabit = require('../dbController/habit');
const dbMonster = require('../dbController/monster');
const store = {
    light: { image: 'https://i.postimg.cc/Wb10ZXs2/light.png', msg: '晝行性生物\n\n日出而作，日落而息。' },
    dark: { image: 'https://i.postimg.cc/9XpGzv58/dark.png', msg: '夜行性生物\n\n披星戴月，斗轉星移。' }
}

const skin = [
    { monster: '草莓獸', image: 'https://i.postimg.cc/yxhBp04V/0.png', price: 1, belong: 'light', name: '少女心' },
    { monster: '餅乾獸', image: 'https://i.postimg.cc/bv6Rb5ZP/0.png', price: 1, belong: 'light', name: '呆萌奶糖味' },
    { monster: '蛋蛋獸', image: 'https://i.postimg.cc/gcDXShYS/0.png', price: 1, belong: 'light', name: '一日之計' },
    { monster: '浪濤獸', image: 'https://i.postimg.cc/rF58ZXC8/0.png', price: 1, belong: 'light', name: '擱淺浪花' },
    { monster: '哈味獸', image: 'https://i.postimg.cc/zvtT9H1g/0.png', price: 1, belong: 'light', name: '青之森' },
    { monster: '芒果獸', image: 'https://i.postimg.cc/HxKSfL1j/0.png', price: 1, belong: 'light', name: '初夏滋味' },
    { monster: '太陽獸', image: 'https://i.postimg.cc/Nf1c73RR/0.png', price: 1, belong: 'light', name: '熾熱溫度' },
    { monster: '摩卡獸', image: 'https://i.postimg.cc/52MtfNNY/0.png', price: 1, belong: 'light', name: '黃金比例' },
    { monster: '塔派獸', image: 'https://i.postimg.cc/rwrtJFQQ/0.png', price: 1, belong: 'dark', name: '奶香秋意濃' },
    { monster: '可可獸', image: 'https://i.postimg.cc/htH6kfS6/0.png', price: 1, belong: 'dark', name: '漂浮雲朵' },
    { monster: '炸蝦獸', image: 'https://i.postimg.cc/t4VXNgGB/0.png', price: 1, belong: 'dark', name: '深夜食堂' },
    { monster: '星月獸', image: 'https://i.postimg.cc/rww0Wwxd/0.png', price: 1, belong: 'dark', name: '海中撈月' },
    { monster: '銀河獸', image: 'https://i.postimg.cc/hvGWs6r0/0.png', price: 1, belong: 'dark', name: '城市夜色' },
    { monster: '神秘獸', image: 'https://i.postimg.cc/s20xdk6v/0.png', price: 1, belong: 'dark', name: '仲夏夜之夢' },
    { monster: '喵仔獸', image: 'https://i.postimg.cc/Y9xRRZ59/0.jpg', price: 1, belong: 'dark', name: '渾沌之初' }
]

const food = [
    { name: '補充能量', image: 'https://i.postimg.cc/BvBnLSKX/1.png', price: 5, effect: 24 },
    { name: '休閒娛樂', image: 'https://i.postimg.cc/MTZK1C7t/2.png', price: 10, effect: 48 },
    { name: '社會實踐', image: 'https://i.postimg.cc/SR3SFjwt/5.png', price: 15, effect: 72 },
    { name: '修身養性', image: 'https://i.postimg.cc/3Nd8c2bv/4.png', price: 20, effect: 96 },
    { name: '大吃特吃', image: 'https://i.postimg.cc/JnT7xpK8/3.png', price: 25, effect: 120 },
]

const props = [
    { name: '毒', image: 'https://i.postimg.cc/bYnLN06n/2.png', price: 1 },
    { name: '炸', image: 'https://i.postimg.cc/nct2ss5P/3.png', price: 1 },
    { name: '醫', image: 'https://i.postimg.cc/rs59ncdj/1.png', price: 1 },
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

const propStore = () => {
    let output = genByProps(props);
    return {
        "type": "flex",
        "altText": "Flex Message",
        "contents": {
            "type": "carousel",
            "contents": output
        }
    }
}

function genByProps(props) {
    let output = [];
    output.push({
        "type": "bubble",
        "direction": "ltr",
        "header": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "text",
                    "text": "道具商店",
                    "size": "lg",
                    "align": "center",
                    "weight": "bold"
                },
                {
                    "type": "spacer"
                }
            ]
        },
        "hero": {
            "type": "image",
            "url": 'https://i.postimg.cc/2SgV6W9q/image.png',
            "size": "xxl",
            "aspectRatio": "1.51:1",
            "aspectMode": "fit"
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "text",
                    "text": '\n小小的藥丸，大大的威力。\n(歇業中)',
                    "margin": "lg",
                    "align": "center",
                    "wrap": true
                }
            ]
        }
    })
    for (let i = 0; i < props.length; i++) {
        output.push({
            "type": "bubble",
            "direction": "ltr",
            "header": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": props[i].name,
                        "size": "lg",
                        "align": "center",
                        "weight": "bold"
                    }
                ]
            },
            "hero": {
                "type": "image",
                "url": props[i].image,
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
                        "text": "自律幣 $" + props[i].price,
                        "margin": "lg",
                        "align": "center",
                        "wrap": true
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
                            "data": "購買道具:" + props[i].name
                        }
                    }
                ]
            }
        })
    }
    return output;
}

function genByFood(food) {
    let output = [];
    output.push({
        "type": "bubble",
        "direction": "ltr",
        "header": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "text",
                    "text": "糧食商店",
                    "size": "lg",
                    "align": "center",
                    "weight": "bold"
                },
                {
                    "type": "spacer"
                }
            ]
        },
        "hero": {
            "type": "image",
            "url": 'https://i.postimg.cc/yNrn4Z1H/image.png',
            "size": "xxl",
            "aspectRatio": "1.51:1",
            "aspectMode": "fit"
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "text",
                    "text": '\n物質可以匱乏，思想不能貧瘠。',
                    "margin": "lg",
                    "align": "center",
                    "wrap": true
                }
            ]
        }
    })
    for (let i = 0; i < food.length; i++) {
        output.push({
            "type": "bubble",
            "direction": "ltr",
            "header": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": food[i].name,
                        "size": "lg",
                        "align": "center",
                        "weight": "bold"
                    }
                ]
            },
            "hero": {
                "type": "image",
                "url": food[i].image,
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
                        "text": "自律幣 $" + food[i].price + '\n(精神糧食+' + food[i].effect + ')',
                        "margin": "lg",
                        "align": "center",
                        "wrap": true
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
                            "data": "購買糧食:" + food[i].effect + ':' + food[i].price
                        }
                    }
                ]
            }
        })
    }
    return output;
}

function genBySkin(skin, belong) {
    let output = [];
    output.push({
        "type": "bubble",
        "direction": "ltr",
        "header": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "text",
                    "text": "變種商店",
                    "size": "lg",
                    "align": "center",
                    "weight": "bold"
                }
            ]
        },
        "hero": {
            "type": "image",
            "url": (belong == 'light' ? store.light.image : store.dark.image),
            "size": "xl",
            "aspectRatio": "1.51:1",
            "aspectMode": "fit"
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "text",
                    "text": (belong == 'light' ? store.light.msg : store.dark.msg),
                    "margin": "lg",
                    "align": "center",
                    "wrap": true
                }
            ]
        }
    })
    for (let i = 0; i < skin.length; i++) {
        if (skin[i].belong != belong) {
            continue;
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
                        "text": "戰利幣 $" + skin[i].price,
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
                            "data": "購買外觀:" + skin[i].monster + ':' + skin[i].price
                        }
                    }
                ]
            }
        })
    }
    let r;
    let tmp;
    for (let i = 1; i < output.length; i++) {
        r = Math.round(((Math.random() * ((output.length - 1) - i)) + i));
        tmp = output[i];
        output[i] = output[r];
        output[r] = tmp;
    }
    return output;
}

const lightOrDark = () => {
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
                        "text": "進入變種商店前，請點選",
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
                                "url": store.light.image,
                                "gravity": "center",
                                "size": "xs",
                                "action": {
                                    "type": "postback",
                                    "label": "變種商店",
                                    "data": "變種商店:light"
                                }
                            },
                            {
                                "type": "image",
                                "url": store.dark.image,
                                "size": "xs",
                                "action": {
                                    "type": "postback",
                                    "label": "變種商店",
                                    "data": "變種商店:dark"
                                }
                            }
                        ]
                    }
                ]
            }
        }
    }
}

const skinStore = (belong) => {
    let output = genBySkin(skin, belong);
    return {
        "type": "flex",
        "altText": "Flex Message",
        "contents": {
            "type": "carousel",
            "contents": output
        }
    }
}

const foodStore = () => {
    let output = genByFood(food);
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
                            },
                            {
                                "type": "text",
                                "text": "*" + (user.token !== 'null' ? "已" : "尚未") + "連動 Line Notify",
                                "margin": "xxl",
                                "align": "start",
                                "size": "xs",
                                "gravity": "center",
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
                                "text": "商城",
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
                                "text": "[自律幣] $" + monster.money,
                                "margin": "lg",
                                "align": "center",
                                "wrap": false
                            },
                            {
                                "type": "text",
                                "text": "[戰利幣] $" + monster.battleMoney,
                                "margin": "lg",
                                "align": "center",
                                "wrap": false
                            },
                            {
                                "type": "separator",
                                "margin": "lg"
                            },
                            {
                                "type": "text",
                                "text": "請點選欲前往之商店",
                                "margin": "lg",
                                "align": "center",
                                "wrap": false
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "margin": "xxl",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [
                                            {
                                                "type": "image",
                                                "url": "https://i.postimg.cc/HkCyZGKH/1.png",
                                                "action": {
                                                    "type": "postback",
                                                    "label": "糧食商店",
                                                    "data": "糧食商店"
                                                }
                                            },
                                            {
                                                "type": "text",
                                                "text": "糧食",
                                                "margin": "lg",
                                                "align": "center"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [
                                            {
                                                "type": "image",
                                                "url": "https://i.postimg.cc/Z5FyX7tN/2.png",
                                                "action": {
                                                    "type": "postback",
                                                    "label": "道具商店",
                                                    "data": "道具商店"
                                                }
                                            },
                                            {
                                                "type": "text",
                                                "text": "道具",
                                                "margin": "lg",
                                                "align": "center"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [
                                            {
                                                "type": "image",
                                                "url": "https://i.postimg.cc/MG6jw7qF/3.png",
                                                "action": {
                                                    "type": "postback",
                                                    "label": "變種商店",
                                                    "data": "變種商店"
                                                }
                                            },
                                            {
                                                "type": "text",
                                                "text": "變種",
                                                "margin": "lg",
                                                "align": "center"
                                            }
                                        ]
                                    }
                                ]
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
                                "text": "說明",
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
                                "spacing": "lg",
                                "margin": "lg",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "* 時間到了，line notify會提醒",
                                    },
                                    {
                                        "type": "text",
                                        "text": "* 半小時內輸入[密語]以完成自律"
                                    },
                                    {
                                        "type": "text",
                                        "text": "* 每自律一次，可賺取自律幣 $1"
                                    },
                                    {
                                        "type": "text",
                                        "text": "* 每戰鬥勝利，可賺取戰利幣 $1"
                                    },
                                    {
                                        "type": "text",
                                        "text": "* 在糧食商店內，可購買精神糧食"
                                    },
                                    {
                                        "type": "text",
                                        "text": "* 在能力商店內，可提升戰鬥素質"
                                    },
                                    {
                                        "type": "text",
                                        "text": "* 在變種商店內，可改變怪獸品種"
                                    },
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
    skinStore,
    lightOrDark,
    foodStore,
    propStore
}