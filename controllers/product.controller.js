var config = require('../dbconfig')
var db = require('../db')


module.exports.index = function(req, res, next){
    var sessionId = req.signedCookies.sessionId
    if(!sessionId){
        res.redirect('/')
        return
    }
    var page = parseInt(req.query.page) || 1
    var perPage = 9
    var start = (page - 1) * perPage
    var end = page * perPage
    var prevPage
    if(page === 2){
        prevPage = 1
    }else if(page > 1){
            prevPage = page - 1
    }
    var nextPage = page + 1
    var sql = require('mssql')
    productss = []
    var ifPage = 0
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("select * from products where type ='phone'"), function (err, recordset) {
            if (err) console.log(err)
            productss = recordset.recordset
            if(productss.length > 9){
                ifPage = 1
            }
            res.render('product/home', {
                products: productss.slice(start, end),
                prevPage, page, nextPage, ifPage
            })
        })
    })
    
}

module.exports.getId = function(req, res, next){
    var sessionId = req.signedCookies.sessionId
    if(!sessionId){
        res.redirect('/')
        return
    }
    var sql = require('mssql')
    var id = req.params.id
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("select * from products"), function (err, recordset) {
            if (err) console.log(err)
            var matchedProduct = recordset.recordset.filter(function(product){
                return product.productId === id
            })
            var filter1 = recordset.recordset.filter(function(product){
                    return product.brand === matchedProduct[0].brand
            })
            var recommendProducts = filter1.filter(function(product){
                return product.productId !== matchedProduct[0].productId
            })
            var filterAccessories = recordset.recordset.filter(function(product){
                return product.type_detail === matchedProduct[0].type_detail
            })
            var recommendAccessories = filterAccessories.filter(function(product){
                return product.productId !== matchedProduct[0].productId
            })
            if(matchedProduct[0].type==='phone'){
                res.render('product/detail', {
                    products: matchedProduct,
                    recommendProducts: recommendProducts
                })
            }
            if(matchedProduct[0].type==='accessory'){
                res.render('product/detailaccessory', {
                    products: matchedProduct,
                    recommendProducts: recommendAccessories
                })
            }
        })
            
    })
}

module.exports.search = function(req, res, next){
    var sessionId = req.signedCookies.sessionId
    if(!sessionId){
        res.redirect('/')
        return
    }
    var page = parseInt(req.query.page) || 1
    var perPage = 9
    var start = (page - 1) * perPage
    var end = page * perPage
    var prevPage
    if(page === 2){
        prevPage = 1
    }else if(page > 1){
            prevPage = page - 1
    }
    var nextPage = page + 1
    var ifPage = 0
    var q = req.query.q.replace(/\b(?:select from|select|from|where|union|drop)\b/ig, '').toLowerCase().split(/[*.:;?#@$%^!~,`"“”'&|()<>{}\=\+\-[\]\r\n/\\]+/).join('')
    var sql = require('mssql')
    productss = []
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("select * from products"), function (err, recordset) {
            if (err) console.log(err)
                productss = recordset.recordset.filter(function(product){
                    return product.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
            })
            if(productss.length > 9){
                ifPage = 1
            }
            if (productss.length !== 0){
                res.render('product/home', {
                    products: productss.slice(start, end),
                    prevPage, page, nextPage, ifPage
                })
            } else {
                res.render('product/notFound')
            }
            
        })
    })
}

module.exports.getProductsApple = function(req, res, next){
    var sessionId = req.signedCookies.sessionId
    if(!sessionId){
        res.redirect('/')
        return
    }
    var page = parseInt(req.query.page) || 1
    var perPage = 9
    var start = (page - 1) * perPage
    var end = page * perPage
    var prevPage
    if(page === 2){
        prevPage = 1
    }else if(page > 1){
            prevPage = page - 1
    }
    var nextPage = page + 1
    var sql = require('mssql')
    productss = []
    var ifPage = 0
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("select * from products where type ='phone'"), function (err, recordset) {
            if (err) console.log(err)
                productss = recordset.recordset.filter(function(product){
                    return product.brand.toLowerCase() === 'apple'
            })
            if(productss.length > 9){
                ifPage = 1
            }
            res.render('product/home', {
                products: productss.slice(start, end),
                prevPage, page, nextPage, ifPage
            })
        })
    })
}

module.exports.getProductsSamsung = function(req, res, next){
    var sessionId = req.signedCookies.sessionId
    if(!sessionId){
        res.redirect('/')
        return
    }
    var page = parseInt(req.query.page) || 1
    var perPage = 9
    var start = (page - 1) * perPage
    var end = page * perPage
    var prevPage
    if(page === 2){
        prevPage = 1
    }else if(page > 1){
            prevPage = page - 1
    }
    var nextPage = page + 1
    var sql = require('mssql')
    productss = []
    var ifPage = 0
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("select * from products where type ='phone'"), function (err, recordset) {
            if (err) console.log(err)
                productss = recordset.recordset.filter(function(product){
                    return product.brand.toLowerCase() === 'samsung'
            })
            if(productss.length > 9){
                ifPage = 1
            }
            res.render('product/home', {
                products: productss.slice(start, end),
                prevPage, page, nextPage, ifPage
            })
        })
    })
}

module.exports.getProductsOppo = function(req, res, next){
    var sessionId = req.signedCookies.sessionId
    if(!sessionId){
        res.redirect('/')
        return
    }
    var page = parseInt(req.query.page) || 1
    var perPage = 9
    var start = (page - 1) * perPage
    var end = page * perPage
    var prevPage
    if(page === 2){
        prevPage = 1
    }else if(page > 1){
            prevPage = page - 1
    }
    var nextPage = page + 1
    var sql = require('mssql')
    productss = []
    var ifPage = 0
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("select * from products where type ='phone'"), function (err, recordset) {
            if (err) console.log(err)
                productss = recordset.recordset.filter(function(product){
                    return product.brand.toLowerCase() === 'oppo'
            })
            if(productss.length > 9){
                ifPage = 1
            }
            res.render('product/home', {
                products: productss.slice(start, end),
                prevPage, page, nextPage, ifPage
            })
        })
    })
}

module.exports.getProductsRealme = function(req, res, next){
    var sessionId = req.signedCookies.sessionId
    if(!sessionId){
        res.redirect('/')
        return
    }
    var page = parseInt(req.query.page) || 1
    var perPage = 9
    var start = (page - 1) * perPage
    var end = page * perPage
    var prevPage
    if(page === 2){
        prevPage = 1
    }else if(page > 1){
            prevPage = page - 1
    }
    var nextPage = page + 1
    var sql = require('mssql')
    productss = []
    var ifPage = 0
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("select * from products where type ='phone'"), function (err, recordset) {
            if (err) console.log(err)
                productss = recordset.recordset.filter(function(product){
                    return product.brand.toLowerCase() === 'realme'
            })
            if(productss.length > 9){
                ifPage = 1
            }
            res.render('product/home', {
                products: productss.slice(start, end),
                prevPage, page, nextPage, ifPage
            })
        })
    })
}

module.exports.getProductsVsmart = function(req, res, next){
    var sessionId = req.signedCookies.sessionId
    if(!sessionId){
        res.redirect('/')
        return
    }
    var page = parseInt(req.query.page) || 1
    var perPage = 9
    var start = (page - 1) * perPage
    var end = page * perPage
    var prevPage
    if(page === 2){
        prevPage = 1
    }else if(page > 1){
            prevPage = page - 1
    }
    var nextPage = page + 1
    var sql = require('mssql')
    productss = []
    var ifPage = 0
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("select * from products where type ='phone'"), function (err, recordset) {
            if (err) console.log(err)
                productss = recordset.recordset.filter(function(product){
                    return product.brand.toLowerCase() === 'vsmart'
            })
            if(productss.length > 9){
                ifPage = 1
            }
            res.render('product/home', {
                products: productss.slice(start, end),
                prevPage, page, nextPage, ifPage
            })
        })
    })
}

module.exports.getAllAccessories = function(req, res, next){
    var sessionId = req.signedCookies.sessionId
    if(!sessionId){
        res.redirect('/')
        return
    }
    var page = parseInt(req.query.page) || 1
    var perPage = 9
    var start = (page - 1) * perPage
    var end = page * perPage
    var prevPage
    if(page === 2){
        prevPage = 1
    }else if(page > 1){
            prevPage = page - 1
    }
    var nextPage = page + 1
    var sql = require('mssql')
    productss = []
    var ifPage = 0
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("select * from products where type ='accessory'"), function (err, recordset) {
            if (err) console.log(err)
            productss = recordset.recordset
            if(productss.length > 9){
                ifPage = 1
            }
            res.render('product/home', {
                products: productss.slice(start, end),
                prevPage, page, nextPage, ifPage
            })
        })
    })
}

module.exports.getCaseAccessories = function(req, res, next){
    var sessionId = req.signedCookies.sessionId
    if(!sessionId){
        res.redirect('/')
        return
    }
    var page = parseInt(req.query.page) || 1
    var perPage = 9
    var start = (page - 1) * perPage
    var end = page * perPage
    var prevPage
    if(page === 2){
        prevPage = 1
    }else if(page > 1){
            prevPage = page - 1
    }
    var nextPage = page + 1
    var sql = require('mssql')
    productss = []
    var ifPage = 0
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("select * from products where type = 'accessory' and type_detail = 'case'"), function (err, recordset) {
            if (err) console.log(err)
            productss = recordset.recordset
            if(productss.length > 9){
                ifPage = 1
            }
            res.render('product/home', {
                products: productss.slice(start, end),
                prevPage, page, nextPage, ifPage
            })
        })
    })
}

module.exports.getChargerCableAccessories = function(req, res, next){
    var sessionId = req.signedCookies.sessionId
    if(!sessionId){
        res.redirect('/')
        return
    }
    var page = parseInt(req.query.page) || 1
    var perPage = 9
    var start = (page - 1) * perPage
    var end = page * perPage
    var prevPage
    if(page === 2){
        prevPage = 1
    }else if(page > 1){
            prevPage = page - 1
    }
    var nextPage = page + 1
    var sql = require('mssql')
    productss = []
    var ifPage = 0
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("select * from products where type ='accessory' and type_detail = 'charger_cable'"), function (err, recordset) {
            if (err) console.log(err)
            productss = recordset.recordset
            if(productss.length > 9){
                ifPage = 1
            }
            res.render('product/home', {
                products: productss.slice(start, end),
                prevPage, page, nextPage, ifPage
            })
        })
    })
}

module.exports.getBatteryAccessories = function(req, res, next){
    var sessionId = req.signedCookies.sessionId
    if(!sessionId){
        res.redirect('/')
        return
    }
    var page = parseInt(req.query.page) || 1
    var perPage = 9
    var start = (page - 1) * perPage
    var end = page * perPage
    var prevPage
    if(page === 2){
        prevPage = 1
    }else if(page > 1){
            prevPage = page - 1
    }
    var nextPage = page + 1
    var sql = require('mssql')
    productss = []
    var ifPage = 0
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("select * from products where type ='accessory' and type_detail = 'battery'"), function (err, recordset) {
            if (err) console.log(err)
            productss = recordset.recordset
            if(productss.length > 9){
                ifPage = 1
            }
            res.render('product/home', {
                products: productss.slice(start, end),
                prevPage, page, nextPage, ifPage
            })
        })
    })
}

module.exports.sortPriceUp = function(req, res, next){
    var sessionId = req.signedCookies.sessionId
    if(!sessionId){
        res.redirect('/products')
        return
    }
    var page = parseInt(req.query.page) || 1
    var perPage = 9
    var start = (page - 1) * perPage
    var end = page * perPage
    var prevPage
    if(page === 2){
        prevPage = 1
    }else if(page > 1){
            prevPage = page - 1
    }
    var nextPage = page + 1
    var ifPage = 0
    if(productss.length > 9){
        ifPage = 1
    }
    productss.sort((a, b) => Number(a.price) - Number(b.price))
    res.render('product/home', {
        products: productss.slice(start, end),
        prevPage, page, nextPage, ifPage
    })
}

module.exports.sortPriceDown = function(req, res, next){
    var sessionId = req.signedCookies.sessionId
    if(!sessionId){
        res.redirect('/products')
        return
    }
    var page = parseInt(req.query.page) || 1
    var perPage = 9
    var start = (page - 1) * perPage
    var end = page * perPage
    var prevPage
    if(page === 2){
        prevPage = 1
    }else if(page > 1){
            prevPage = page - 1
    }
    var nextPage = page + 1
    var ifPage = 0
    if(productss.length > 9){
        ifPage = 1
    }
    productss.sort((a, b) => Number(b.price) - Number(a.price))
    res.render('product/home', {
        products: productss.slice(start, end),
        prevPage, page, nextPage, ifPage
    })
}

module.exports.priceLessThan5000000 = function(req, res, next){
    var sessionId = req.signedCookies.sessionId
    if(!sessionId){
        res.redirect('/products')
        return
    }
    var page = parseInt(req.query.page) || 1
    var perPage = 9
    var start = (page - 1) * perPage
    var end = page * perPage
    var prevPage
    if(page === 2){
        prevPage = 1
    }else if(page > 1){
            prevPage = page - 1
    }
    var nextPage = page + 1
    var ifPage = 0
    var matchedProducts = productss.filter(function(product){
        if(product.price < 5000000){
            return product
        }
    })
    if(matchedProducts.length > 9){
        ifPage = 1
    }
    res.render('product/home', {
        products: matchedProducts.slice(start, end),
        prevPage, page, nextPage, ifPage
    })

}

module.exports.priceFrom5000000to10000000 = function(req, res, next){
    var sessionId = req.signedCookies.sessionId
    if(!sessionId){
        res.redirect('/products')
        return
    }
    var page = parseInt(req.query.page) || 1
    var perPage = 9
    var start = (page - 1) * perPage
    var end = page * perPage
    var prevPage
    if(page === 2){
        prevPage = 1
    }else if(page > 1){
            prevPage = page - 1
    }
    var nextPage = page + 1
    var ifPage = 0
    var matchedProducts = productss.filter(function(product){
        if(product.price >= 5000000 && product.price <= 10000000){
            return product
        }
    })
    if(matchedProducts.length > 9){
        ifPage = 1
    }
    res.render('product/home', {
        products: matchedProducts.slice(start, end),
        prevPage, page, nextPage, ifPage
    })
}

module.exports.priceFrom10000000to20000000 = function(req, res, next){
    var sessionId = req.signedCookies.sessionId
    if(!sessionId){
        res.redirect('/products')
        return
    }
    var page = parseInt(req.query.page) || 1
    var perPage = 9
    var start = (page - 1) * perPage
    var end = page * perPage
    var prevPage
    if(page === 2){
        prevPage = 1
    }else if(page > 1){
            prevPage = page - 1
    }
    var nextPage = page + 1
    var ifPage = 0
    var matchedProducts = productss.filter(function(product){
        if(product.price >= 10000000 && product.price <= 20000000){
            return product
        }
    })
    if(matchedProducts.length > 9){
        ifPage = 1
    }
    res.render('product/home', {
        products: matchedProducts.slice(start, end),
        prevPage, page, nextPage, ifPage
    })

}

module.exports.priceMoreThan20000000 = function(req, res, next){
    var sessionId = req.signedCookies.sessionId
    if(!sessionId){
        res.redirect('/products')
        return
    }
    var page = parseInt(req.query.page) || 1
    var perPage = 9
    var start = (page - 1) * perPage
    var end = page * perPage
    var prevPage
    if(page === 2){
        prevPage = 1
    }else if(page > 1){
            prevPage = page - 1
    }
    var nextPage = page + 1
    var ifPage = 0
    var matchedProducts = productss.filter(function(product){
        if(product.price > 20000000){
            return product
        }
    })
    if(matchedProducts.length > 9){
        ifPage = 1
    }
    res.render('product/home', {
        products: matchedProducts.slice(start, end),
        prevPage, page, nextPage, ifPage
    })

}