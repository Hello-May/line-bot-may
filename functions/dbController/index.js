const lineBot = require('@line/bot-sdk');
const configBot = require('../../config');
const clientBot = new lineBot.Client(configBot);
const db = require('../../models');
const { users } = require("../../models");
const User = db.users;
const { groups } = require("../../models");
const Group = db.groups;

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
    let id;
    let judge;
    switch (event.source.type) {
        case 'user':
            id = event.source.userId;
            judge = await users.update({ token: token }, { where: { userId: id } });
            break;
        case 'group':
            id = event.source.groupId;
            judge = await groups.findAll({ token: token }, { where: { groupId: id } });
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
    saveToken
}