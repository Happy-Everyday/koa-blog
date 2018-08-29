const callbackGetTipsList = async ctx => {
    ctx.body = {
        code: '000000',
        msg: '成功',
        data: {
            tipsList: [
                {
                    key: 'all',
                    value: '全部',
                    choosed: true
                },
                {
                    key: 'html',
                    value: 'HTML',
                    choosed: false
                },
                {
                    key: 'css',
                    value: 'CSS',
                    choosed: false
                },
                {
                    key: 'js',
                    value: 'javascript',
                    choosed: false
                }
            ]
        }
    }
 }
 
 module.exports = [
     {
         method: 'POST',
         path: '/api/getTipsList',
         cbFnc: callbackGetTipsList
     }
 ]