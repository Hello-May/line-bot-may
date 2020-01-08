const Schema = {
    users: {
        userId: { type: 'increments', nullable: false, primary: true }
    },
    userGroups: {
        groupId: { type: 'increments', nullable: false, primary: true }
    }
}

module.exports = Schema;