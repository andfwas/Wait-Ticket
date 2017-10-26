const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cookieParser = require('cookie-parser')

const port = process.env.PORT || 3000
const app = express()
const db = require('./db/query')
const index = require('./routes/index')
const myprofile = require('./routes/myprofile')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index)
app.use('/myprofile', myprofile)

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

app.get('/api/tickets/type/:type,:location', (req, res) => {
  const type = req.params.type
  const location = req.params.location
  //console.log(type)
  //console.log(location)
  db.getTicketsByType(type,location)
  .then(tickets => res.json(tickets))
})

//App Post
app.post('/api/tickets', (req,res) =>{
  var cookieToken = req.cookies['token']
  db.getUserByUserToken(cookieToken)
  .then(userInfo => {
    var ticketUserId = userInfo.id
    // console.log(userInfo.id)
    db.addTicket(req.body, ticketUserId)
    .then(data => {
      // console.log(req.cookies['token'])
      res.redirect('/myprofile')
    })
  })
})

app.post('/api/users', (req,res) =>{
  db.createAccount(req.body)
  .then(user => {
    var token = generateToken()
    db.updateToken(req.body.username,token)
    .then(data =>{
      res.clearCookie('token')
      res.cookie('token', token);
      res.cookie('token', token, {maxAge: 3600000});
      res.redirect('/')
    })
  })
})

app.post('/api/users/login', (req,res) =>{
  db.loginAccount(req.body.username,req.body.password)
    .then(user => {
      if(user.length == 0){
        res.sendStatus(401);
      } else{
        var token = generateToken()
        db.updateToken(req.body.username,token)
        .then(data =>{
          res.clearCookie('token')
          res.cookie('token', token);
          res.cookie('token', token, {maxAge: 3600000});
          res.redirect('/')
        })
      }
  })
})

//App Listen
app.listen(port, () =>{
  console.log("listening on... http://localhost:"+port)
})

module.exports = app;
