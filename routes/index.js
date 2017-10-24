var express = require('express');
var router = express.Router();

// const knex = require('../db/connection')
// const queries = require('../db/query')

router.get('/', (req, res, next)=>{
      res.render('index',{
        title: "waitticket",
        // testData: testData
      })
    })

module.exports = router;
