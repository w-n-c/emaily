const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')

const keys = require('./config/keys')
mongoose.connect(keys.mLabURI, { useNewUrlParser: true })
require('./models/User')

const app = express()
require('./services/passport')

app.use(
	session({
		secret: [keys.cookieSecret],
		maxAge: 14 * 24 * 60 * 60 * 1000,
		resave: false,
		saveUninitialized: false
	})
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)
const PORT = process.env.PORT || 5000
app.listen(PORT)
