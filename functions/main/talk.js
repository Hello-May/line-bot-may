const call = (event) => {
    return {
        "type": "flex",
        "altText": "Flex Message",
        "contents": {
            "type": "carousel",
            "contents": [
                {
                    "type": "bubble",
                    "direction": "ltr",
                    "header": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "酒館",
                                "size": "lg",
                                "align": "center",
                                "weight": "bold",
                                "color": "#000000"
                            }
                        ]
                    },
                    "hero": {
                        "type": "image",
                        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9jjDmULU_qrIn0MDbEQigSn-HXcsyQMew1cpPKmUCnCxWbsFRQ&s",
                        "size": "xl",
                        "aspectRatio": "1.51:1",
                        "aspectMode": "fit"
                    },
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "separator"
                            },
                            {
                                "type": "text",
                                "text": "小怪獸是個愛喝酒的生物，總在精疲力盡之際，進來喝一杯！",
                                "margin": "xxl",
                                "align": "start",
                                "gravity": "center",
                                "weight": "bold",
                                "wrap": true
                            }
                        ]
                    }
                },
                {
                    "type": "bubble",
                    "direction": "ltr",
                    "header": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "今天來點什麼？",
                                "size": "lg",
                                "align": "center",
                                "weight": "bold"
                            }
                        ]
                    },
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                            {
                                "type": "separator"
                            },
                            {
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "探聽情報 key word",
                                    "data": "查詢指令"
                                }
                            },
                            {
                                "type": "button",
                                "action": {
                                    "type": "uri",
                                    "label": "跟調酒師聊聊 feedback",
                                    "uri": "line://app/1653656986-XokABe37"
                                }
                            },
                            {
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "請酒館老闆喝酒 donate",
                                    "data": "抖內開發者"
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
}

const keyWord = () => {
    return {
        "type": "flex",
        "altText": "Flex Message",
        "contents": {
            "type": "bubble",
            "direction": "ltr",
            "header": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "查詢指令",
                        "size": "lg",
                        "align": "center",
                        "weight": "bold"
                    }
                ]
            },
            "hero": {
                "type": "image",
                "url": "https://i.postimg.cc/bvvLBTjg/image.jpg",
                "size": "xl",
                "aspectRatio": "1.51:1",
                "aspectMode": "fit"
            },
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "separator"
                    },
                    {
                        "type": "text",
                        "text": "☺這裡有五大功能☺",
                        "margin": "lg",
                        "align": "center",
                        "wrap": true
                    },
                    {
                        "type": "text",
                        "text": "［修練］養成自律習慣",
                        "align": "center"
                    },
                    {
                        "type": "text",
                        "text": "［任務］記錄備忘事項",
                        "align": "center"
                    },
                    {
                        "type": "text",
                        "text": "［小怪獸］成長型怪獸",
                        "align": "center"
                    },
                    {
                        "type": "text",
                        "text": "［戰鬥］朋友社交娛樂",
                        "align": "center"
                    },
                    {
                        "type": "text",
                        "text": "［酒館］其他查詢資訊",
                        "align": "center"
                    },
                    {
                        "type": "separator",
                        "margin": "lg"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "margin": "xs",
                        "contents": [
                            {
                                "type": "text",
                                "text": "指令",
                                "align": "center"
                            },
                            {
                                "type": "text",
                                "text": "說明",
                                "align": "center"
                            }
                        ]
                    },
                    {
                        "type": "separator",
                        "margin": "xs"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "margin": "lg",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "#",
                                        "align": "center"
                                    },
                                    {
                                        "type": "text",
                                        "text": "呼叫選單",
                                        "align": "start"
                                    }
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "#連動",
                                        "align": "center"
                                    },
                                    {
                                        "type": "text",
                                        "text": "連動line notify",
                                        "align": "start"
                                    }
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "#呼叫",
                                        "align": "center"
                                    },
                                    {
                                        "type": "text",
                                        "text": "啟動line bot",
                                        "align": "start"
                                    }
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "#閉嘴",
                                        "align": "center"
                                    },
                                    {
                                        "type": "text",
                                        "text": "關閉line bot",
                                        "align": "start"
                                    }
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "#修練",
                                        "align": "center"
                                    },
                                    {
                                        "type": "text",
                                        "text": "圖文選單1",
                                        "align": "start"
                                    }
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "#任務",
                                        "align": "center"
                                    },
                                    {
                                        "type": "text",
                                        "text": "圖文選單2",
                                        "align": "start"
                                    }
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "#小怪獸",
                                        "align": "center"
                                    },
                                    {
                                        "type": "text",
                                        "text": "圖文選單3",
                                        "align": "start"
                                    }
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "#戰鬥",
                                        "align": "center"
                                    },
                                    {
                                        "type": "text",
                                        "text": "圖文選單4",
                                        "align": "start"
                                    }
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "#酒館",
                                        "align": "center"
                                    },
                                    {
                                        "type": "text",
                                        "text": "圖文選單5",
                                        "align": "start"
                                    }
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "輸入公式",
                                        "align": "center"
                                    },
                                    {
                                        "type": "text",
                                        "text": "進行計算與解答",
                                        "align": "start"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
}

const donate = () => {
    return [{
        type: 'text',
        text: 'HI~麻煩轉帳至台新銀行(812)帳號是28881001521601或是點擊連結開啟Richart APP可以直接帶入我的帳號唷 https://richart.tw/TSDIB_RichartWeb/RC04/RC040300?token=my3nMz81ous%3D'
    },
    {
        type: 'text',
        text: '看廣告做公益，救救窮苦人！'
    },
    {
        "type": "video",
        "originalContentUrl": "https://r1---sn-npoeene6.googlevideo.com/videoplayback?expire=1580330877&ei=HZsxXueQEIjb7QSQhoT4Bw&ip=92.63.195.213&id=o-AGLj7qG5550jaTtp8p2Orq6jkJTvniUFhPM62JFKb1Mr&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video/mp4&gir=yes&clen=2784971&ratebypass=yes&dur=30.093&lmt=1486017765637119&fvip=6&fexp=23842630&c=WEB&sparams=expire,ei,ip,id,itag,source,requiressl,vprv,mime,gir,clen,ratebypass,dur,lmt&sig=ALgxI2wwRgIhAMAREi1478a_UPWJD8-aXEJMEFMj3elHAkoB2r-dTRorAiEApZ2GEs_dFDnsq1G7Q6RmOtp6pTTlo_dLn3CQn4kMKus=&title=美食篇_30秒_短廣告&cm2rm=sn-ipoxu-un5e77e,sn-un567d&req_id=3c722c7539d7a3ee&ipbypass=yes&redirect_counter=2&cms_redirect=yes&mip=2001:b400:e2a8:85b2:d09a:55e5:e2ec:4331&mm=34&mn=sn-npoeene6&ms=ltu&mt=1580309190&mv=m&mvi=0&pl=44&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRgIhAMOtnoGreL4nYd1y4EzCC2DvVhloH9V6z_C1lIsGQ8QkAiEAy3g3Ul_3ZvHvuDF_agN4P263XEVqPmXpc8XYQFq8MXw=",
        "previewImageUrl": "https://i.ytimg.com/vi/qTIepMobf3A/hqdefault.jpg?sqp=-oaymwEWCMQBEG5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLCcR31hQkIr0bv8GP48TsH-qzkZ_Q"
    }]
}

module.exports = {
    call,
    keyWord,
    donate
}