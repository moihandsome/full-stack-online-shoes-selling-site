const signedCookies = require('cookie-parser')
const shortid = require('shortid')
var db = require('../db')

module.exports = function(req, res, next){
    if (!req.signedCookies.sessionId){
        var sessionId = shortid.generate()
        res.cookie('sessionId', sessionId, {signed: true})

        db.get('sessions').push({ id: sessionId }).write()
        db.get('sessions').find({ id: sessionId }).set('countCart', 0).write()
    }

    next()
}