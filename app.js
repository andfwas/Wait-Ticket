const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const port = process.env.PORT || 3000
const app = express()
const db = require('./db/query')
const index = require('./routes/index')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index)

// App Get Results
app.get('/api/tickets', (req,res) => {
  db.getAllTickets()
  .then(tickets => res.json(tickets))
})

app.get('/api/users', (req,res) => {
  db.getAllUsers()
  .then(users => res.json(users))
})

app.get('/api/users/:username', (req,res)=> {
  const username = req.params.username
  db.getUserByUserName(username)
  .then(users => res.json(users))
})

app.get('/api/tickets/username/:username', (req, res) => {
  const username = req.params.username
  db.getTicketsByUserName(username)
  .then(tickets => res.json(tickets))
})

app.get('/api/tickets/type/:type', (req, res) => {
  const type = req.params.type
  console.log(type)
  db.getTicketsByType(type)
  .then(tickets => res.json(tickets))
})

app.post('/api/tickets', (req,res) =>{
  db.addTicket(req.body)
  .then(data => {
    res.json(data)
  })
})

app.post('/api/users', (req,res) =>{
  db.createAccount(req.body)
  .then(data => {
    res.json(data)
    // var username = req.body.username
    // console.log("username", username)
    // console.log(req.body)
    // let search = document.getElementById('seachResult1')
    // let p = document.createElement('p')
    // p.innerText = req.body.username
    // search.append(p)
  })
})

app.post('/api/users/login', (req,res) =>{
  db.loginAccount(req.body.username,req.body.password)
  .then(user => {
    if(user.length==0){
      res.sendStatus(401);
    } else{
      res.json(user)
    }
  }).catch(err=>{
    res.status(500).send(err)
  })
})

//App Listen
app.listen(port, () =>{
  console.log("listening on... http://localhost:"+port)
})

module.exports = app;
