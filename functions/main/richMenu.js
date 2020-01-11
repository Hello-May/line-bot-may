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
                "type": "message",
                "text": "#修煉",
                "area": {
                    "x": 64,
                    "y": 149,
                    "width": 414,
                    "height": 603
                }
            },
            {
                "type": "message",
                "text": "#任務",
                "area": {
                    "x": 506,
                    "y": 149,
                    "width": 430,
                    "height": 607
                }
            },
            {
                "type": "message",
                "text": "#小怪獸",
                "area": {
                    "x": 961,
                    "y": 145,
                    "width": 566,
                    "height": 611
                }
            },
            {
                "type": "message",
                "text": "#戰鬥",
                "area": {
                    "x": 1554,
                    "y": 141,
                    "width": 440,
                    "height": 615
                }
            },
            {
                "type": "message",
                "text": "#酒館",
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
    richMenu
}