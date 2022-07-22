var config = require('../dbconfig')
var db = require('../db')
var validator = require('validator')

module.exports.checkout = function(req, res, next){
    var sessionId = req.signedCookies.sessionId
    if(!sessionId){
        res.redirect('/products')
        return
    }
 
    matchedProducts = []
    totalPrice = 0

    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query('select * from products', function (err, recordset) {
            if (err) console.log(err)

            productId = Object.keys(db.get("sessions").find({ id: sessionId }).get("cart").value())
            productQty = Object.values(db.get("sessions").find({ id: sessionId }).get("cart").value())

            for (let i = 0; i < productId.length; i++) {
                recordset.recordset.filter(function(product){
                    if(product.productId === productId[i]){
                    matchedProducts.push(product)
                    } 
                })
            }

            for (let i = 0; i < productQty.length; i++) {
                recordset.recordset.filter(function(product){
                    if(product.productId === productId[i]){
                    product.quantity = this.productQty[i]
                    } 
                })
            }

            matchedProducts.filter(function(product){
                totalPrice += product.price * product.quantity
            })
            tax = totalPrice * 0.1
            shippingfee = 25000
            totalAll = totalPrice + tax + shippingfee
            res.render('checkout/home', {
                products: matchedProducts,
                totalPrice,
                tax,
                shippingfee,
                totalAll
            })
        })
    })
}

module.exports.postCheckout = function(req, res, next){
    var sessionId = req.signedCookies.sessionId
    if(!sessionId){
        res.redirect('/products')
        return
    }
    
    var fullname = req.body.fullname
    if(!validator.isAlpha(validator.blacklist(fullname, ' '), ['vi-VN'])){
        return res
        .render('checkout/home', {
            errors: ['Sai họ tên!'],
            values: req.body,
            products: matchedProducts,
            totalPrice
        })
    }
    var phone = req.body.phone
    if(!validator.isMobilePhone(phone, ['vi-VN'])){
        return res
        .render('checkout/home', {
            errors: ['Sai số điện thoại! (Số điện thoại gồm 10 số)'],
            values: req.body,
            products: matchedProducts,
            totalPrice
        })
    }
    var address = req.body.address
    if(!validator.isAlphanumeric(validator.blacklist(address, ' '), ['vi-VN'])){
        return res
        .render('checkout/home', {
            errors: ['Sai địa chỉ!'],
            values: req.body,
            products: matchedProducts,
            totalPrice
        })
    }
    var country = req.body.country
    var state = req.body.state
    var zipcode = req.body.zipcode
    if(!validator.isInt(zipcode, {gt: 9999, lt: 100000})){
        return res
        .render('checkout/home', {
            errors: ['Sai mã bưu chính! (Mã bưu chính từ năm 2021 trở đi chỉ gồm 5 số)'],
            values: req.body,
            products: matchedProducts,
            totalPrice
        })
    }
    var paymentMethod = req.body.paymentMethod
    
    var date_ob = new Date()
    let date = ("0" + date_ob.getDate()).slice(-2)
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2)
    let year = date_ob.getFullYear()
    let hours = date_ob.getHours()
    let minutes = date_ob.getMinutes()
    let seconds = date_ob.getSeconds()
    orderId = year+month+date+hours+minutes+seconds
    let timeOrder = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds


    //ghi vao bang orders
    var sql = require('mssql')
    var dbConn = new sql.connect(config, function(err) {  
            var myTransaction = new sql.Transaction(dbConn) 
            myTransaction.begin(function(error) {  
                var rollBack = false 
                myTransaction.on('rollback', function(aborted) {  
                        rollBack = true  
                }) 
                new sql.Request(myTransaction).query("INSERT INTO [dbo].[orders] ([orderId],[fullname],[phone],[address],[country],[state],[zipcode],[paymentMethod],[totalPrice],[status],[timeOrder]) VALUES ('" + orderId + "',N'" + fullname + "', '" + phone + "',N'" + address + "',N'" + country + "',N'" + state + "','" + zipcode + "', '" + paymentMethod + "','" + this.totalPrice + "', 'Pending', '" + timeOrder + "')",  
                    function(err, recordset) {  
                        if (err) {  
                            if (!rollBack) {  
                                myTransaction.rollback(function(err) {  
                                    console.dir(err)
                                });  
                            }  
                        } else {  
                            myTransaction.commit().then(function(recordset) {  
                                console.dir('Data is inserted successfully!')
                            }).catch(function(err) {  
                                console.dir('Error in transaction commit ' + err)
                            });  
                        }
                    })
            })
            return 
        })
    //ghi vao bang orderdetails
    matchedProducts.filter(function(product){
        var dbConn2 = new sql.connect(config, function(err) {  
            var myTransaction = new sql.Transaction(dbConn2) 
            myTransaction.begin(function(error) {  
                var rollBack = false 
                myTransaction.on('rollback',  function(aborted) {  
                        rollBack = true  
                    })
                new sql.Request(myTransaction).query("INSERT INTO [dbo].[orderDetails] ([orderId],[productId],[name],[price],[quantity]) VALUES ('" + orderId + "','" + product.productId + "','" + product.name + "','" + product.price + "','" + product.quantity + "')",  
                        function(err, recordset) {  
                            if (err) {  
                                if (!rollBack) {  
                                    myTransaction.rollback(function(err) {  
                                        console.dir(err)
                                    });  
                                }  
                            } else {  
                                myTransaction.commit().then(function(recordset) {  
                                    console.dir('Data is inserted successfully!')
                                }).catch(function(err) {  
                                    console.dir('Error in transaction commit ' + err)
                                });  
                            }  
                        })
            })
            return
        })
    })
    //update lai so luong
    matchedProducts.filter(function(product){
        var sql = require('mssql')
        sql.connect(config, function (err) {
            if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
            var request = new sql.Request();
            request.query(("select * from products where productId = " + '\'' + product.productId + '\''), function (err, recordset) {
                if (err) {
                    console.log(err)
                }else console.dir('Data is selected successfully!')

                recordset.recordset.filter(function(pro){
                    if(pro.productId === product.productId){
                        pro.quantity = pro.quantity - product.quantity
                    }
                })
                recordset.recordset.filter(function(p){
                    var sql = require('mssql')
                    sql.connect(config, function (err) {
                        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
                        var request = new sql.Request();
                        request.query(("update products set [quantity] = ' " + p.quantity + " ' where productId = " + '\'' + p.productId + '\''), function (err, recordset) {
                            if (err) {
                                console.log(err)
                            }else console.dir('Data is updated successfully!')
                        })
                        return
                    })
                })
            })
            return
        })
    })


    countCart = 0
    db.get('sessions').remove({ id: sessionId }).write()
    res.clearCookie('sessionId')
    res.redirect('/thankyou')
    
}