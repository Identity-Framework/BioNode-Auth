var express = require('express')
var router = express.Router()

/* GET the index */
router.get('/', function(req, res, next) {
    res.json({ 'BioNode-Auth'  : 'A RESTful (whatever) service which can validate and provide WebIDs',
               'API-endpoints' : { 'authenticate WebID' : '/API/webid/auth',
                                   'provide WebID' : '/API/webid/provide'}})
})

/* GET the auth webid endpoint. */
router.get('/API/webid/auth', function(req, res, next) {
  res.json({ ERROR : "API not yet implemented" } )
})

/* GET the provide endpoint */
router.get('/API/webid/provide', function (req, res, next) {
    res.json({ ERROR : 'API not yet implemented' } )
})

module.exports = router
