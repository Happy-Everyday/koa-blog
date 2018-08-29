const { insertArticle } = require('../services/articleService')

const callbackGetArticleList = async ctx => {
    console.log(ctx.request.body)
    let reqQuery = ctx.request.body
    let queryTips = (reqQuery.tips !=undefined && reqQuery.tips.length !== 0)? reqQuery.tips: ['all']
    var articleList = []
    queryTips.forEach(item => {
        if (item == 'html' || item == 'all') {
            var _articleList = [
                {
                    articleImgUrl: '',
                    articleTitle: 'html华农兄弟：兄弟俩进大山摘的这些野果，看看有没有你没吃过的',
                    articleTime: '2018-08-21 18:10:10',
                    articledesc: '本视频拍摄于2017本视频拍摄于2017本视频拍摄于2017本视频拍摄于2017本视频拍摄于2017/11/22，这段时间会把之前拍摄的精彩视频全部更新到b站，后续新视频也将第一时间同步更22，这段时间会把之前拍摄的精彩视频全部更新到b站，后续新视频也将第一时间同步更新到b站，谢谢大家支持22，这段时间会把之前拍摄的精彩视频全部更新到b站，后续新视频也将第一时间同步更新到b站，谢谢大家支持新到b站，谢谢大家支持~视频拍摄于2017本视频拍摄于2017本视频拍摄于2017/11/22，这段时间会把之前拍摄的精彩视频全部更新到b站，后续新视频也将第一时间同步更22，这段时间会把之前拍摄的精彩视频全部更新到b站，后续新视频也将第一时间同步更新到b站，谢谢大家支持22，这段时间会把之前拍摄的精彩视频全部更新到b站，后续新视频也将第一时间同步更新到b站，谢谢大家支持新到b站，谢谢大家支持~',
                    articleTips: ['html'],
                    articleAplyNum: 12,
                    articleReadNum: 12,
                    articleLikeNum: 12
                },
            ] 
            articleList.push(..._articleList)
        }
        if (item == 'css' || item == 'all') {
            var _articleList = [
                {
                    articleId: '2',
                    articleImgUrl: '',
                    articleTitle: 'css华农兄弟：兄弟俩进大山摘的这些野果，看看有没有你没吃过的',
                    articleTime: '2018-08-21 18:10:10',
                    articledesc: '本视频拍摄于2017本视频拍摄于2017本视频拍摄于2017本视频拍摄于2017本视频拍摄于2017/11/22，这段时间会把之前拍摄的精彩视频全部更新到b站，后续新视频也将第一时间同步更22，这段时间会把之前拍摄的精彩视频全部更新到b站，后续新视频也将第一时间同步更新到b站，谢谢大家支持22，这段时间会把之前拍摄的精彩视频全部更新到b站，后续新视频也将第一时间同步更新到b站，谢谢大家支持新到b站，谢谢大家支持~视频拍摄于2017本视频拍摄于2017本视频拍摄于2017/11/22，这段时间会把之前拍摄的精彩视频全部更新到b站，后续新视频也将第一时间同步更22，这段时间会把之前拍摄的精彩视频全部更新到b站，后续新视频也将第一时间同步更新到b站，谢谢大家支持22，这段时间会把之前拍摄的精彩视频全部更新到b站，后续新视频也将第一时间同步更新到b站，谢谢大家支持新到b站，谢谢大家支持~',
                    articleAplyNum: '',
                    articleReadNum: '',
                },
            ] 
            articleList.push(..._articleList)
        }
        if (item == 'js' || item == 'all') {
            var _articleList = [
                {
                    articleId: '3',
                    articleImgUrl: '',
                    articleTitle: 'js华农兄弟：兄弟俩进大山摘的这些野果，看看有没有你没吃过的',
                    articleTime: '2018-08-21 18:10:10',
                    articledesc: '本视频拍摄于2017本视频拍摄于2017本视频拍摄于2017本视频拍摄于2017本视频拍摄于2017/11/22，这段时间会把之前拍摄的精彩视频全部更新到b站，后续新视频也将第一时间同步更22，这段时间会把之前拍摄的精彩视频全部更新到b站，后续新视频也将第一时间同步更新到b站，谢谢大家支持22，这段时间会把之前拍摄的精彩视频全部更新到b站，后续新视频也将第一时间同步更新到b站，谢谢大家支持新到b站，谢谢大家支持~视频拍摄于2017本视频拍摄于2017本视频拍摄于2017/11/22，这段时间会把之前拍摄的精彩视频全部更新到b站，后续新视频也将第一时间同步更22，这段时间会把之前拍摄的精彩视频全部更新到b站，后续新视频也将第一时间同步更新到b站，谢谢大家支持22，这段时间会把之前拍摄的精彩视频全部更新到b站，后续新视频也将第一时间同步更新到b站，谢谢大家支持新到b站，谢谢大家支持~',
                    articleAplyNum: '',
                    articleReadNum: '',
                },
            ] 
            articleList.push(..._articleList)
        }
    });
    ctx.body = {
        code: '000000',
        msg: '成功',
        data: {
            articleList: articleList
        }
    }
 }

 const callbackAddArticle = async ctx => {
    let result = await insertArticle(ctx)
    console.log(result)
 }
 
 module.exports = [
    {
        method: 'GET',
        path: '/api/addArticle',
        cbFnc: callbackAddArticle
    },
     {
         method: 'POST',
         path: '/api/getArticleList',
         cbFnc: callbackGetArticleList
     }
 ]