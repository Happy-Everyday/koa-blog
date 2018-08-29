const { insertArticle, findArticles } = require('../services/articleService')

const callbackGetArticleList = async ctx => {
    console.log(ctx.request.body)
    let result = await findArticles()
    console.log(result)
    ctx.body = {
        code: '000000',
        msg: '成功',
        data: {
            articleList: result
        }
    }
 }

 const callbackAddArticle = async ctx => {
    let result = await insertArticle(ctx)
    console.log(result)
 }
 
 module.exports = [
    {
        method: 'POST',
        path: '/api/addArticle',
        cbFnc: callbackAddArticle
    },
     {
         method: 'POST',
         path: '/api/getArticleList',
         cbFnc: callbackGetArticleList
     }
 ]