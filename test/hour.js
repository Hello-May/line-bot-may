var s = new Date().toLocaleString('zh-TW', {timeZone: 'Asia/Taipei'});

const lineNotify = require('../functions/notify');
lineNotify.notify({
    type: 'message',
    text: s +'\nHourly at :40'
});
