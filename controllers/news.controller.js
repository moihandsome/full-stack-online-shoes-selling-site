var config = require('../dbconfig')

module.exports.index = function(req, res, next){
    var sessionId = req.signedCookies.sessionId
    if(!sessionId){
        res.redirect('/')
        return
    }
    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("select * from news"), function (err, recordset) {
            if (err) console.log(err)
            news = recordset.recordset.sort(function(a, b){return new Date(b.time) - new Date(a.time)})
            res.render('news/home', {
                news: news
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
    var id = req.params.id
    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("select * from news"), function (err, recordset) {
            if (err) console.log(err)
            var matchedProduct = recordset.recordset.filter(function(news){
                return news.newsId === id
            })
            res.render('news/detail', {
                news: matchedProduct
            })           
        })
    })  
}