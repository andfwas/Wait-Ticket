const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const port = process.env.PORT || 3000
const app = express()

const index = require('./routes/index')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index)

app.listen(port, () =>{
  console.log("listening on... http://localhost:"+port)
})

module.exports = app;
