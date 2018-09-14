// session 文章 schema


const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userAccount: String,
    userPassword: String,
    userCreatedTime: {
        type: Date,
        default: new Date()
    },
    sessionContent: String,
    sessionCreatedTime: {
        type: Date,
        default: new Date()
    },
    sessionUpdateTime: {
        type: Date,
        default: new Date()
    },
    sessionEndTime: {
        type: Date,
        default: new Date()
    }
})

module.exports = userSchema