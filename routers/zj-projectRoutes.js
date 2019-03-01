const callbackGetJifen = async ctx => {
    ctx.body = {
        code: '000000',
        msg: '成功',
        data: {
            num: '157****1234',
            jifenTotal: 6789,
            jifenNew: 473,
            jifenOld: 1473,
            jifenForHuafei: 1250,
            jifenForLiuliang: 800,
            canGetHuafei: 15,
            canGetLiuliang: 150
        }
    }
 }

 const callbackGetJifenMIngxi = async ctx => {
    ctx.body = {
        code: '000000',
        msg: '成功',
        data: {
            jifenList: [
                {
                    id: '0',
                    time: '2019-02-02',
                    jifen: '302',
                    type: '消费积分'
                },
                {
                    id: '1',
                    time: '2019-02-02',
                    jifen: '302',
                    type: '消费积分'
                },
                {
                    id: '2',
                    time: '2019-02-02',
                    jifen: '302',
                    type: '消费积分'
                },
                {
                    id: '3',
                    time: '2019-02-02',
                    jifen: '302',
                    type: '消费积分'
                }
            ]
        }
    }
 }
 
 module.exports = [
     {
         method: 'GET',
         path: '/api/getJifen',
         cbFnc: callbackGetJifen
     },
     {
        method: 'GET',
        path: '/api/getJifenList',
        cbFnc: callbackGetJifenMIngxi
    }
 ]