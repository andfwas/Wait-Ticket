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

getTicketsByType = type => {
  return db('tickets').where('type', type)
}

module.exports = {
  getAllTickets,
  getAllUsers,
  getUserByUserName,
  getTicketsByUserName,
  getTicketsByType
}
