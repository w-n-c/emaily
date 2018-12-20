const mongoose = require('mongoose')
const express = require('express')
const session = require('express-session')
const passport = require('passport')

// initialize database and authentication
const keys = require('./config/keys')
mongoose.connect(keys.mLabURI, { useNewUrlParser: true })
require('./models/User')
require('./services/passport')

// initialize express with sessions
const app = express()
app.use(express.json())
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

// initialize routes and configure server
require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)
const PORT = process.env.PORT || 5000
app.listen(PORT)
