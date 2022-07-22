var express = require('express')
var router = express.Router()
var controller = require('../controllers/cart.controller')

router.get('/', controller.showCart)

router.get('/add/:id', controller.addToCart)
router.get('/delete/:id', controller.deleteCart)

router.get('/add/1/:id', controller.add1)
router.get('/delete/1/:id', controller.delete1)






module.exports = router