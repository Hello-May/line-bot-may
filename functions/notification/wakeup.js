const dbUser = require('../dbController/user');


const s = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });
const lineNotify = require('./index');

async function wake() {
    let token = await dbUser.getToken('Ue27cb7389b27243fb30e2c61c47539c4');
    console.log(token);
    lineNotify.notify(token, {
        type: 'message',
        text: '保持清醒\n' + s
    });
}

wake();