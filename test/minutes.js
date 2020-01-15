var s = new Date().toLocaleString('zh-TW', {timeZone: 'Asia/Taipei'});

const lineNotify = require('../functions/notification');
lineNotify.notify('XNVldsovy2m6RTMubkUrIPM5FRIFXvDUir4G0Dq75eX',{
    type: 'message',
    text: s +'\n保持清醒'
});