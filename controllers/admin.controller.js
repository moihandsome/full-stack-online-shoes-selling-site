var config = require('../dbconfig')
var md5 = require('md5')
const signedCookies = require('cookie-parser')
const { user } = require('../dbconfig')
var latinize = require('latinize')
const path = require('path')
const { v4: uuidv4 } = require('uuid')
const fs = require("fs")
const shortid = require('shortid')
var validator = require('validator')


String.prototype.latinize = function() {
    var removalMap = {
        'A'  : /[AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄ]/g,
        'AA' : /[Ꜳ]/g,
        'AE' : /[ÆǼǢ]/g,
        'AO' : /[Ꜵ]/g,
        'AU' : /[Ꜷ]/g,
        'AV' : /[ꜸꜺ]/g,
        'AY' : /[Ꜽ]/g,
        'B'  : /[BⒷＢḂḄḆɃƂƁ]/g,
        'C'  : /[CⒸＣĆĈĊČÇḈƇȻꜾ]/g,
        'D'  : /[DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ]/g,
        'DZ' : /[ǱǄ]/g,
        'Dz' : /[ǲǅ]/g,
        'E'  : /[EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ]/g,
        'F'  : /[FⒻＦḞƑꝻ]/g,
        'G'  : /[GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ]/g,
        'H'  : /[HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ]/g,
        'I'  : /[IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ]/g,
        'J'  : /[JⒿＪĴɈ]/g,
        'K'  : /[KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ]/g,
        'L'  : /[LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ]/g,
        'LJ' : /[Ǉ]/g,
        'Lj' : /[ǈ]/g,
        'M'  : /[MⓂＭḾṀṂⱮƜ]/g,
        'N'  : /[NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ]/g,
        'NJ' : /[Ǌ]/g,
        'Nj' : /[ǋ]/g,
        'O'  : /[OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ]/g,
        'OI' : /[Ƣ]/g,
        'OO' : /[Ꝏ]/g,
        'OU' : /[Ȣ]/g,
        'P'  : /[PⓅＰṔṖƤⱣꝐꝒꝔ]/g,
        'Q'  : /[QⓆＱꝖꝘɊ]/g,
        'R'  : /[RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ]/g,
        'S'  : /[SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ]/g,
        'T'  : /[TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ]/g,
        'TZ' : /[Ꜩ]/g,
        'U'  : /[UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ]/g,
        'V'  : /[VⓋＶṼṾƲꝞɅ]/g,
        'VY' : /[Ꝡ]/g,
        'W'  : /[WⓌＷẀẂŴẆẄẈⱲ]/g,
        'X'  : /[XⓍＸẊẌ]/g,
        'Y'  : /[YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ]/g,
        'Z'  : /[ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ]/g,
        'a'  : /[aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ]/g,
        'aa' : /[ꜳ]/g,
        'ae' : /[æǽǣ]/g,
        'ao' : /[ꜵ]/g,
        'au' : /[ꜷ]/g,
        'av' : /[ꜹꜻ]/g,
        'ay' : /[ꜽ]/g,
        'b'  : /[bⓑｂḃḅḇƀƃɓ]/g,
        'c'  : /[cⓒｃćĉċčçḉƈȼꜿↄ]/g,
        'd'  : /[dⓓｄḋďḍḑḓḏđƌɖɗꝺ]/g,
        'dz' : /[ǳǆ]/g,
        'e'  : /[eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ]/g,
        'f'  : /[fⓕｆḟƒꝼ]/g,
        'g'  : /[gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ]/g,
        'h'  : /[hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ]/g,
        'hv' : /[ƕ]/g,
        'i'  : /[iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı]/g,
        'j'  : /[jⓙｊĵǰɉ]/g,
        'k'  : /[kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ]/g,
        'l'  : /[lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ]/g,
        'lj' : /[ǉ]/g,
        'm'  : /[mⓜｍḿṁṃɱɯ]/g,
        'n'  : /[nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ]/g,
        'nj' : /[ǌ]/g,
        'o'  : /[oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ]/g,
        'oi' : /[ƣ]/g,
        'ou' : /[ȣ]/g,
        'oo' : /[ꝏ]/g,
        'p'  : /[pⓟｐṕṗƥᵽꝑꝓꝕ]/g,
        'q'  : /[qⓠｑɋꝗꝙ]/g,
        'r'  : /[rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ]/g,
        's'  : /[sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ]/g,
        't'  : /[tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ]/g,
        'tz' : /[ꜩ]/g,
        'u'  : /[uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ]/g,
        'v'  : /[vⓥｖṽṿʋꝟʌ]/g,
        'vy' : /[ꝡ]/g,
        'w'  : /[wⓦｗẁẃŵẇẅẘẉⱳ]/g,
        'x'  : /[xⓧｘẋẍ]/g,
        'y'  : /[yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ]/g,
        'z'  : /[zⓩｚźẑżžẓẕƶȥɀⱬꝣ]/g,
    };

    var str = this;
    for(var latin in removalMap) {
      var nonLatin = removalMap[latin];
      str = str.replace(nonLatin , latin);
    }

    return str;
}

module.exports.home = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("select * from notifications"), function (err, recordset) {
            if (err) console.log(err)
            notifications = recordset.recordset.sort(function(a, b){return new Date(b.time) - new Date(a.time)})
            
            res.render('admin/home', {
                notifications: notifications
            })           
        })
    })  
}
module.exports.addNewNoti = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var newTitle = req.body.newTitle
    var newDetail = req.body.newDetail

    var date_ob = new Date()
    let date = ("0" + date_ob.getDate()).slice(-2)
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2)
    let year = date_ob.getFullYear()
    let hours = date_ob.getHours()
    let minutes = date_ob.getMinutes()
    let seconds = date_ob.getSeconds()
    let time = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds

    var convertNotiId = req.body.newTitle.latinize().toLowerCase().split(/[.:;?!~,`"“”&|()<>{}\=\+\-[\]\r\n/\\]+/).join('').split(' ').join('-')

    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("insert into notifications ([notiId],[title],[detail],[time]) values ('" + convertNotiId + "',N'" + newTitle + "',N'" + newDetail + "','" + time + "')"), function (err, recordset) {
            if (err) {
                console.log(err)
            }else console.log('Data is inserted successfully!')        
        })
    })
    res.redirect('/admin')
}
module.exports.postModifyNoti = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var sql = require('mssql')
    var option = req.body.option
    var newInfo = req.body.newInfo
    var id = req.params.id

    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("update notifications set ["+option+"] = N'"+newInfo+"' where notiId = " + '\'' + id + '\''), function (err, recordset) {
            if (err) {
                console.log(err)
            }else console.log('Data is updated successfully!')
        })
    })
    res.redirect('/admin')
}
module.exports.deleteNoti = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var sql = require('mssql')
    var id = req.params.id

    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("delete from notifications where notiId = " + '\'' + id + '\''), function (err, recordset) {
            if (err) {
                console.log(err)
            }else console.log('Data is deleted successfully!')
        })
    })
    res.redirect('/admin')
}



module.exports.homeUser = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("select * from users"), function (err, recordset) {
            if (err) console.log(err)
            users = recordset.recordset.sort(function(a, b){return new Date(b.time) - new Date(a.time)})
            
            res.render('admin/homeusers', {
                users: users
            })           
        })
    })  
}
module.exports.addNewUser = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var newFullname = req.body.newFullname
    var newUsername = req.body.newUsername
    var newPassword = md5(req.body.newPassword)
    var newRole = req.body.newRole

    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("insert into users ([userId],[fullname],[username],[password],[role]) values ('"+'xmobile_'+shortid.generate()+"',N'"+newFullname+"','"+newUsername+"','"+newPassword+"','"+newRole+"')"), function (err, recordset) {
            if (err) {
                console.log(err)
            }else console.log('Data is inserted successfully!')        
        })
    })
    res.redirect('/admin/users')
}
module.exports.deleteUser = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var sql = require('mssql')
    var id = req.params.id

    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("delete from users where userId = " + '\'' + id + '\''), function (err, recordset) {
            if (err) {
                console.log(err)
            }else console.log('Data is deleted successfully!')
        })
    })
    res.redirect('/admin/users')
}
module.exports.modifyUser = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var sql = require('mssql')
    var newRole = req.body.newRole
    var id = req.params.id

    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("update users set role = '"+newRole+"' where userId = " + '\''+id+'\''), function (err, recordset) {
            if (err) {
                console.log(err)
            }else console.log('Data is updated successfully!')
        })
    })
    res.redirect('/admin/users')
}



module.exports.homePhones = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    products = []
    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("select * from products where type ='phone'"), function (err, recordset) {
            if (err) console.log(err)
            products = recordset.recordset
            res.render('admin/homephones', {
                products: products
            })           
        })
    })  
}
module.exports.searchPhones = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var q = req.query.q
    var sql = require('mssql')
    products = []
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("select * from products where type ='phone'"), function (err, recordset) {
            if (err) console.log(err)
                products = recordset.recordset.filter(function(product){
                    return product.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
            })
            if (products.length !== 0){
                res.render('admin/homephones', {
                    products: products
                })
            } else {
                res.render('admin/notfoundphones')
            }
            
        })
    })
}
module.exports.addNewPhones = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }

    var newName = req.body.newName
    var newBrand = req.body.newBrand
    var newPrice = req.body.newPrice
    var newQuantity = req.body.newQuantity
    var newScreenSize = req.body.newScreenSize
    var newScreenTech = req.body.newScreenTech
    var newCameraRear = req.body.newCameraRear
    var newCameraFront = req.body.newCameraFront
    var newChipset = req.body.newChipset
    var newRAM = req.body.newRAM
    var newMemory = req.body.newMemory
    var newPin = req.body.newPin
    var newOs = req.body.newOs
    var newNameImage = uuidv4()

    var convertId = newName.latinize().toLowerCase().split(/[ .:;?!~,`"“”&|()<>{}\=\+\-[\]\r\n/\\]+/).join('-')
    var extname = path.extname(req.file.originalname);  
    fs.rename(req.file.path,req.file.destination+newNameImage+extname,function(err){   
        if(err) console.log(err)
    })

    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("insert into products ([productId],[type],[type_detail],[name],[brand],[price],[quantity],[url],[screen_size],[screen_tech],[camera_rear],[camera_front],[chipset],[ram],[memory],[pin],[os]) values ('" + convertId + "', 'phone', 'phone','" + newName + "', '" + newBrand + "','" + newPrice + "','" + newQuantity + "','" + newNameImage+extname + "','" + newScreenSize + "','" + newScreenTech + "', '" + newCameraRear + "', '" + newCameraFront + "', '" + newChipset + "', '" + newRAM + "', '" + newMemory + "', '" + newPin + "', '" + newOs+ "')"), function (err, recordset) {
            if (err) {
                console.log(err)
            }else console.log('Data is inserted successfully!')
        })
    })
    res.redirect('/admin/phones')
}
module.exports.postModifyNamePhones = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var sql = require('mssql')
    var newName = req.body.newName
    var id = req.params.id

    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("update products set [name] = ' " + newName + " ' where productId = " + '\'' + id + '\''), function (err, recordset) {
            if (err) {
                console.log(err)
            }else console.log('Data is updated successfully!')
        })
    })
    res.redirect('/admin/phones')
}
module.exports.postModifyPricePhones = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var sql = require('mssql')
    var newPrice = req.body.newPrice
    var id = req.params.id

    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("update products set [price] = ' " + newPrice + " ' where productId = " + '\'' + id + '\''), function (err, recordset) {
            if (err) {
                console.log(err)
            }else console.log('Data is updated successfully!')
        })
    })
    res.redirect('/admin/phones')
}
module.exports.postModifyQuantityPhones = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var sql = require('mssql')
    var newQuantity = req.body.newQuantity
    var id = req.params.id

    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("update products set [quantity] = ' " + newQuantity + " ' where productId = " + '\'' + id + '\''), function (err, recordset) {
            if (err) {
                console.log(err)
            }else console.log('Data is updated successfully!')
        })
    })
    res.redirect('/admin/phones')
}
module.exports.postModifyInfoPhones = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var sql = require('mssql')
    var infoId = req.body.infoId
    var newInfo = req.body.newInfo
    var id = req.params.id

    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("update products set ["+infoId+"] = ' " + newInfo + " ' where productId = " + '\'' + id + '\''), function (err, recordset) {
            if (err) {
                console.log(err)
            }else console.log('Data is updated successfully!')
        })
    })
    res.redirect('/admin/phones')
}
module.exports.deleteProductPhones = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var sql = require('mssql')
    var id = req.params.id

    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("delete from products where productId = " + '\'' + id + '\''), function (err, recordset) {
            if (err) {
                console.log(err)
            }else console.log('Data is deleted successfully!')
        })
    })
    res.redirect('/admin/phones')
}


module.exports.homeAccessories = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    products = []
    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("select * from products where type ='accessory'"), function (err, recordset) {
            if (err) console.log(err)
            products = recordset.recordset
            res.render('admin/homeaccessories', {
                products: products
            })           
        })
    })  
}
module.exports.searchAccessories = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var q = req.query.q
    var sql = require('mssql')
    products = []
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("select * from products where type ='accessory'"), function (err, recordset) {
            if (err) console.log(err)
                products = recordset.recordset.filter(function(product){
                    return product.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
            })
            if (products.length !== 0){
                res.render('admin/homeaccessories', {
                    products: products
                })
            } else {
                res.render('admin/notfoundaccessories')
            }
            
        })
    })
}
module.exports.addNewAccessories = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }

    var newName = req.body.newName
    var type_detail = req.body.type_detail
    var newPrice = req.body.newPrice
    var newQuantity = req.body.newQuantity
    var newNameImage = uuidv4()

    var convertId = newName.latinize().toLowerCase().split(/[ .:;?!~,`"“”'&|()<>{}\=\+\-[\]\r\n/\\]+/).join('-')
    var extname = path.extname(req.file.originalname);  
    fs.rename(req.file.path,req.file.destination+newNameImage+extname,function(err){   
        if(err) console.log(err)
    })

    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("insert into products ([productId],[type],[type_detail],[name],[price],[quantity],[url]) values ('" + convertId + "', 'accessory', '" + type_detail + "','" + newName + "','" + newPrice + "','" + newQuantity + "','" + newNameImage+extname + "')"), function (err, recordset) {
            if (err) {
                console.log(err)
            }else console.log('Data is inserted successfully!')
        })
    })
    res.redirect('/admin/accessories')
}
module.exports.postModifyNameAccessories = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var sql = require('mssql')
    var newName = req.body.newName
    var id = req.params.id

    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("update products set [name] = ' " + newName + " ' where productId = " + '\'' + id + '\''), function (err, recordset) {
            if (err) {
                console.log(err)
            }else console.log('Data is updated successfully!')
        })
    })
    res.redirect('/admin/accessories')
}
module.exports.postModifyPriceAccessories = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var sql = require('mssql')
    var newPrice = req.body.newPrice
    var id = req.params.id

    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("update products set [price] = ' " + newPrice + " ' where productId = " + '\'' + id + '\''), function (err, recordset) {
            if (err) {
                console.log(err)
            }else console.log('Data is updated successfully!')
        })
    })
    res.redirect('/admin/accessories')
}
module.exports.postModifyQuantityAccessories = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var sql = require('mssql')
    var newQuantity = req.body.newQuantity
    var id = req.params.id

    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("update products set [quantity] = ' " + newQuantity + " ' where productId = " + '\'' + id + '\''), function (err, recordset) {
            if (err) {
                console.log(err)
            }else console.log('Data is updated successfully!')
        })
    })
    res.redirect('/admin/accessories')
}
module.exports.deleteProductAccessories = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var sql = require('mssql')
    var id = req.params.id

    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("delete from products where productId = " + '\'' + id + '\''), function (err, recordset) {
            if (err) {
                console.log(err)
            }else console.log('Data is deleted successfully!')
        })
    })
    res.redirect('/admin/accessories')
}



module.exports.login = function(req, res){
    res.render('admin/login')
}
module.exports.postLogIn = function(req, res){
    
    var username = req.body.username.replace(/\b(?:select from|select|from|where|union|drop)\b/ig, '').toLowerCase().split(/[*_.:;?#@$%^!~,`"“”'&|()<>{}\=\+\-[\]\r\n/\\]+/).join('')
    var password = req.body.password.replace(/\b(?:select from|select|from|where|union|drop)\b/ig, '').toLowerCase().split(/[*_.:;?#@$%^!~,`"“”'&|()<>{}\=\+\-[\]\r\n/\\]+/).join('')
    console.log('Tên đăng nhập: ' + username)
    console.log('Mật khẩu: ' + password)
    z = Date.now()
    fullname = []
    role = []
    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query('select * from users', function (err, recordset) {
            if (err) console.log(err)
            var admin = recordset.recordset.find(function(admin){
                return admin.username === username
            })
            if(admin === undefined){
                return res
                .render('admin/login', {
                    errors: ['Sai tên đăng nhập!'],
                    values: req.body
                })
            }
            if(admin.password !== md5(password)){
                return res
                .render('admin/login', {
                    errors: ['Sai mật khẩu!'],
                    values: req.body
                })
            }
            fullname = admin.fullname
            if(admin.role === 'admin'){
                role = 'Tổng quản lý'
            }else if(admin.role === 'product'){
                role = 'Quản lý sản phẩm'
            }else if(admin.role === 'news'){
                role = 'Quản lý tin tức'
            }else{
                role = 'Quản lý đơn hàng'
            }
            res.cookie('adminId', admin.userId,  {expires: new Date(z+30*60*1000), signed:true})
            res.redirect('/admin')
        })
    })
}
module.exports.logOut = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin')
        return
    }
    res.clearCookie('adminId')
    res.redirect('/admin')
}



module.exports.news = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("select * from news"), function (err, recordset) {
            if (err) console.log(err)
            news = recordset.recordset.sort(function(a, b){return new Date(b.time) - new Date(a.time)})
            
            res.render('admin/news', {
                news: news
            })           
        })
    })      
}
module.exports.addNewNews = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var newTitle = req.body.newTitle
    var newDetail = req.body.newDetail
    var newNameImage = uuidv4()

    var date_ob = new Date()
    let date = ("0" + date_ob.getDate()).slice(-2)
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2)
    let year = date_ob.getFullYear()
    let hours = date_ob.getHours()
    let minutes = date_ob.getMinutes()
    let seconds = date_ob.getSeconds()
    let time = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds

    var convertNewsId = newTitle.latinize().toLowerCase().split(/[.:;?!~,`"“”&|()<>{}\=\+\-[\]\r\n/\\]+/).join('').split(' ').join('-')
    var extname = path.extname(req.file.originalname);  
    fs.rename(req.file.path,req.file.destination+newNameImage+extname,function(err){   
        if(err) console.log(err)
    })

    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("insert into news ([newsId],[title],[detail],[url],[time]) values ('" + convertNewsId + "',N'" + newTitle + "',N'" + newDetail + "','" + newNameImage+extname + "','" + time + "')"), function (err, recordset) {
            if (err) {
                console.log(err)
            }else console.log('Data is inserted successfully!')        
        })
    })
    res.redirect('/admin/news')
}
module.exports.deleteNews = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var sql = require('mssql')
    var id = req.params.id

    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("delete from news where newsId = " + '\'' + id + '\''), function (err, recordset) {
            if (err) {
                console.log(err)
            }else console.log('Data is deleted successfully!')
        })
    })
    res.redirect('/admin/news')
}



module.exports.showOrder = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var sql = require('mssql')
    orderDetails= []
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query('select * from orderDetails', function (err, recordset) {
            if (err) console.log(err)
            orderDetails = recordset.recordset           
        })
        return
    })
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query('select * from orders', function (err, recordset) {
            if (err) console.log(err)
            orderInfos = recordset.recordset
            res.render('admin/order',{
                orderInfos: orderInfos,
                orderDetails
            })           
        })
    })  
}
module.exports.postModifyOrder = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var sql = require('mssql')
    var status = req.body.status
    var id = req.params.id

    var sql = require('mssql')
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("update orders set [status] = ' " + status + " ' where orderId = " + '\'' + id + '\''), function (err, recordset) {
            if (err) {
                console.log(err)
            }else console.log('Data is updated successfully!')
        })
    })
    res.redirect('/admin/orders')  
}
module.exports.searchOrder = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var q = req.query.q
    var sql = require('mssql')
    orderInfos = []
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query('select * from orders', function (err, recordset) {
            if (err) console.log(err)
            orderInfos = recordset.recordset.filter(function(order){
                return order.orderId.toLowerCase().indexOf(q.toLowerCase()) !== -1          
            })
            if(orderInfos.length===0){
                res.render('admin/notfoundorders')
            }
            return
        })
    })
    
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query('select * from orderDetails', function (err, recordset) {
            if (err) console.log(err)
            orderDetails = recordset.recordset 
            res.render('admin/order',{
                orderInfos,
                orderDetails: orderDetails
            })          
        })
    })
}
module.exports.deleteOrder = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var sql = require('mssql')
    var id = req.params.id
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("delete from orders where orderId = " + '\'' + id + '\''), function (err, recordset) {
            if (err) {
                console.log(err)
            }else console.log('Data is deleted successfully!')         
        })
        return
    })
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query(("delete from orderDetails where orderId = " + '\'' + id + '\''), function (err, recordset) {
            if (err) {
                console.log(err)
            }else console.log('Data is deleted successfully!')       
        })
    })
    res.redirect('/admin/orders')
}


//moi nhat
module.exports.sortOrderDetailDesc = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var sql = require('mssql')
    orderDetails= []
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query('select * from orderDetails', function (err, recordset) {
            if (err) console.log(err)
            orderDetails = recordset.recordset           
        })
        return
    })
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query('select * from orders', function (err, recordset) {
            if (err) console.log(err)
            orderInfos = recordset.recordset
            orderInfos.sort(function(a, b) { return new Date(b.timeOrder) - new Date(a.timeOrder) })
            res.render('admin/order',{
                orderInfos: orderInfos,
                orderDetails
            })           
        })
    })  
}
//lau nhat
module.exports.sortOrderDetailAsc = function(req, res){
    var adminId = req.signedCookies.adminId
    if(!adminId){
        res.redirect('/admin/login')
        return
    }
    var sql = require('mssql')
    orderDetails= []
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query('select * from orderDetails', function (err, recordset) {
            if (err) console.log(err)
            orderDetails = recordset.recordset           
        })
        return
    })
    sql.connect(config, function (err) {
        if (err) console.log('Không thể kết nối đến cơ sở dũ liệu!');
        var request = new sql.Request();
        request.query('select * from orders', function (err, recordset) {
            if (err) console.log(err)
            orderInfos = recordset.recordset
            orderInfos.sort(function(a, b) { return new Date(a.timeOrder) - new Date(b.timeOrder) })
            res.render('admin/order',{
                orderInfos: orderInfos,
                orderDetails
            })           
        })
    })  
}