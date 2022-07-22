const express = require('express')
var cookieParser = require('cookie-parser')
var config = require('./dbconfig')
const port = 3000
var db = require('./db')

const productRoute = require('./routes/product.route')
const cartRoute = require('./routes/cart.route')
const adminRoute = require('./routes/admin.route')
const checkoutRoute = require('./routes/checkout.route')
const thankyouRoute = require('./routes/thankyou.route')
const trackingorderRoute = require('./routes/trackingorder.route')
const newsRoute = require('./routes/news.route')


const sessionMiddleware = require('./middlewares/session.middleware')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser('MY SECRET'))
app.use(sessionMiddleware)


app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.static('public'))

app.get('/', function(req, res){
    var sessionId = req.signedCookies.sessionId
    if(!sessionId){
        res.redirect('/')
        return
    }

    countCart = db.get('sessions').find({ id: sessionId }).get('countCart').value()
    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        var a = 'ip12'
        var b = 'ssg'
        request.query(("select * from products where type ='phone'"), function (err, recordset) {
            if (err) console.log(err)
            var newProducts1 = recordset.recordset.filter(function(product){
                return product.productId.toLowerCase().indexOf(a.toLowerCase()) !== -1
            })
            var newProducts2 = recordset.recordset.filter(function(product){
                return product.productId.toLowerCase().indexOf(b.toLowerCase()) !== -1
            })
            res.render('home', {
                newProducts1: newProducts1,
                newProducts2: newProducts2
            })
        })
    })
})


app.use('/products', productRoute)
app.use('/cart', cartRoute)
app.use('/admin', adminRoute)
app.use('/checkout', checkoutRoute)
app.use('/thankyou', thankyouRoute)
app.use('/tracking-order', trackingorderRoute)
app.use('/news', newsRoute)




app.listen(port, function(){
        console.log('Server is listening on port ' + port)
})
