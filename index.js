const lineBot = require('@line/bot-sdk');
const lineNotify = require('./functions/notify');
const configBot = require('./config');
const functions = require('./functions');
const postback = require('./functions/postback');
const express = require('express');
const bodyParser = require('body-parser');
const clientBot = new lineBot.Client(configBot);
const dbController = require('./functions/dbController');
const dbMonster = require('./functions/dbController/monster');
const path = require('path');
const app = express();
const dbUser = require('./functions/dbController/user');

async function handleEvent(event) {
  console.log(event);
  let userId = (event.source.type == 'user' ? event.source.userId : event.source.groupId);
  let user = await dbUser.searchById(userId);
  // console.log("user:" + JSON.stringify(user));
  if (user !== undefined) {
    let status = user.status;
  }
  if (event.type === 'message' && event.message.text !== '呼叫' && status === '睡眠') {
    return;
  }
  switch (event.type) {
    case 'message':
      switch (event.message.type) {
        case 'text':
          // return functions.textCommandSolver(event).catch(err=>{console.log(err)});
          return functions.textCommandSolver(event, status);
        case 'image':
          return functions.imgCommandSolver(event);
        case 'sticker':
          return functions.stickerCommandSolver(event);
        case 'video':
        case 'audio':
        case 'file':
        case 'location':
      }
    case 'follow':
      dbMonster.create();
      return dbController.saveId(event);
    case 'unfollow':
    case 'join':
      dbMonster.create();
      return dbController.saveId(event);
    case 'leave':
    case 'memberJoined':
      return clientBot.replyMessage(event.replyToken, {
        type: 'text',
        text: '歡迎阿~~'
      });
    case 'memberLeft':
    case 'postback':
      return postback.postbackCommandSolver(event, status);
    case 'beacon':
    case 'account link':
    case 'device link':
    case 'device unlink':
    case 'line things scenario execution':
  }
}

app.get("/test", function (req, res) {
  res.send("Hello LineBot");
});

app.get("/button", function (req, res) {
  res.sendFile(path.resolve('./functions/notify/button.html'), function (err) {
    if (err) res.send(404);
  });
});

app.get("/regisToken", async (req, res, next) => {
  let code = req.query.code;
  res.sendFile(path.resolve('./functions/notify/res.html'), function (err) {
    if (err) res.send(404);
  });
  // lineNotify.getToken(code)
  // .then((token) => {
  // })
  // .catch((err) => {
  // })
  try {
    let token = await lineNotify.getToken(code);
    dbController.saveToken(token);
  } catch (err) {
    console.log(err);
  }
});

app.post('/', lineBot.middleware(configBot), function (req, res) {
  Promise
    .all(req.body.events.map(handleEvent))
    .then(function (result) {
      res.json(result);
    });
});

app.listen(process.env.PORT || 8080, function () {
  console.log('App now running on port', this.address().port);
});
