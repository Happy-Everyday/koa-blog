const Article = require('../models/articleModel')

const insertArticle = async ctx => {
    let newArticle = new Article({
        articleImgUrl: '',
        articleTitle: 'html华农兄弟：兄弟俩进大山摘的这些野果，看看有没有你没吃过的',
        articledesc: '本视频拍摄于2017本视频拍摄于2017本视频拍摄于2017本视频拍摄于2017本视频拍摄于2017/11/22，这段时间会把之前拍摄的精彩视频全部更新到b站，后续新视频也将第一时间同步更22，这段时间会把之前拍摄的精彩视频全部更新到b站，后续新视频也将第一时间同步更新到b站，谢谢大家支持22，这段时间会把之前拍摄的精彩视频全部更新到b站，后续新视频也将第一时间同步更新到b站，谢谢大家支持新到b站，谢谢大家支持~视频拍摄于2017本视频拍摄于2017本视频拍摄于2017/11/22，这段时间会把之前拍摄的精彩视频全部更新到b站，后续新视频也将第一时间同步更22，这段时间会把之前拍摄的精彩视频全部更新到b站，后续新视频也将第一时间同步更新到b站，谢谢大家支持22，这段时间会把之前拍摄的精彩视频全部更新到b站，后续新视频也将第一时间同步更新到b站，谢谢大家支持新到b站，谢谢大家支持~',
        articleTips: ['html'],
        articleAplyNum: 12,
        articleReadNum: 12,
        articleLikeNum: 12
    })
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