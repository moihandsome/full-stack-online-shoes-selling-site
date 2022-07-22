var express = require('express')
var router = express.Router()
var controller = require('../controllers/admin.controller')
var authMiddleware = require('../middlewares/auth.middleware')
const multer = require('multer')
var uploadNews = multer({dest: './public/images/news/' })
var uploadProducts = multer({dest: './public/images/' })


router.get('/login', controller.login)
router.post('/login', controller.postLogIn)
router.get('/logout', controller.logOut)

router.get('/', authMiddleware.requireAuth, authMiddleware.authRole(['admin', 'product', 'order', 'news']), controller.home)
router.post('/add-new-noti', authMiddleware.authRole(['admin']), controller.addNewNoti)
router.post('/modify-noti/:id', authMiddleware.authRole(['admin']), controller.postModifyNoti)
router.get('/delete-noti/:id', authMiddleware.authRole(['admin']), controller.deleteNoti)

router.get('/phones', authMiddleware.authRole(['admin', 'product']), controller.homePhones)
router.get('/phones/search', controller.searchPhones)
router.post('/phones/add-new',uploadProducts.single('image'), controller.addNewPhones)
router.post('/phones/modify-name/:id', controller.postModifyNamePhones)
router.post('/phones/modify-info/:id', controller.postModifyInfoPhones)
router.post('/phones/modify-price/:id', controller.postModifyPricePhones)
router.post('/phones/modify-quantity/:id', controller.postModifyQuantityPhones)
router.get('/phones/delete/:id', controller.deleteProductPhones)

router.get('/accessories', authMiddleware.authRole(['admin', 'product']), controller.homeAccessories)
router.get('/accessories/search', controller.searchAccessories)
router.post('/accessories/add-new', uploadProducts.single('image'), controller.addNewAccessories)
router.post('/accessories/modify-name/:id', controller.postModifyNameAccessories)
router.post('/accessories/modify-price/:id', controller.postModifyPriceAccessories)
router.post('/accessories/modify-quantity/:id', controller.postModifyQuantityAccessories)
router.get('/accessories/delete/:id', controller.deleteProductAccessories)

router.get('/news', authMiddleware.authRole(['admin', 'news']), controller.news)
router.post('/news/add-new-news', uploadNews.single('image'), controller.addNewNews)
router.get('/news/delete-news/:id', controller.deleteNews)

router.get('/orders', authMiddleware.authRole(['admin', 'order']), controller.showOrder)
router.get('/orders/search', controller.searchOrder)
router.get('/orders/delete-order/:id', controller.deleteOrder)
router.post('/orders/modify-status/:id', controller.postModifyOrder)
router.get('/orders/sort-by-date-desc', controller.sortOrderDetailDesc)
router.get('/orders/sort-by-date-asc', controller.sortOrderDetailAsc)

router.get('/users', authMiddleware.authRole(['admin']), controller.homeUser)
router.post('/users/add-new-user', authMiddleware.authRole(['admin']), controller.addNewUser)
router.get('/users/delete-user/:id', authMiddleware.authRole(['admin']), controller.deleteUser)
router.post('/users/modify-user/:id', authMiddleware.authRole(['admin']), controller.modifyUser)





module.exports = router