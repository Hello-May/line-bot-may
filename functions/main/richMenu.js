const life = (event) => {
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
                                "text": "修煉",
                                "size": "lg",
                                "align": "center",
                                "gravity": "center",
                                "weight": "bold",
                                "color": "#000000"
                            }
                        ]
                    },
                    "hero": {
                        "type": "image",
                        "url": "https://www.myguitarfriend.com/wp-content/uploads/2012/09/icon-form-fill.jpg",
                        "size": "xl",
                        "aspectRatio": "1.51:1",
                        "aspectMode": "fit",
                        "backgroundColor": "#FFFFFF"
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
                                "text": "小怪獸生活在自律至高的世界裡，這個世界是以自律幣為流通貨幣，唯有透過說出密語，完成自律指令，才能賺取自律幣，請幫助小怪獸賺取自律幣以維持日常生活吧！",
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
                                "text": "自律指令",
                                "size": "lg",
                                "align": "center",
                                "weight": "bold"
                            }
                        ]
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
                                        "text": "時間",
                                        "align": "start"
                                    },
                                    {
                                        "type": "text",
                                        "text": "習慣",
                                        "align": "start"
                                    },
                                    {
                                        "type": "text",
                                        "text": "密語"
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
                                                "text": "07:00"
                                            },
                                            {
                                                "type": "text",
                                                "text": "早起"
                                            },
                                            {
                                                "type": "text",
                                                "text": "早安"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "08:00"
                                            },
                                            {
                                                "type": "text",
                                                "text": "收信"
                                            },
                                            {
                                                "type": "text",
                                                "text": "開工啦"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "12:00"
                                            },
                                            {
                                                "type": "text",
                                                "text": "午餐"
                                            },
                                            {
                                                "type": "text",
                                                "text": "放風去"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "15:00"
                                            },
                                            {
                                                "type": "text",
                                                "text": "運動"
                                            },
                                            {
                                                "type": "text",
                                                "text": "跑起來"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "18:00"
                                            },
                                            {
                                                "type": "text",
                                                "text": "晚餐"
                                            },
                                            {
                                                "type": "text",
                                                "text": "爽爽吃"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "19:00"
                                            },
                                            {
                                                "type": "text",
                                                "text": "吃藥"
                                            },
                                            {
                                                "type": "text",
                                                "text": "我吃了"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "21:00"
                                            },
                                            {
                                                "type": "text",
                                                "text": "讀書"
                                            },
                                            {
                                                "type": "text",
                                                "text": "be better"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "23:00"
                                            },
                                            {
                                                "type": "text",
                                                "text": "早睡"
                                            },
                                            {
                                                "type": "text",
                                                "text": "晚安"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    "footer": {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "button",
                                "action": {
                                    "type": "message",
                                    "label": "新增",
                                    "text": "請輸入時間/習慣/密語"
                                }
                            },
                            {
                                "type": "separator"
                            },
                            {
                                "type": "button",
                                "action": {
                                    "type": "message",
                                    "label": "修改",
                                    "text": "改名/初始化"
                                }
                            },
                            {
                                "type": "separator"
                            },
                            {
                                "type": "button",
                                "action": {
                                    "type": "message",
                                    "label": "刪除",
                                    "text": "請輸入刪除之習慣"
                                }
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
                                "text": "自律商城",
                                "size": "lg",
                                "align": "center",
                                "weight": "bold"
                            }
                        ]
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
                                        "text": "商品",
                                        "align": "start"
                                    },
                                    {
                                        "type": "text",
                                        "text": "獎勵",
                                        "align": "start"
                                    },
                                    {
                                        "type": "text",
                                        "text": "自律幣"
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
                                                "text": "1",
                                                "align": "center"
                                            },
                                            {
                                                "type": "text",
                                                "text": "小旅行"
                                            },
                                            {
                                                "type": "text",
                                                "text": "$600"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "2",
                                                "align": "center"
                                            },
                                            {
                                                "type": "text",
                                                "text": "看電影"
                                            },
                                            {
                                                "type": "text",
                                                "text": "$300"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "3",
                                                "align": "center"
                                            },
                                            {
                                                "type": "text",
                                                "text": "玩桌遊"
                                            },
                                            {
                                                "type": "text",
                                                "text": "$200"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "4",
                                                "align": "center"
                                            },
                                            {
                                                "type": "text",
                                                "text": "吃好料"
                                            },
                                            {
                                                "type": "text",
                                                "text": "$100"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "5",
                                                "align": "center"
                                            },
                                            {
                                                "type": "text",
                                                "text": "逛街"
                                            },
                                            {
                                                "type": "text",
                                                "text": "$50"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "6",
                                                "align": "center"
                                            },
                                            {
                                                "type": "text",
                                                "text": "一場lol"
                                            },
                                            {
                                                "type": "text",
                                                "text": "$10"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "separator",
                                "margin": "lg"
                            },
                            {
                                "type": "text",
                                "text": "目前小怪獸擁有自律幣 $64",
                                "margin": "lg",
                                "align": "center",
                                "wrap": false
                            }
                        ]
                    },
                    "footer": {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                                "type": "button",
                                "action": {
                                    "type": "message",
                                    "label": "購買",
                                    "text": "請輸入欲購買之商品編號"
                                }
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
                                "text": "自律說明",
                                "size": "lg",
                                "align": "center",
                                "weight": "bold"
                            }
                        ]
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
                                "layout": "vertical",
                                "spacing": "xxl",
                                "margin": "lg",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "* 時間到了，會跳出提醒通知",
                                        "wrap": false
                                    },
                                    {
                                        "type": "text",
                                        "text": "* 請回答 [密語] 幫助小怪獸自律"
                                    },
                                    {
                                        "type": "text",
                                        "text": "* 密語可多種組合，以；做分隔"
                                    },
                                    {
                                        "type": "text",
                                        "text": "* 每自律一次，可賺取自律幣 $1"
                                    },
                                    {
                                        "type": "text",
                                        "text": "* 連續達成21天，獎勵雙倍自律幣"
                                    },
                                    {
                                        "type": "text",
                                        "text": "* 獎勵可+小怪獸精神糧食 (20%)"
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    }
}

const task = (event) => {
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
                                "text": "任務",
                                "size": "lg",
                                "align": "center",
                                "weight": "bold",
                                "color": "#000000"
                            }
                        ]
                    },
                    "hero": {
                        "type": "image",
                        "url": "https://making-the-web.com/sites/default/files/clipart/167862/time-management-clipart-167862-6494711.png",
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
                                "text": "這個世界的法則－時間四象限，象限的指標為緊急性和重要性，根據指標將任務分為輕重緩急，請幫助小怪獸順利完成任務，以達到時間價值最大化！",
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
                                "text": "重+急=馬上做",
                                "size": "lg",
                                "align": "center",
                                "weight": "bold"
                            }
                        ]
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
                                        "text": "待辦事項",
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
                                "spacing": "xxl",
                                "margin": "xxl",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "- 幫老闆接小孩",
                                        "action": {
                                            "type": "postback",
                                            "label": "內容",
                                            "text": "- 幫老闆接小孩",
                                            "data": "#1-1"
                                        },
                                        "wrap": true
                                    },
                                    {
                                        "type": "text",
                                        "text": "- 繳電費要被斷電了阿阿阿阿",
                                        "action": {
                                            "type": "postback",
                                            "label": "內容",
                                            "text": "- 繳電費要被斷電了阿阿阿阿",
                                            "data": "#1-2"
                                        },
                                        "wrap": true
                                    },
                                    {
                                        "type": "text",
                                        "text": "- ptt.cc/bbs/Gossiping/index.html",
                                        "action": {
                                            "type": "postback",
                                            "label": "內容",
                                            "text": "- ptt.cc/bbs/Gossiping/index.html",
                                            "data": "#1-3"
                                        },
                                        "wrap": true
                                    }
                                ]
                            }
                        ]
                    },
                    "footer": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "separator"
                            },
                            {
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "新增",
                                    "text": "請輸入事項內容",
                                    "data": "#1"
                                }
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
                                "text": "重+緩=計劃做",
                                "size": "lg",
                                "align": "center",
                                "weight": "bold"
                            }
                        ]
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
                                        "text": "待辦事項",
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
                                "spacing": "xxl",
                                "margin": "xxl",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "- 客戶禮物挑選",
                                        "action": {
                                            "type": "postback",
                                            "label": "內容",
                                            "text": "- 客戶禮物挑選",
                                            "data": "#2-1"
                                        },
                                        "wrap": true
                                    },
                                    {
                                        "type": "text",
                                        "text": "- 砍掉沒用的信用卡",
                                        "action": {
                                            "type": "postback",
                                            "label": "內容",
                                            "text": "- 砍掉沒用的信用卡",
                                            "data": "#2-2"
                                        },
                                        "wrap": true
                                    },
                                    {
                                        "type": "text",
                                        "text": "- 整理上課筆記",
                                        "action": {
                                            "type": "postback",
                                            "label": "內容",
                                            "text": "- 整理上課筆記",
                                            "data": "#2-3"
                                        },
                                        "wrap": true
                                    }
                                ]
                            }
                        ]
                    },
                    "footer": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "separator"
                            },
                            {
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "新增",
                                    "text": "請輸入事項內容",
                                    "data": "#1"
                                }
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
                                "text": "輕+急=授權做",
                                "size": "lg",
                                "align": "center",
                                "weight": "bold"
                            }
                        ]
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
                                        "text": "待辦事項",
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
                                "spacing": "xxl",
                                "margin": "xxl",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "- 晚上要倒垃圾",
                                        "action": {
                                            "type": "postback",
                                            "label": "內容",
                                            "text": "- 晚上要倒垃圾",
                                            "data": "#3-3"
                                        },
                                        "wrap": true
                                    },
                                    {
                                        "type": "text",
                                        "text": "- 超市六折限時特價",
                                        "action": {
                                            "type": "postback",
                                            "label": "內容",
                                            "text": "- 超市六折限時特價",
                                            "data": "#3-2"
                                        },
                                        "wrap": true
                                    },
                                    {
                                        "type": "text",
                                        "text": "- 冷氣漏水要找廠商修",
                                        "action": {
                                            "type": "postback",
                                            "label": "內容",
                                            "text": "- 冷氣漏水要找廠商修",
                                            "data": "#3-3"
                                        },
                                        "wrap": true
                                    }
                                ]
                            }
                        ]
                    },
                    "footer": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "separator"
                            },
                            {
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "新增",
                                    "text": "請輸入事項內容",
                                    "data": "#1"
                                }
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
                                "text": "輕+緩=減少做",
                                "size": "lg",
                                "align": "center",
                                "weight": "bold"
                            }
                        ]
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
                                        "text": "待辦事項",
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
                                "spacing": "xxl",
                                "margin": "xxl",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "- 進擊的巨人最新季",
                                        "action": {
                                            "type": "postback",
                                            "label": "內容",
                                            "text": "- 進擊的巨人最新季",
                                            "data": "#4-1"
                                        },
                                        "wrap": true
                                    },
                                    {
                                        "type": "text",
                                        "text": "- 晚上跟朋友喇咧",
                                        "action": {
                                            "type": "postback",
                                            "label": "內容",
                                            "text": "- 晚上跟朋友喇咧",
                                            "data": "#4-2"
                                        },
                                        "wrap": true
                                    },
                                    {
                                        "type": "text",
                                        "text": "- 想吃肉圓加辣椒",
                                        "action": {
                                            "type": "postback",
                                            "label": "內容",
                                            "text": "- 想吃肉圓加辣椒",
                                            "data": "#4-3"
                                        },
                                        "wrap": true
                                    }
                                ]
                            }
                        ]
                    },
                    "footer": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "separator"
                            },
                            {
                                "type": "button",
                                "action": {
                                    "type": "postback",
                                    "label": "新增",
                                    "text": "請輸入事項內容",
                                    "data": "#1"
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
}

const pk = (event) => {
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
                                "text": "戰鬥",
                                "size": "lg",
                                "align": "center",
                                "weight": "bold",
                                "color": "#000000"
                            }
                        ]
                    },
                    "hero": {
                        "type": "image",
                        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbWVf29gHx_rYMtQqzauk_l2KxzlhdVZq0Y8q9GxDkWbFaDmAI&s",
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
                                "text": "blabla",
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
                                "text": "戰鬥",
                                "size": "lg",
                                "align": "center",
                                "weight": "bold"
                            }
                        ]
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
                                "layout": "vertical",
                                "spacing": "xxl",
                                "margin": "lg",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "* blabla",
                                        "wrap": false
                                    },
                                    {
                                        "type": "text",
                                        "text": "* blabla"
                                    }
                                ]
                            },
                            {
                                "type": "separator",
                                "margin": "lg"
                            },
                            {
                                "type": "text",
                                "text": "blabla",
                                "margin": "lg",
                                "wrap": true
                            }
                        ]
                    },
                    "footer": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "button",
                                "action": {
                                    "type": "message",
                                    "label": "修改",
                                    "text": "修改"
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
}

const talk = (event) => {
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
                                    "type": "message",
                                    "label": "探聽情報 key word",
                                    "text": "#查詢"
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
                                    "type": "message",
                                    "label": "請酒館老闆喝酒 donate",
                                    "text": "#抖內"
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
}

const richMenu = () => {
    return {
        "type": "imagemap",
        "baseUrl": "https://i.postimg.cc/pVQhNS5w/pic3.jpg",
        "altText": "Example imagemap",
        "baseSize": {
            "height": 843,
            "width": 2500
        },
        "actions": [
            {
                "type": "postback",
                "text": "#修煉",
                "data": "#life",
                "area": {
                    "x": 64,
                    "y": 149,
                    "width": 414,
                    "height": 603
                }
            },
            {
                "type": "postback",
                "text": "#任務",
                "data": "#task",
                "area": {
                    "x": 506,
                    "y": 149,
                    "width": 430,
                    "height": 607
                }
            },
            {
                "type": "postback",
                "text": "#小怪獸",
                "data": "#monster",
                "area": {
                    "x": 961,
                    "y": 145,
                    "width": 566,
                    "height": 611
                }
            },
            {
                "type": "postback",
                "text": "#戰鬥",
                "data": "#pk",
                "area": {
                    "x": 1554,
                    "y": 141,
                    "width": 440,
                    "height": 615
                }
            },
            {
                "type": "postback",
                "text": "#酒館",
                "data": "#talk",
                "area": {
                    "x": 2022,
                    "y": 141,
                    "width": 418,
                    "height": 615
                }
            }
            // {
            //     "type": "uri",
            //     "linkUri": "https://github.com/GoneTone/line-example-bot-php",
            //     "area": {
            //         "x": 0,
            //         "y": 0,
            //         "width": 520,
            //         "height": 1040
            //     }
            // },
            // {
            //     "type": "message",
            //     "text": "Hello",
            //     "area": {
            //         "x": 520,
            //         "y": 0,
            //         "width": 520,
            //         "height": 1040
            //     }
            // }
        ]
    }
}

module.exports = {
    life,
    task,
    pk,
    talk,
    richMenu
}