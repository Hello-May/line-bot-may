const configNotify = {
    clientId: '3qZCtZ2rmMdUcDa3qhFfyM',
    clientSecret: 'GTFK3GaIa77WzB08gS9RH4446gpoZFRKd3YEineEJES',
    channelAccessToken:'ZvIR3CGvofbTvYcSHozeHrzuPL3TUowrNzr3xIH10w5',
    AuthorizeApi = 'https:\/\/notify-bot.line.me\/oauth\/authorize',
    TokenApi = 'https:\/\/notify-bot.line.me\/oauth\/token',
    NotifyApi = 'https:\/\/notify-api.line.me\/api\/notify',
    StatusApi = 'https:\/\/notify-api.line.me\/api\/status',
    RevokeApi = 'https:\/\/notify-api.line.me\/api\/revoke'
}

// app.use('/linenotify',
//     lineNotify(config),
//     function (req, res) {
//         const token = req['line-notify-access-token'];
//         //...
//     });

module.exports = configNotify;