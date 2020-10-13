const sendAMessage = require('./index').sendAMessage

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.EA_PORT || 8080

app.use(bodyParser.json())

app.post('/', (req, res) => {
  console.log('POST Data: ', req.body)
  sendAMessage(req.body, (status, result) => {
    console.log('Result: ', result)
    console.log('staus', status);
    res.status(status).json(result)
  })
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
