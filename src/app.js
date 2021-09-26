require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const app = express()

const middlewares = require('./middlewares')
const routes = require('./routes')

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

// mount middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(helmet())

// mount routes
app.use('/api', routes)
app.use(middlewares.handleErrors)
app.use(middlewares.notFound)

module.exports = app
