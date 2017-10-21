const express = require('express')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000
const app = express()

app.listen(port, data =>{
  console.log("listening on... http://localhost:"+port)
})

module.exports = app;
