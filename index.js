const lineBot = require('@line/bot-sdk');
const lineNotify = require('express-line-notify');
const configBot = require('./config');
const configNotify = require('../config/notify');
const functions = require('./functions');
const express = require('express');
const bodyParser = require('body-parser');
const unirest = require('unirest');
const app = express();

function handleEvent(event) {
    console.log(event);
    switch (event.type) {
      case 'message':
        switch (event.message.type) {
          case 'text':
         
            var req = unirest('POST', configNotify.NotifyApi)
              .headers({
                'Authorization': 'Bearer fEIHxeKHz3aftAMHNBGT3gXEqV4h72es0IWfw0HxDH4',
                'Content-Type': 'multipart/form-data; boundary=--------------------------054153815016971257363988'
              })
              .field('message', 'hello world')
              .end(function (res) { 
                if (res.error) throw new Error(res.error); 
                console.log(res.raw_body);
              });
            

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

app.get("/", function (req, res) { 
    res.send("Hello LineBot");
});

app.post('/', lineBot.middleware(configBot), function(req, res) {
    Promise
      .all(req.body.events.map(handleEvent))
      .then(function(result) {
        res.json(result);
      });
});

// app.use(bodyparser.json())
// app.post('/', function(req, res) {
//   // res.json(handleEvent(req.body.event))
//     Promise
//       .all(req.body.events.map(handleEvent))
//       .then(function(result) {
//         res.json(result);
//       });
// })

app.listen(process.env.PORT || 8080, function() {
    console.log('App now running on port', this.address().port);
});