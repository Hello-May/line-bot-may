var s = new Date().toLocaleString('zh-TW', {timeZone: 'Asia/Taipei'});

const lineNotify = require('../functions/notify');
lineNotify.notify({
    type: 'message',
    text: s + '\nDaily at 12:00 AM UTC' 
});
