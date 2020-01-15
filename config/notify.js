const configNotify = {
    clientId: '3qZCtZ2rmMdUcDa3qhFfyM',
    clientSecret: 'GTFK3GaIa77WzB08gS9RH4446gpoZFRKd3YEineEJES',
    redirect_uri: 'https:\/\/linebot-may.herokuapp.com\/',
    authorizeApi: 'https:\/\/notify-bot.line.me\/oauth\/authorize',
    tokenApi: 'https:\/\/notify-bot.line.me\/oauth\/token',
    notifyApi: 'https:\/\/notify-api.line.me\/api\/notify',
    statusApi: 'https:\/\/notify-api.line.me\/api\/status',
    revokeApi: 'https:\/\/notify-api.line.me\/api\/revoke',
    redirectUri: 'https:\/\/linebot-may.herokuapp.com\/regisToken'
}

// app.use('/linenotify',
//     lineNotify(config),
//     function (req, res) {
//         const token = req['line-notify-access-token'];
//         //...
//     });

module.exports = configNotify;