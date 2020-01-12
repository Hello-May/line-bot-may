const lineBot = require('@line/bot-sdk');
const configBot = require('../../config');
const clientBot = new lineBot.Client(configBot);
const db = require('../../models');
const dbMonster = require('./monster');
const { users } = require("../../models");
const { monsters } = require("../../models");
const User = db.users;
var type;
var tmpId;

//這樣會有bug是當很多人傳訊息就被替換
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
    console.log(tmpUser)
    console.log(tmpUser.length)
    if (tmpUser.length == 0) {
        await dbMonster.create();
        let monster = await monsters.findAll();
        await User.create({
            force: true,
            userId: id,
            token: 'null',
            monsterId: monster[monster.length-1].monsterId,
            status: 'null',
            createdAt: new Date(event.timestamp).toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
            updatedAt: new Date(event.timestamp).toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
        });
    }
    return clientBot.replyMessage(event.replyToken, {
        type: 'text',
        text: (tmpUser.length == 0 ? '我存進db=>' : '不用存進db=>') + (event.source.type == 'user' ? 'userId:' + id : 'groupId:' + id)
    });
}

const checkId = (event) => {
    //回傳model跟id是啥，之後再寫
}

const saveToken = async (token) => {
    let judge;
    // switch (type) {
    //     case 'user':
    //         // id = event.source.userId;
    //         judge = await users.update({ token: token }, { where: { userId: tmpId } });
    //         break;
    //     case 'group':
    //         // id = event.source.groupId;
    //         judge = await groups.update({ token: token }, { where: { groupId: tmpId } });
    //         break;
    // }
    judge = await users.update({ token: token }, { where: { userId: tmpId } });
    console.log((judge == '1' ? '我存進db=>' : '沒存進db=>') + token);
    // return clientBot.replyMessage(event.replyToken, {
    //     type: 'text',
    //     text: (judge == '1' ? '我存進db=>' : '沒存進db=>') + token
    // });
}

const getToken = (event) => {
    return new Promise( async (resolve, reject) => {
        let id;
        switch (event.source.type) {
            case 'user':
                id = event.source.userId;
                // let user = await users.findAll({ where: { userId: event.source.userId } });
                // console.log('我都抓到了!!'+user[0].token)
                // token =user[0].token;
                // return resolve(user[0].token);
                break;
            case 'group':
                id = event.source.groupId;
                // let group = await groups.findAll({ where: { groupId: event.source.groupId } });
                // console.log('我都抓到了!!'+group[0].token)
                // token =group[0].token;
                // return resolve(group[0].token);
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
    getToken
}