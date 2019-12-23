console.log('test')

var linebot = require('linebot');

var bot = linebot({
  channelId: "1653656986",
  channelSecret: "754453bdc0b0e95ef5b2fecac0859e8c",
  channelAccessToken: ""
});

const express = require('express'); 
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/api',(req,res,next) =>{
    res.send('test');
});

app.get('/api2',(req,res,next) =>{  
    res.send('testtest');
});

app.listen(3000,() => { 
    console.log('listening on '+3000);
});
