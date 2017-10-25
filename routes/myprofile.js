var express = require('express');
var router = express.Router();

// const knex = require('../db/connection')
const db = require('../db/query')

router.get('/', (req, res, next)=>{
      res.render('myprofile',{
        title: "waitticket",
        // testData: testData
      })
    })

module.exports = router;
