var express = require('express')
var router = express.Router()
var controller = require('../controllers/product.controller')

router.get('/', controller.index)

router.get('/apple', controller.getProductsApple)
router.get('/samsung', controller.getProductsSamsung)
router.get('/oppo', controller.getProductsOppo)
router.get('/realme', controller.getProductsRealme)
router.get('/vsmart', controller.getProductsVsmart)
router.get('/search', controller.search)

router.get('/accessories', controller.getAllAccessories)
router.get('/case', controller.getCaseAccessories)
router.get('/charger-cable', controller.getChargerCableAccessories)
router.get('/battery', controller.getBatteryAccessories)

router.get('/sort-by-price-up', controller.sortPriceUp)
router.get('/sort-by-price-down', controller.sortPriceDown)

router.get('/price-less-than-5000000', controller.priceLessThan5000000)
router.get('/price-5000000-to-10000000', controller.priceFrom5000000to10000000)
router.get('/price-10000000-to-20000000', controller.priceFrom10000000to20000000)
router.get('/price-more-than-20000000', controller.priceMoreThan20000000)


router.get('/:id', controller.getId)

module.exports = router