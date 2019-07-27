import { fromJS } from 'immutable'
const defaultState = fromJS({
    "articleList": [{
        "id": 1,
        "title": "震惊！Python正式登顶世界第一",
        "desc": "最近在刷技术博客时，看到了 编程语言流行指数(PYPL)排行榜近日公布了2019年2月份的最新榜单，多年王者Java终于跌落神坛，Python则...",
        "imgUrl": "//upload-images.jianshu.io/upload_images/11897912-b0493608c064a225?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    }, {
        "id": 2,
        "title": "Chrome上有哪些牛逼的扩展值得安装",
        "desc": "社交类 | Chat Anywhere（一叶） Chat Anywhere（现已改名一叶）是一款刚上线不久的新扩展，正如名字所述，它可以让你与正...",
        "imgUrl": "//upload-images.jianshu.io/upload_images/16235793-b49cf9ac1255d452.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    }, {
        "id": 3,
        "title": "[转]Vue 全家桶、原理及优化建议",
        "desc": "本文转自公众号 艺述思维 不少互联网公司都在使用vue技术栈，或称为vue全家桶。 使用过vue的程序员一般这样评价它，“vue.js兼具ang...",
        "imgUrl": "//upload-images.jianshu.io/upload_images/15095873-b40230a31d031ae1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    }, {
        "id": 4,
        "title": "4款小心谨慎的APP，各个都是黑科技，请大家一定低调使用",
        "desc": "1、一个视界 一个视界是一个非常实用的黑科技软件，功能非常出色，主要保护个人隐藏，对于拥有小秘密的朋友来说非常棒。他可以非常巧妙的将照片、视频、...",
        "imgUrl": "//upload-images.jianshu.io/upload_images/5959748-1afda6e7ec672e75?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },{
        "id":5,
        "title":"坚持跑步3年，生活会发生什么变化",
        "desc":"今天，是我跑步3周年纪念日。 2016年3月14日，我用某跑步软件正式开始记录跑步数据，到今天正好3年。（其实，在此之前，我还用另一个软件跑过一短时间，，跑量50+KM，不过可以忽略不计了。）",
        "imgUrl":"//upload-images.jianshu.io/upload_images/1743178-53a574100cda3cbd.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },{
        "id":6,
        "title":"猫咪随手一招，平衡力让人捏把汗，网友：社会我猫哥，猫狠话不多",
        "desc":"一提到猫咪，想必大家首先想到的不一定是猫咪呆萌可爱的颜值，反而有可能是猫咪令人惊叹的弹跳力、柔软度、和平衡力，随便哪个技能拿出来，都能让人佩服至...",
        "imgUrl":"//upload-images.jianshu.io/upload_images/14352811-0fef2a38c9dbdb0d.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },{
        "id":7,
        "title":"儿子总说幼儿园饭菜香，说我做得难吃，看完老师朋友圈，一脸懵逼",
        "desc":"说实话现在的小孩子，都是父母心中的一个宝，为什么要这样说呢？从家里的餐桌上就能够发现，像我们这些80后的当小孩的时候，就是一碗面条或者两个馒头，...",
        "imgUrl":"//upload-images.jianshu.io/upload_images/15082064-1bc64cb9e754c3c3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    }],
    "recommendList":[{
        "id":1,
        "imgUrl":"//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
    },{
        "id":2,
        "imgUrl":"//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png",
    },{
        "id":3,
        "imgUrl":"//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
    },{
        "id":4,
        "imgUrl":"//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
    }],
    "writerList":[{
        "id":1,
        "name":"简书大课堂",
        "words":1508.7,
        "star":34.6,
        "imgUrl":"//upload.jianshu.io/users/upload_avatars/3627484/eb973bb9-37ba-4d07-acec-850c0a66d1bb.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
    },{
        "id":2,
        "name":"名贵的考拉熊",
        "words":247.7,
        "star":18.5,
        "imgUrl":"//upload.jianshu.io/users/upload_avatars/7663825/7c28763e-002b-4e89-8dea-5b8da210ef2c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
    },{
        "id":3,
        "name":"lostdays",
        "words":231.7,
        "star":2.1,
        "imgUrl":"//upload.jianshu.io/users/upload_avatars/10849033/7278547c-f8ba-4a5a-a2ad-5dfd43abab81.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
    },{
        "id":4,
        "name":"灰土豆",
        "words":332.8,
        "star":1.8,
        "imgUrl":"//upload.jianshu.io/users/upload_avatars/677687/c84b99723362.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
    },{
        "id":5,
        "name":"行距版君",
        "words":518.3,
        "star":54.4,
        "imgUrl":"//upload.jianshu.io/users/upload_avatars/1835526/83d24e1a-0a0f-43f6-8a1d-289be6101e73.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
    }
]

})
export default (state = defaultState,action) => {
    return state;
}