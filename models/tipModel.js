// tip 标签 model

const mongoose = require('mongoose')

const tipSchema = require('../schemas/tipSchema')

const Tip = mongoose.model('Tip', tipSchema)

module.exports = Tip