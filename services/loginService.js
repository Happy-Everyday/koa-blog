const User = require('../models/userModel')

const loginIn = async ctx => {
    let account = ctx.request.body.account
    let password = ctx.request.body.password
    if (account == '' || account == undefined || password == '' || password == undefined ) {
        return {
            code: '000003',
            msg: '帐号密码不能为空',
            data: 0
        }
    }
    return new Promise((resolve, reject) => {
        User.findOne({userAccount: account}, (err, user) => {
            if (err) {
                reject(err)
                return
            }
            if (!user) {
                resolve({
                    code: '000003',
                    msg: '用户不存在!',
                    data: 0
                })
            } else {
                if (password !== user.userPassword) {
                    resolve({
                        code: '000003',
                        msg: '密码错误!',
                        data: 0
                    })
                } else {
                    let sessionContent = user.userAccount + "|" + new Date().getTime()
                    let sessionUpdateTime = new Date()
                    let sessionEndTime = new Date(sessionUpdateTime.getTime() + 3*60*60*1000)
                    User.updateOne({ userAccount: account },{ 
                        sessionContent: sessionContent,
                        sessionUpdateTime: sessionUpdateTime,
                        sessionEndTime: sessionEndTime
                    }, (err, result) => {
                        if (err) {
                            reject(err)
                        } else {
                            if (result.ok === 1) {
                                resolve({
                                    _id: user._id,
                                    sessionContent: sessionContent,
                                    sessionUpdateTime: sessionUpdateTime,
                                    sessionEndTime: sessionEndTime
                                })
                            }
                        }
                    })
                }
            }
        })
    })
}

const signUp = async ctx => {
    let account = ctx.request.body.account
    let password = ctx.request.body.password
    if (account == '' || account == undefined || password == '' || password == undefined ) {
        return {
            code: '000003',
            msg: '帐号密码不能为空',
            data: 0
        }
    }
    let newUser = new User({
        userAccount: account,
        userPassword: password,
    })
    return new Promise((resolve, reject) => {
        newUser.save((err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

const checkAccessToken = async ctx => {
    let accessToken = ctx.request.headers['access-token']
    console.log(accessToken)
    return new Promise((resolve, reject) => {
        User.findOne({sessionContent: accessToken}, (err, user) => {
            if (err) {
                reject(err)
            } else {
                if (!user) {
                    resolve({
                        code: '666666',
                        msg: 'session失效，请重新登录！',
                        data: 0
                    })
                } else {
                    let sessionEndTime = new Date(user.sessionEndTime).getTime()
                    let nowTime = new Date().getTime()
                    if (sessionEndTime < nowTime) {
                        resolve({
                            code: '666666',
                            msg: 'session失效，请重新登录！',
                            data: 0
                        }) 
                    } else {
                        let newsSessionEndTime = new Date(user.sessionEndTime.getTime() + 3*60*60*1000)
                        User.updateOne({sessionContent: accessToken},{ 
                            sessionEndTime: newsSessionEndTime
                        }, (err, result) => {
                            if (err) {
                                reject(err)
                            } else {
                                if (result.ok === 1) {
                                    resolve(true) 
                                }
                            }
                        }) 
                    }
                }
            }

        })
    })
}

module.exports = {
    loginIn: loginIn,
    signUp: signUp,
    checkAccessToken: checkAccessToken
}