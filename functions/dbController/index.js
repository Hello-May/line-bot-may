const lineBot = require('@line/bot-sdk');
const configBot = require('../../config');
const clientBot = new lineBot.Client(configBot);
const db = require('../../models');
const dbMonster = require('./monster');
const dbTask = require('./task');
const dbHabit = require('./habit');
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
        "type": "text",
        "text": "您好～☺☺☺\n歡迎來到小怪獸的世界，這裡可以協助［養成習慣］及［記錄備忘］的地方，同時還能［養成小怪獸］！\n在開始之前請先加入line notify好友，並在下方按鈕連動line notify，它會在未來幫助提醒你。\n連動後，就可使用下方的圖文選單進行使用，若是在群組中，可輸入\"#\"呼叫圖文選單喔！"
    }, {
        "type": "image",
        "originalContentUrl": "https://i.postimg.cc/MKwj8XRN/linenotify.png",
        "previewImageUrl": "https://i.postimg.cc/MKwj8XRN/linenotify.png",
        "animated": false
    }, {
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
                            "type": "uri",
                            "label": "按此連動 Line Notify",
                            "uri": "line://app/1653656986-Jq9lxgNw"
                        }
                    }
                ]
            }
        }
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

module.exports = {
    saveId,
    saveToken,
    saveTmpId,
    getToken,
}