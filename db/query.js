const db = require('./connection')

function getAllEvents(){
  return db.select('*').from('events')
}

module.exports = {
  getAllEvents
}
