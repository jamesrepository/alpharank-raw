var express = require('express')
var router = express.Router();
var path = require('path')

router.get('/', function(req, res, next){
	res.send("Please check your email to activate/verify your account.");
})

module.exports = router;