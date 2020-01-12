const dbUser = require('../dbController/user');
const dbTask = require('../dbController/task');

const call = async (event) => {
    let task;
    let userId = (event.source.type == 'user' ? event.source.userId : event.source.groupId);

    try {
        task = await dbTask.searchById(userId);
        console.log("task:" + JSON.stringify(task));
    } catch (err) {
        console.log(err);
    }
    let test = {
        "type": "box",
        "layout": "horizontal",
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
                "flex": 10,
                "wrap": true
            },
            {
                "type": "text",
                "text": ">",
                "action": {
                    "type": "postback",
                    "label": "內容",
                    "text": "- 幫老闆接小孩",
                    "data": "#1-1"
                },
                "gravity": "center",
                "flex": 1,
                "align": "end"
            }
        ]
    }
    console.log("test:" + JSON.stringify(test));


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
                                        "type": "box",
                                        "layout": "horizontal",
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
                                                "flex": 10,
                                                "wrap": true
                                            },
                                            {
                                                "type": "text",
                                                "text": ">",
                                                "action": {
                                                    "type": "postback",
                                                    "label": "內容",
                                                    "text": "- 幫老闆接小孩",
                                                    "data": "#1-1"
                                                },
                                                "gravity": "center",
                                                "flex": 1,
                                                "align": "end"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "- 繳電費要被斷電了阿阿阿阿",
                                                "action": {
                                                    "type": "postback",
                                                    "label": "內容",
                                                    "text": "- 繳電費要被斷電了阿阿阿阿",
                                                    "data": "#1-2"
                                                },
                                                "flex": 10,
                                                "wrap": true
                                            },
                                            {
                                                "type": "text",
                                                "text": ">",
                                                "action": {
                                                    "type": "postback",
                                                    "label": "內容",
                                                    "text": "- 繳電費要被斷電了阿阿阿阿",
                                                    "data": "#1-2"
                                                },
                                                "gravity": "center",
                                                "flex": 1,
                                                "align": "end"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": "- ptt.cc/bbs/Gossiping/index.html",
                                                "action": {
                                                    "type": "postback",
                                                    "label": "內容",
                                                    "text": "- ptt.cc/bbs/Gossiping/index.html",
                                                    "data": "#1-3"
                                                },
                                                "flex": 10,
                                                "wrap": true
                                            },
                                            {
                                                "type": "text",
                                                "text": ">",
                                                "action": {
                                                    "type": "postback",
                                                    "label": "內容",
                                                    "text": "- ptt.cc/bbs/Gossiping/index.html",
                                                    "data": "#1-3"
                                                },
                                                "gravity": "center",
                                                "flex": 1,
                                                "align": "end"
                                            }
                                        ]
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

module.exports = {
    call
}