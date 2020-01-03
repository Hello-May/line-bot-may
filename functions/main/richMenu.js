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
                    "text": "修練",
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
                "url": "https://mtc.ntnu.edu.tw/upload_files/icon/planning.png",
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
                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOhXs9ZNg_VvIuEHGRhtVt9BZjeZbHAXcmVUtegcCK6I_r8GT7&s",
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
                          "text": "幫老闆接小孩",
                          "data": "#1 1"
                        },
                        "wrap": true
                      },
                      {
                        "type": "text",
                        "text": "- 繳電費要被斷電了阿阿阿阿",
                        "action": {
                          "type": "postback",
                          "label": "內容",
                          "text": "繳電費要被斷電了阿阿阿阿",
                          "data": "#1 2"
                        },
                        "wrap": true
                      },
                      {
                        "type": "text",
                        "text": "- ptt.cc/bbs/Gossiping/index.html",
                        "action": {
                          "type": "postback",
                          "label": "內容",
                          "text": "https://www.ptt.cc/bbs/Gossiping/index.html",
                          "data": "#1 3"
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
                          "text": "幫老闆接小孩",
                          "data": "#1 1"
                        },
                        "wrap": true
                      },
                      {
                        "type": "text",
                        "text": "- 砍掉沒用的信用卡",
                        "action": {
                          "type": "postback",
                          "label": "內容",
                          "text": "繳電費要被斷電了阿阿阿阿",
                          "data": "#1 2"
                        },
                        "wrap": true
                      },
                      {
                        "type": "text",
                        "text": "- 整理上課筆記",
                        "action": {
                          "type": "postback",
                          "label": "內容",
                          "text": "https://www.ptt.cc/bbs/Gossiping/index.html",
                          "data": "#1 3"
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
                          "text": "幫老闆接小孩",
                          "data": "#1 1"
                        },
                        "wrap": true
                      },
                      {
                        "type": "text",
                        "text": "- 超市六折限時特價",
                        "action": {
                          "type": "postback",
                          "label": "內容",
                          "text": "繳電費要被斷電了阿阿阿阿",
                          "data": "#1 2"
                        },
                        "wrap": true
                      },
                      {
                        "type": "text",
                        "text": "- 冷氣漏水要找廠商修",
                        "action": {
                          "type": "postback",
                          "label": "內容",
                          "text": "https://www.ptt.cc/bbs/Gossiping/index.html",
                          "data": "#1 3"
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
                          "text": "幫老闆接小孩",
                          "data": "#1 1"
                        },
                        "wrap": true
                      },
                      {
                        "type": "text",
                        "text": "- 晚上跟朋友喇咧",
                        "action": {
                          "type": "postback",
                          "label": "內容",
                          "text": "繳電費要被斷電了阿阿阿阿",
                          "data": "#1 2"
                        },
                        "wrap": true
                      },
                      {
                        "type": "text",
                        "text": "- 想吃肉圓加辣椒",
                        "action": {
                          "type": "postback",
                          "label": "內容",
                          "text": "https://www.ptt.cc/bbs/Gossiping/index.html",
                          "data": "#1 3"
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
    life,
    task

}