const dbUser = require('../dbController/user');
const lineNotify = require('./index');

async function back() {
    let user = await dbUser.getAll();
    for(let i=0;i<user.length;i++){
    lineNotify.notify(user[i].token, {
        type: 'message',
        text: '記得回來看看小怪獸～'
    });
  }
}

back();