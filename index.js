const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const app = express()
const config = require('./config/config')
const BasketController = require('./controllers/BasketController')

const port = process.env.PORT || config.PORT

// Middleware and logging set-up
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({'extended':'true'}))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(methodOverride())

// Listen on port
app.listen(port, err => {
  if(err) throw err
  console.log(`App listening on port ${config.PORT}`)
})

app.get('/api/v1/basket', BasketController.getItems)
app.get('/api/v1/basket/total', BasketController.getTotalPrice)
app.patch('/api/v1/basket', BasketController.scan)

module.exports = app
