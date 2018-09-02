const { insertArticle, findArticles } = require('../services/articleService')

const callbackGetArticleList = async ctx => {
    console.log(ctx.request.query)
    let currentPage = ctx.request.query.currentPage*1 - 1
    let pageSize = ctx.request.query.pageSize*1
    let result = await findArticles()
    console.log(currentPage*pageSize)
    console.log(currentPage*pageSize + pageSize)
    ctx.body = {
        code: '000000',
        msg: '成功',
        data: {
            articleList: result.slice(currentPage*pageSize, currentPage*pageSize + pageSize),
            total: result.length
        }
    }
 }

 const callbackAddArticle = async ctx => {
    let result = await insertArticle(ctx)
    let res
    if (result._id !== undefined) {
        res = {
            code: '000000',
            msg: '操作成功',
            data: result
        }
    } else {
        res = {
            code: '666666',
            msg: '操作失败',
            data: result
        }  
    }
    ctx.body = res
 }
 
 module.exports = [
    {
        method: 'POST',
        path: '/api/addArticle',
        cbFnc: callbackAddArticle
    },
     {
         method: 'GET',
         path: '/api/getArticleList',
         cbFnc: callbackGetArticleList
     }
 ]