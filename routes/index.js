var express = require('express');
var router = express.Router();

// const knex = require('../db/connection')
 const db = require('../db/query')

    router.get('/', (req, res, next) => {
      db.getAllTickets()
      .then((tickets) => {
        //console.log(tickets)
        res.render('index', {
          tickets: tickets
        })
      })
    })

module.exports = router;
