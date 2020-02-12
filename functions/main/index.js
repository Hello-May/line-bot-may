const test = () => {
    return {
        type: 'text',
        text: 'test'
    };
}

const stranger = () => {
    return {
        type: 'text',
        text: '開發者手抖把資料庫清空，請把機器人封鎖或退群，再重新加入「養怪」吧！'
    };
}

const memberJoined = () => {
    return {
        type: 'text',
        text: '歡迎阿~~'
    };
}

module.exports = {
    test,
    stranger,
    memberJoined
}