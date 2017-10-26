var express = require('express');
var router = express.Router();

// const knex = require('../db/connection')
const db = require('../db/query')

router.get('/', (req, res, next) => {
  db.getTicketsByUserId()
  .then((tickets) => {
    res.render('myprofile',{
      tickets:tickets
     })
  })
})

module.exports = router;
