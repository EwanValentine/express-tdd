const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const app = express()
const config = require('./config/config')

mongoose.Promise = global.Promise

// Datastore set-up
mongoose.connect(config.DB_HOST)

// On connection
mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection open to ' + config.db)
})

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
