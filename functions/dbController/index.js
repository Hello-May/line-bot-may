const lineBot = require('@line/bot-sdk');
const configBot = require('../../config');
const clientBot = new lineBot.Client(configBot);
const db = require('../../models');
const dbMonster = require('./monster');
const dbTask = require('./task');
const dbHabit = require('./habit');
const dbUser = require('./user');
const dbBattle = require('./battle');
const { users } = require("../../models");
const { monsters } = require("../../models");
const User = db.users;
var type;
var tmpId;
const sticker = [[1, 2], [1, 4], [1, 5], [1, 13], [1, 14], [1, 114], [1, 119], [1, 125], [1, 132], [1, 134], [1, 137], [1, 138], [1, 139], [1, 407], [2, 34], [2, 45], [2, 144], [2, 164], [2, 166], [2, 171], [2, 172], [2, 516], [3, 180], [3, 184], [3, 186], [3, 195], [3, 200]];

//這樣會有bug是當很多人傳訊息就被替換#連動
const saveTmpId = (event) => {
    type = event.source.type;
    switch (type) {
        case 'user':
            tmpId = event.source.userId;
            break;
        case 'group':
            tmpId = event.source.groupId;
            break;
    }
}

const saveId = async (event) => {
    let id;
    saveTmpId(event);
    switch (event.source.type) {
        case 'user':
            id = event.source.userId;
            break;
        case 'group':
            id = event.source.groupId;
            break;
    }
    let tmpUser = await users.findAll({ where: { userId: id } });
    if (tmpUser.length == 0) {
        await dbMonster.create();
        await dbTask.initialization(id);
        await dbHabit.initialization(id);
        let monster = await monsters.findAll();
        await User.create({
            force: true,
            userId: id,
            token: 'null',
            monsterId: monster[monster.length - 1].monsterId,
            status: '正常',
            createdAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
            updatedAt: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
        });
    }
    let output = [{
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
                        "text": "歡迎來到小怪獸的世界",
                        "size": "lg",
                        "align": "center",
                        "weight": "bold"
                    }
                ]
            },
            "hero": {
                "type": "image",
                "url": "https://i.postimg.cc/bvvLBTjg/image.jpg",
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
                        "text": "☺這裡有五大功能☺",
                        "margin": "lg",
                        "align": "center",
                        "wrap": true
                    },
                    {
                        "type": "text",
                        "text": "［修練］養成自律習慣",
                        "align": "center"
                    },
                    {
                        "type": "text",
                        "text": "［任務］記錄備忘事項",
                        "align": "center"
                    },
                    {
                        "type": "text",
                        "text": "［小怪獸］成長型怪獸",
                        "align": "center"
                    },
                    {
                        "type": "text",
                        "text": "［戰鬥］朋友社交娛樂",
                        "align": "center"
                    },
                    {
                        "type": "text",
                        "text": "［酒館］其他查詢資訊",
                        "align": "center"
                    },
                    {
                        "type": "separator",
                        "margin": "lg"
                    },
                    {
                        "type": "text",
                        "text": "在下方圖文選單或輸入「#」",
                        "margin": "lg",
                        "align": "center"
                    },
                    {
                        "type": "text",
                        "text": "即可點選以上五大功能喔！",
                        "align": "center"
                    },
                    {
                        "type": "separator",
                        "margin": "lg"
                    },
                    {
                        "type": "text",
                        "text": "在開始之前，",
                        "margin": "lg",
                        "align": "center"
                    },
                    {
                        "type": "text",
                        "text": "請先加入［Line Notify］",
                        "align": "center"
                    },
                    {
                        "type": "text",
                        "text": "加入好友後，開啟連動！",
                        "align": "center"
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
                            "type": "uri",
                            "label": "按此連動 Line Notify",
                            "uri": "line://app/1653656986-Jq9lxgNw"
                        }
                    }
                ]
            }
        }
    }, {
        "type": "image",
        "originalContentUrl": "https://i.postimg.cc/MKwj8XRN/linenotify.png",
        "previewImageUrl": "https://i.postimg.cc/MKwj8XRN/linenotify.png",
        "animated": false
    }]
    if (tmpUser.length == 0) {
        let stickno = Math.floor(Math.random() * sticker.length);
        output.push({
            type: 'sticker',
            packageId: sticker[stickno][0].toString(),
            stickerId: sticker[stickno][1].toString(),
            stickerResourceType: 'STATIC'
        });
    }
    return clientBot.replyMessage(event.replyToken, output);
}

const saveToken = async (token) => {
    let judge;
    judge = await users.update({ token: token }, { where: { userId: tmpId } });
    console.log((judge == '1' ? '我存進db=>' : '沒存進db=>') + token);
}

const getToken = (event) => {
    return new Promise(async (resolve, reject) => {
        let id;
        switch (event.source.type) {
            case 'user':
                id = event.source.userId;
                break;
            case 'group':
                id = event.source.groupId;
                break;
        }
        let user = await users.findAll({ where: { userId: id } });
        console.log(user[0].token)
        resolve(user[0].token);
    });

}

const deleteAll = async (userId) => {
    await dbBattle.destroy(userId);
    await dbHabit.destroyAll(userId);
    await dbUser.destroy(userId);
    await dbMonster.destroy(userId);
    await dbTask.destroy(userId);
    // let task = await dbTask.searchById(user.userId);
    // for (let i = 0; i < task.length; i++) {
    //     await dbTask.destroy(user.userId, task[i].desc);
    // }
}

module.exports = {
    saveId,
    saveToken,
    saveTmpId,
    getToken,
    deleteAll
}