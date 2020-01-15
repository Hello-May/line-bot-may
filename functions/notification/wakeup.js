var s = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });

const lineNotify = require('./index');
lineNotify.notify('XNVldsovy2m6RTMubkUrIPM5FRIFXvDUir4G0Dq75eX', {
    type: 'message',
    text: '保持清醒\n' + s
});