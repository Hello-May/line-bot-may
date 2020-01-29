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
                        "text": "指令",
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
                        "type": "text",
                        "text": "[指令] 說明\n[#] 叫出選單\n[#連動] 連動line notify\n[#呼叫] 啟動機器人\n[#閉嘴] 關閉機器人\n[#修煉] 選單1\n[#任務] 選單2\n[#小怪獸] 選單3\n[#戰鬥] 選單4\n[#酒館] 選單5",
                        "margin": "lg",
                        "align": "center",
                        "wrap": true
                    }
                ]
            }
        }
    }
}

module.exports = {
    call,
    keyWord
}