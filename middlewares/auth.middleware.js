var config = require('../dbconfig')

module.exports.requireAuth = function(req, res, next){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }

    next()
}

module.exports.authRole = (permissions) => {
    return (req, res, next) => {
        var adminId = req.signedCookies.adminId
        if(!adminId){
            res.redirect('/admin/login')
            return
        }
        var sql = require('mssql')
        sql.connect(config, function (err) {
            if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
            var request = new sql.Request();
            request.query(('select * from users where userId='+ '\'' + adminId + '\''), function (err, recordset) {
                if (err) console.log(err)
                recordset.recordset.filter(function(user){ 
                    if(permissions.includes(user.role)){
                        next()
                    }else{
                        return res.status(401).send('Bạn không được quyền truy cập!')
                    }
                })
            })
        })
    }
}
