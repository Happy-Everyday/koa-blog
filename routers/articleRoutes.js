const { insertArticle, findArticles, updateArticle, deletArticle } = require('../services/articleService')

const callbackGetArticleList = async ctx => {
    let currentPage = ctx.request.query.currentPage*1 - 1
    let pageSize = ctx.request.query.pageSize*1
    let result = await findArticles(ctx)
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

 const callbackUpdateArticle = async ctx => {
    let result = await updateArticle(ctx)
    let res
    if (result.ok === 1) {
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

 const callbackDelArticle = async ctx => {
    let result = await deletArticle(ctx)
    let res
    if (result == 'ok') {
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
    },
    {
         method: 'POST',
         path: '/api/updateArticle',
         cbFnc: callbackUpdateArticle
    },
    {
         method: 'POST',
         path: '/api/delArticle',
         cbFnc: callbackDelArticle
    }
 ]