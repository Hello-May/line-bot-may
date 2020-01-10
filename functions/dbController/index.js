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
    //存id，如果資料庫已經有id的話，不重複新增
    return clientBot.replyMessage(event.replyToken, {
        type: 'text',
        text: (tmpId == '' ? '我存進db=>' : '不用存進db=>') + (event.source.type == 'user' ? 'userId:' + id : 'groupId:' + id)
    });
}

module.exports = {
    saveId
}