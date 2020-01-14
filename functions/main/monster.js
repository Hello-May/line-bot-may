const dbUser = require('../dbController/user');
const dbMonster = require('../dbController/monster');

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

const call = async (event) => {
    // var monster;
    // let userId = (event.source.type == 'user' ? event.source.userId : event.source.groupId);
    // console.log(userId + "<---------------------------userId")
    // var user = await dbUser.searchById(userId)
    //     .then(async (user) => {
    //         console.log(user.monsterId + "<-----------------------------monsterId");
    //         monster = await dbMonster.searchById(user.monsterId);
    //         console.log(monster.name + "<-------------------------monster.name")
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })

    // var tmp;
    // try {
    //     let userId = (event.source.type == 'user' ? event.source.userId : event.source.groupId);
    //     console.log(userId + "<---------------------------userId")
    //     let user = await dbUser.searchById(userId);
    //     console.log(user.monsterId + "<-----------------------------monsterId");
    //     tmp = await dbMonster.searchById(user.monsterId);
    //     console.log(tmp.name + "<-------------------------monster.name")
    // } catch (err) {
    //     console.log(err);
    // }

    let user;
    let monster;
    let userId = (event.source.type == 'user' ? event.source.userId : event.source.groupId);
    try {
        user = await dbUser.searchById(userId);
        // console.log("user:" + JSON.stringify(user));
        monster = await dbMonster.searchById(user.monsterId);
        // console.log("monster:" + JSON.stringify(monster));
    } catch (err) {
        console.log(err);
    }

    let character;
    switch (monster.character) {
        case 1:
            character ='行動派';
            break;
        case 2:
            character ='嚴謹派';
            break;
        case 3:
            character ='領導派';
            break;
        case 4:
            character ='樂天派';
            break;
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
                        "text": "小怪獸",
                        "size": "lg",
                        "align": "center",
                        "weight": "bold"
                    }
                ]
            },
            "hero": {
                "type": "image",
                "url": "https://images2.gamme.com.tw/news2/2018/86/51/qZqVnqaYl6aWp6Q.gif",
                "size": "lg",
                "aspectRatio": "1.51:1",
                "aspectMode": "fit",
                "action": {
                    "type": "message",
                    "label": "叫聲",
                    "text": "yeeeee~"
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
                                "text": "名字：" + monster.name
                            },
                            {
                                "type": "text",
                                "text": "誕辰：" + monster.born.Format("yyyy/MM/dd hh:mm:ss")
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
                                "text": "精神糧食：" + monster.food +" (每日-1)"
                            }
                        ]
                    },
                    {
                        "type": "separator",
                        "margin": "lg"
                    },
                    {
                        "type": "text",
                        "text": "覺得為時已晚的時候，恰恰是最早的時候。Thought is already is late, exactly is the earliest time.",
                        "margin": "lg",
                        "action": {
                            "type": "postback",
                            "label": "小語",
                            "text": "覺得為時已晚的時候，恰恰是最早的時候。Thought is already is late, exactly is the earliest time.",
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



