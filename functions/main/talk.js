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

module.exports = {
    call,
    keyWord
}