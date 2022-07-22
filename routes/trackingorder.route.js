var express = require('express')
var router = express.Router()
var controller = require('../controllers/trackingorder.controller')

router.get('/', controller.index)
router.get('/search', controller.search)


module.exports = router