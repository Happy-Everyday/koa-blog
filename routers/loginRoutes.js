const { signUp, loginIn } = require('../services/loginService')

 const callbackLoginin = async ctx => {
    let result = await loginIn(ctx)
    let res
    if (result._id != undefined) {
        res = {
            code: '000000',
            msg: '操作成功',
            data: result
        }
    } else {
        res = result 
    }
    ctx.body = res
 }

 const callbackSignUp = async ctx => {
    // let result = await signUp(ctx)
    // let res
    // if (result._id != undefined) {
    //     res = {
    //         code: '000000',
    //         msg: '操作成功',
    //         data: result
    //     }
    // } else {
    //     res = result
    // }
    // ctx.body = res
    ctx.body = {
        msg: '暂未开放注册功能'
    }
 }
 
 module.exports = [
    {
         method: 'POST',
         path: '/api/loginin',
         cbFnc: callbackLoginin
    },
    {
         method: 'POST',
         path: '/api/signup',
         cbFnc: callbackSignUp
    }
 ]