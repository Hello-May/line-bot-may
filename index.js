const lineBot = require('@line/bot-sdk');
const lineNotify = require('./functions/notify');
const configBot = require('./config');
const functions = require('./functions');
const express = require('express');
const bodyParser = require('body-parser');
const clientBot = new lineBot.Client(configBot);
const dbController = require('./functions/dbController');
const path = require('path');
const app = express();

function handleEvent(event) {
  console.log(event);
  switch (event.type) {
    case 'message':
      switch (event.message.type) {
        case 'text':
          return functions.textCommandSolver(event);
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
    case 'unfollow':
    case 'join':
      return dbController.saveId(event);
    case 'leave':
    case 'memberJoined':
      return clientBot.replyMessage(event.replyToken, {
        type: 'text',
        text: '歡迎阿~~'
      });
    case 'memberLeft':
    case 'postback':
    // return clientBot.replyMessage(event.replyToken, {
    //   type: 'text',
    //   text: '阿阿阿阿阿阿~~'+event.postback.data
    // });
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
    console.log(token+"<--------------------getToken------------------------------");
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
