const dbUser = require('../dbController/user');
const lineNotify = require('./index');
const sticker = [[1, 2], [1, 4], [1, 5], [1, 13], [1, 14], [1, 114], [1, 119], [1, 125], [1, 132], [1, 134], [1, 137], [1, 138], [1, 139], [1, 407], [2, 34], [2, 45], [2, 144], [2, 164], [2, 166], [2, 171], [2, 172], [2, 516], [3, 180], [3, 184], [3, 186], [3, 195], [3, 200]];

async function back() {
  let user = await dbUser.getAll();
  let stickno = Math.floor(Math.random() * sticker.length)
  for (let i = 0; i < user.length; i++) {
    lineNotify.notify(user[i].token, {
      'message': '\n記得回來看看小怪獸～',
      'stickerPackageId': sticker[stickno][0].toString(),
      'stickerId': sticker[stickno][1].toString(),
    });
  }
}

back();