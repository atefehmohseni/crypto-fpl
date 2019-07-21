const express = require('express')
const router = express.Router()
const footballersRoute = require('./footballers')
const gameweeksRoute = require('./gameweeks')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('this is my api')
})

router.use('/footballers', footballersRoute)
router.use('/gameweeks', gameweeksRoute)

module.exports = router