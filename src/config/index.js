const express = require('express')
const router = require('../routes')
const errorResponseMiddleware = require('../middlewares/errorResponseHandler')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.static('public', {}))

app.use('/api', router)

app.use(errorResponseMiddleware)


app.get('/', (_req, res) => {
  res.sendFile('index.html')
})


module.exports = app