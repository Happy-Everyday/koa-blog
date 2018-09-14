const Article = require('../models/articleModel')

const insertArticle = async ctx => {
    let articleObj = {
        articleImgUrl: ctx.request.body.articleImgUrl,
        articleTitle: ctx.request.body.articleTitle,
        articleType: ctx.request.body.articleType,
        articleTypeName: ctx.request.body.articleTypeName,
        articleText: ctx.request.body.articleText,
        articleRender: ctx.request.body.articleRender,
        articleStatus: ctx.request.body.articleStatus,
        articleCreatedTime: new Date(),
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
    let searchObl = {}
    if (ctx.request.query.articleTitle != ''&& ctx.request.query.articleTitle != undefined) {
        searchObl.articleTitle = new RegExp(ctx.request.query.articleTitle, 'i')
    }
    if (ctx.request.query.articleStatus != '' && ctx.request.query.articleStatus != undefined) {
        searchObl.articleStatus = ctx.request.query.articleStatus
    }
    if (ctx.request.query.articleType != '' && ctx.request.query.articleType != undefined) {
        searchObl.articleType = ctx.request.query.articleType
    }
    return new Promise((resolve, reject) => {
        Article.find(searchObl, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

const updateArticle = async ctx => {
    let _id = ctx.request.body._id
    let articleObj = {
        articleImgUrl: ctx.request.body.articleImgUrl,
        articleTitle: ctx.request.body.articleTitle,
        articleType: ctx.request.body.articleType,
        articleTypeName: ctx.request.body.articleTypeName,
        articleText: ctx.request.body.articleText,
        articleRender: ctx.request.body.articleRender,
        articleStatus: ctx.request.body.articleStatus
    }

    return new Promise((resolve, reject) => {
        Article.updateOne({_id: _id}, articleObj, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

const deletArticle = async ctx => {
    let deletArticleId = ctx.request.body.deletArticleId

    return new Promise((resolve, reject) => {
        Article.deleteOne({_id: deletArticleId}, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve('ok')
            }
        })
    })
}


module.exports = {
    insertArticle: insertArticle,
    findArticles: findArticles,
    updateArticle: updateArticle,
    deletArticle: deletArticle
}