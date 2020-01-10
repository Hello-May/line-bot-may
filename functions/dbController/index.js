const lineBot = require('@line/bot-sdk');
const configBot = require('../../config');
const clientBot = new lineBot.Client(configBot);
const db = require('../../models');
const { users } = require("../../models");
const User = db.users;
const { groups } = require("../../models");
const Group = db.groups;
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
    console.log('save type: '+type)
    console.log('save tmpId: '+tmpId)
}

const saveId = async (event) => {
    let id;
    let tmpId;
    switch (event.source.type) {
        case 'user':
            id = event.source.userId;
            tmpId = await users.findAll({ where: { userId: id } });
            if (tmpId == '') {
                createOwnerModel(User, id);
                User.create({
                    force: true,
                    userId: id,
                    token: 'null',
                    mosterId: 'null',
                    status: false,
                    createdAt: new Date(),
                    updatedAt: new Date()
                });
            }
            break;
        case 'group':
            id = event.source.groupId;
            tmpId = await groups.findAll({ where: { groupId: id } });
            if (tmpId == '') {
                createOwnerModel(Group, id);
                Group.create({
                    force: true,
                    groupId: id,
                    token: 'null',
                    mosterId: 'null',
                    status: false,
                    createdAt: new Date(),
                    updatedAt: new Date()
                });
            }
            break;
    }

    return clientBot.replyMessage(event.replyToken, {
        type: 'text',
        text: (tmpId == '' ? '我存進db=>' : '不用存進db=>') + (event.source.type == 'user' ? 'userId:' + id : 'groupId:' + id)
    });
}

const checkId = (event) => {
    //回傳model跟id是啥，之後再寫
}

const saveToken = async (token) => {
    // let id;
    console.log('use type: '+type)
    console.log('use tmpId: '+tmpId)
    let judge;
    switch (type) {
        case 'user':
            // id = event.source.userId;
            judge = await users.update({ token: token }, { where: { userId: tmpId } });
            break;
        case 'group':
            // id = event.source.groupId;
            judge = await groups.findAll({ token: token }, { where: { groupId: tmpId } });
            break;
    }
    console.log((judge == '1' ? '我存進db=>' : '沒存進db=>') + token);
    // return clientBot.replyMessage(event.replyToken, {
    //     type: 'text',
    //     text: (judge == '1' ? '我存進db=>' : '沒存進db=>') + token
    // });
}

module.exports = {
    saveId,
    saveToken,
    saveTmpId
}