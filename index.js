const express = require('express')
const keys = require('./config/keys')
const mongoose = require('mongoose')

mongoose.connect(keys.mLabURI, { useNewUrlParser: true })
require('./models/User') // must be called before passport require (to load schema)

const app = express()
require('./services/passport')
require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)
