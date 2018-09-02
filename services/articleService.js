const Article = require('../models/articleModel')

const insertArticle = async ctx => {
    let articleObj = {
        articleImgUrl: ctx.request.body.articleImgUrl,
        articleTitle: ctx.request.body.articleTitle,
        articleType: ctx.request.body.articleType,
        articleText: ctx.request.body.articleText,
        articleRender: ctx.request.body.articleRender,
        articleStatus: ctx.request.body.articleStatus,
        articleAplyNum: 0,
        articleReadNum: 0,
        articleLikeNum: 0
    }
    let newArticle = new Article(articleObj)
    return new Promise((resolve, reject) => {
        newArticle.save((err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

const findArticles = async ctx => {
    let searchObl
    // if (ctx.request.query.articleTitle)
    return new Promise((resolve, reject) => {
        Article.find({}, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}


module.exports = {
    insertArticle: insertArticle,
    findArticles: findArticles
}