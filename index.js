//THIS FILE IS JUST TOP LEVEL
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./config/routes')
const app = express()

app.use(express.static(`${__dirname}/dist`))

mongoose.connect(`mongodb://${process.env.PORT}/books`)

app.use(bodyParser.json())
app.use(routes)

app.listen(process.env.PORT, () => console.log(`Express is running on port ${process.env.PORT}`))
