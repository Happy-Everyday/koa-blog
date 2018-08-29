// article 文章 schema


const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    articleImgUrl: String,
    articleTitle: String,
    articleTime: {
        type: Date,
        default: Date.now()
    },
    articleTips: [ String ],
    articledesc: String,
    articleAplyNum: Number,
    articleReadNum: Number,
    articleLikeNum: Number
})

module.exports = articleSchema