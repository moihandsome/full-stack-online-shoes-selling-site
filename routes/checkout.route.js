var express = require('express')
var router = express.Router()
var controller = require('../controllers/checkout.controller')

router.get('/', controller.checkout)
router.post('/',controller.postCheckout)

module.exports = router