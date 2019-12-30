const line = require('@line/bot-sdk');
const config = require('./config');// 導入設定檔
const functions = require('./functions');// 導入方法
const express = require('express');
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
      case 'leave':
      case 'member join':
      case 'member leave':
      case 'postback':
      case 'beacon':
      case 'account link':
      case 'device link':
      case 'device unlink':
      case 'line things scenario execution':
    }
}

app.post('/', line.middleware(config), function(req, res) {
    Promise
      .all(req.body.events.map(handleEvent))
      .then(function(result) {
        res.json(result);
      });
});

app.listen(process.env.PORT || 8080, function() {
    console.log('App now running on port', this.address().port);
});