const db = require('./connection')

getAllTickets = () => {
  return db.select('*').from('tickets')
}

getAllUsers = () => {
  return db.select('*').from('users')
}

getUserByUserName = (username) => {
  return db('users').first().where('username', username)
}

getTicketsByUserName = username => {
  return db('tickets').where('username', username)
}

getTicketsByType = (type, location) => {
  return db('tickets').where(function() {this.where('type', type)
  }).orWhere({location:location})
}

addTicket = (data, userId) => {
  return db('tickets').insert(data)
}

createAccount = (data) => {
  return db('users').insert(data)
}

loginAccount = (username,password) => {
  return db('users').select().where(
    {
      'username': username,
      'password': password
    }
  )
}

generateToken = () =>{
  var code = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 30; i++){
    code += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return code;
}

updateToken = (username, token) => {
  return db('users').select().update('token',token).where('username',username)
}

releaseToken = (token) => {
  return db('users').select().update('token','').where('token',token)
}

getUserByUserToken = (token) => {
  return db('users').first().where('token', token)
}

getTicketToken = (token) => {
  // var query = window.location.search.substring(1);
  // console.log(query)
}

clearToken = () =>{
  return db('users').select().update('token','')
}

module.exports = {
  getAllTickets,
  getAllUsers,
  getUserByUserName,
  getTicketsByUserName,
  getTicketsByType,
  addTicket,
  createAccount,
  loginAccount,
  updateToken,
  generateToken,
  getUserByUserToken,
  releaseToken,
  getTicketToken,
  clearToken
}
