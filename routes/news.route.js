var express = require('express')
var router = express.Router()
var controller = require('../controllers/news.controller')

router.get('/', controller.index)
router.get('/:id', controller.getId)

module.exports = router