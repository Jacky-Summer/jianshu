import { fromJS } from 'immutable'
const defaultState = fromJS({
    "articleList": [{
        "id": 1,
        "title": "震惊！Python正式登顶世界第一",
        "desc": "最近在刷技术博客时，看到了 编程语言流行指数(PYPL)排行榜近日公布了2019年2月份的最新榜单，多年王者Java终于跌落神坛，Python则...",
        "imgUrl": "https://upload-images.jianshu.io/upload_images/1743111-34c08fe3432840a7.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    }, {
        "id": 2,
        "title": "Chrome上有哪些牛逼的扩展值得安装",
        "desc": "社交类 | Chat Anywhere（一叶） Chat Anywhere（现已改名一叶）是一款刚上线不久的新扩展，正如名字所述，它可以让你与正...",
        "imgUrl": "https://upload-images.jianshu.io/upload_images/13080328-424a241945960043.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    }, {
        "id": 3,
        "title": "[转]Vue 全家桶、原理及优化建议",
        "desc": "本文转自公众号 艺述思维 不少互联网公司都在使用vue技术栈，或称为vue全家桶。 使用过vue的程序员一般这样评价它，“vue.js兼具ang...",
        "imgUrl": "https://upload-images.jianshu.io/upload_images/13429147-ed5278c23172cad8?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    }, {
        "id": 4,
        "title": "4款小心谨慎的APP，各个都是黑科技，请大家一定低调使用",
        "desc": "1、一个视界 一个视界是一个非常实用的黑科技软件，功能非常出色，主要保护个人隐藏，对于拥有小秘密的朋友来说非常棒。他可以非常巧妙的将照片、视频、...",
        "imgUrl": "https://upload-images.jianshu.io/upload_images/4376782-ba1f33f40bbfe67d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    }]
})
export default (state = defaultState,action) => {
    return state;
}