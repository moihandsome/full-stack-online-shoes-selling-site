var config = require('../dbconfig')
var validator = require('validator')

module.exports.index = function(req, res){
    var sessionId = req.signedCookies.sessionId
    if(!sessionId){
        res.redirect('/products')
        return
    }
    res.render('trackingorder/home')
}

module.exports.search = function(req, res){
    var sessionId = req.signedCookies.sessionId
    if(!sessionId){
        res.redirect('/products')
        return
    }
    var q = req.query.q
    if(!validator.isAlphanumeric(validator.blacklist(q, ' '))){
        return res
        .render('trackingorder/home', {
            errors: ['Sai mã đơn hàng!']
        })
    }
    var sql = require('mssql')
    orderInfos = []
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query('select * from orders', function (err, recordset) {
            if (err) console.log(err)
            orderInfos = recordset.recordset.filter(function(order){
                return order.orderId.toLowerCase() === q.toLowerCase()         
            })
            if(orderInfos.length === 0){
                return res
                .render('trackingorder/home', {
                    errors: ['Không tìm thấy đơn hàng!']
                })
            }
        })
    })
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query('select * from orderDetails', function (err, recordset) {
            if (err) console.log(err)
            orderDetails = recordset.recordset 
            res.render('trackingorder/search',{
                orderInfos,
                orderDetails: orderDetails
            })          
        })
    })
}