//當創建user或groud的id時=>初始化小怪獸(創建資料庫的怪獸)
//我的這些資料是從資料庫去拿
//使用者可以根據按鍵去修改資料庫的資料
//先查event id是誰 查user表中的monsterID
//再去monster表中找
const dbUser = require('../dbController/user');
const dbMonster = require('../dbController/monster');

const monster = async (event) => {
    try {
        let userId = (event.source.type == 'user' ? event.source.userId : event.source.groupId);
        console.log(userId + "<---------------------------userId")
        let user = await dbUser.searchById(userId);
        console.log(user.monsterId + "<-----------------------------monsterId");
        let monster = await dbMonster.searchById(user.monsterId);
        console.log(monster);
        console.log(monster.name + "<-------------------------monster.name")
    } catch (err) {
        console.log(err);
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
                    "text": "皮卡皮卡~"
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
                                "text": "誕辰：" + monster.born
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
                                "text": "性格:" + monster.character
                            },
                            {
                                "type": "text",
                                "text": "自律幣:" + monster.money
                            },
                            {
                                "type": "text",
                                "text": "精神糧食：" + monster.food
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
                            "type": "message",
                            "label": "修改",
                            "text": "改名/初始化"
                        }
                    }
                ]
            }
        }
    }
}

module.exports = {
    monster
}



