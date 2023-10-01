const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
  res.send('Welcome,it works')
})

app.get('/', (req, res) => {
  res.send('API is live!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
