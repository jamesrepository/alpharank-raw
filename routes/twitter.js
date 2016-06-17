var express = require('express')
var router = express.Router();
var path = require('path')
var Twit = require('twit')
var T = new Twit({
	consumer_key: 'PE4Lcb2pQvfaCKUrrRlouZS4R',
	consumer_secret: 'tpo9wKCvzhWJy4mHjobJBLRkgYbHMA4jcnJnKwsQrNJROllthF',
	access_token: '2362872974-clmIP0F5B8CSV1tiiYyVyu396UZ4RAnZc4ULjTK',
	access_token_secret: 'XBat0wD5T9kxsUh9xH714dFyWEVMxMiuba2LpPky3gxN0'
});

router.get('/', function(req, res, next){
	T.get('users/search', { q: "keliMeSoftly", count: 100 }, function(err, data, response) {
	  res.send(data);
	})
})

module.exports = router;