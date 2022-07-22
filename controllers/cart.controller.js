var config = require('../dbconfig')
var db = require('../db')
const { compile } = require('pug')

module.exports.addToCart = function(req, res){
  var id = req.params.id
  var sessionId = req.signedCookies.sessionId
  if(!sessionId){
    res.redirect('/')
    return
  }
  
  var count = db.get('sessions').find({ id: sessionId }).get('cart.' + id, 0).value()
  db.get('sessions').find({ id: sessionId }).set('cart.' + id, count + 1).write()
  
  ///newwwww
  var count1 = db.get('sessions').find({ id: sessionId }).get('countCart').value()
  db.get('sessions').find({ id: sessionId }).set('countCart', count1 + 1).write()
  
  countCart= Object.values(db.get("sessions").find({ id: sessionId }).get("cart").value())
                              .reduce((partial_sum, a) => partial_sum + a,0)

  res.redirect('back')
}

module.exports.showCart = function(req, res){
  var sessionId = req.signedCookies.sessionId
  if(!sessionId){
    res.redirect('/')
    return
  }
  
  var sql = require('mssql')
  sql.connect(config, function (err) {
    if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
    var request = new sql.Request();
    request.query('select * from products', function (err, recordset) {
      if (err) console.log(err)

      var matchedProducts = []
      var totalPrice = 0
      var a = db.get('sessions').find({ id: sessionId }).get('countCart').value()
      if(a===0){
        res.render('cart/emptycart')
        return
      }else{
        cartId = Object.keys(db.get("sessions").find({ id: sessionId }).get("cart").value())
        cartQty = Object.values(db.get("sessions").find({ id: sessionId }).get("cart").value())
      }
      

      for (let i = 0; i < cartId.length; i++) {
        recordset.recordset.filter(function(product){
          if(product.productId === cartId[i]){
            matchedProducts.push(product)
          } 
        })
      }

      for (let i = 0; i < cartQty.length; i++) {
        recordset.recordset.filter(function(product){
          if(product.productId === cartId[i]){
            product.quantity = this.cartQty[i]
          }
        })
      }

      matchedProducts.filter(function(product){
        totalPrice += product.price * product.quantity
      })

      res.render('cart/home', {
        products: matchedProducts,
        totalPrice
      })
    })
  })  
  
}

module.exports.deleteCart = function(req, res){

  var id = req.params.id
  var sessionId = req.signedCookies.sessionId
  if(!sessionId){
    res.redirect('/')
    return
  }

  a = db.get('sessions')
        .find({ id: sessionId })
        .get('cart')
        .value()
  delete a[id]
  db.get('sessions')
    .find({ id: sessionId })
    .set('cart', a)
    .value()

  ////newwwww
  countCart= Object.values(db.get("sessions").find({ id: sessionId }).get("cart").value())
                            .reduce((partial_sum, a) => partial_sum + a,0)

  db.get('sessions').find({ id: sessionId }).set('countCart', countCart).write()

  res.redirect('/cart')
}

module.exports.add1 = function(req, res){

  var id = req.params.id
  var sessionId = req.signedCookies.sessionId
  if(!sessionId){
    res.redirect('/')
    return
  }

  var count = db.get('sessions')
          .find({ id: sessionId })
          .get('cart.' + id, 0)
          .value()
  db.get('sessions')
    .find({ id: sessionId })
    .set('cart.' + id, count + 1)
    .write()
  
  ////newwwww
  var count1 = db.get('sessions').find({ id: sessionId }).get('countCart').value()
  db.get('sessions').find({ id: sessionId }).set('countCart', count1 + 1).write()
  a = db.get('sessions').find({ id: sessionId }).get('cart').value()

  countCart= Object.values(db.get("sessions").find({ id: sessionId }).get("cart").value())
                              .reduce((partial_sum, a) => partial_sum + a,0)

  res.redirect('/cart')
}

module.exports.delete1 = function(req, res){

  var id = req.params.id
  var sessionId = req.signedCookies.sessionId
  if(!sessionId){
    res.redirect('/')
    return
  }

  var count = db.get('sessions')
          .find({ id: sessionId })
          .get('cart.' + id, 0)
          .value()
  db.get('sessions')
    .find({ id: sessionId })
    .set('cart.' + id, count + (-1))
    .write()
  if(count===1){
    a = db.get('sessions')
        .find({ id: sessionId })
        .get('cart')
        .value()
    delete a[id]
    db.get('sessions')
      .find({ id: sessionId })
      .set('cart', a)
      .value()
  }

  ////newwwww
  var count1 = db.get('sessions').find({ id: sessionId }).get('countCart').value()
  db.get('sessions').find({ id: sessionId }).set('countCart', count1 - 1).write()

  countCart= Object.values(db.get("sessions").find({ id: sessionId }).get("cart").value())
                              .reduce((partial_sum, a) => partial_sum + a,0)

  res.redirect('/cart')
}