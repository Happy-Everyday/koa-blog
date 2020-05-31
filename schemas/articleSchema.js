// article 文章 schema


const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    articleAuthor: String,
    articleImgUrl: String,
    articleTitle: String,
    articleCreatedTime: {
        type: Date,
        default: new Date()
    },
    articleType: String,
    articleTypeName: String,
    articleText: String,
    articleRender: String,
    articleStatus: String,
    articleAplyNum: Number,
    articleReadNum: Number,
    articleLikeNum: Number
})

module.exports = articleSchema