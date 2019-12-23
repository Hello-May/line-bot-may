const line = require('@line/bot-sdk');
const config = require('./config');// 導入設定檔
const express = require('express');
const app = express();

function handleEvent(event) {
    console.log(event);
    switch (event.type) {
      case 'message':
        switch (event.message.type) {
          case 'text':
            return client.replyMessage(event.replyToken, {
                type: 'text',
                text: (test)
              });
            }
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