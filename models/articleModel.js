// article 文章 model

const mongoose = require('mongoose')
const articelSchema = require('../schemas/articleSchema')

const Article = mongoose.model('Article', articelSchema)

module.exports = Article