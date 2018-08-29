// tip 标签 schema

const mongoose = require('mongoose')

const tipSchema = new mongoose.Schema({
    key: String,
    value: String,
    flag: String
})

module.exports = tipSchema