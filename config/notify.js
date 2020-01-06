const configNotify = {
    clientId: '3qZCtZ2rmMdUcDa3qhFfyM',
    clientSecret: 'GTFK3GaIa77WzB08gS9RH4446gpoZFRKd3YEineEJES',
    accessToken:'fEIHxeKHz3aftAMHNBGT3gXEqV4h72es0IWfw0HxDH4',
    //使用者授權後，產生連動時取得token，存進資料庫
    redirect_uri: 'https:\/\/linebot-may.herokuapp.com\/',
    authorizeApi: 'https:\/\/notify-bot.line.me\/oauth\/authorize',
    tokenApi: 'https:\/\/notify-bot.line.me\/oauth\/token',
    notifyApi: 'https:\/\/notify-api.line.me\/api\/notify',
    statusApi: 'https:\/\/notify-api.line.me\/api\/status',
    revokeApi: 'https:\/\/notify-api.line.me\/api\/revoke'
}

// app.use('/linenotify',
//     lineNotify(config),
//     function (req, res) {
//         const token = req['line-notify-access-token'];
//         //...
//     });

module.exports = configNotify;