const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const ticket = require('./src/router/ticket.router')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/ticket', ticket)

app.listen(port, () => {
  console.log(`Ticket service listening at http://localhost:${port}`)
})