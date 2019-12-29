const pause = (event) => {
    switch (event.message.text) {
        case '呼叫':
            return "我在這~"
        case '閉嘴':
            return "哼~不理你了~"   
    }    
}

module.exports = {
    pause
}