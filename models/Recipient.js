const mongoose = require('mongoose')
const { Schema } = mongoose

const recipientSchema = newSchema({
	email: String,
	responded: { type: Boolean, default: false }
})

module.exports = recipientSchema
