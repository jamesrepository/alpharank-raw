var express = require('express')
var router = express.Router();
var path = require('path')
var request = require('request')
var session = require('express-session')
var multer = require('multer')

router.post('/', function(req, res, next){
	console.log(req.body)
		request({
		  method: 'POST',
		  url: 'https://api.alpharank.io/v1/uploads',
		  headers: {
		    'Content-Type': 'multipart/form-data; boundary=---BOUNDARY',
		    'x-auth-token': "'"+req.session.auth+"'"
		  },
		  body: "-----BOUNDARY"+
		  		"Content-Disposition: form-data; name=data_file; filename=\"records.csv\""+
		  		"Content-Type: multipart/form-data"+
		  		"Column 1, Column 2 \n Row 1-1, Row 1-2"+
		  		"-----BOUNDARY"
		}, function (error, response, body) {
		  console.log('Status:', response.statusCode);
		  console.log('Headers:', JSON.stringify(response.headers));
		  console.log('Response:', body);
		});
})

module.exports = router;