var express = require('express');
var router = express.Router();

// const knex = require('../db/connection')
const db = require('../db/query')

router.get('/myprofile', (req, res, next) => {
  db.getUserByUserId(user_id)
  .then((tickets) => {
    res.render('myprofile',{
      tickets:tickets
     })
  })
})

module.exports = router;
