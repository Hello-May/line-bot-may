const pause = (event) => {
    let msg = '無此功能';
    switch (event.message.text) {
        case '呼叫':
            msg = "我在這~"
        case '閉嘴':
            msg = "哼~不理你了~"
    }

    return {
        type: 'text',
        text: msg
    };
}

module.exports = {
    pause
}