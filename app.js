const path = require('path')
const Koa = require('koa')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors')
const db = require('./db')

const { port, dbUrl, corsConfig } = require('./config')

const controller = require('./middleware/controllers')

const app = new Koa()

// db.connect(dbUrl, {useNewUrlParser: true})
app.use(logger())

app.use(bodyParser())
app.use(cors(corsConfig))
app.use(controller())
app.use(router.routes())

app.listen(port)
console.log(`.......................`)
console.log(`app listen at ${port}`)
console.log(``)
