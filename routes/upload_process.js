var express = require('express')
var router = express.Router();
var path = require('path')
var request = require('request')

router.get('/', function(req, res, next){
	request({
	  method: 'POST',
	  url: 'https://api.alpharank.io/api/v1/uploads',
	  headers: {
	    'Content-Type': 'multipart/form-data; boundary=---BOUNDARY',
	    'x-auth-token': 'your-auth-token'
	  },
	  body: "-----BOUNDARY		Content-Disposition: form-data; name=data_file; filename=\"records.csv\"		Content-Type: text/plain		Column 1, Column 2\nRow 1-1, Row 1-2		-----BOUNDARY"
	}, function (error, response, body) {
	  console.log('Status:', response.statusCode);
	  console.log('Headers:', JSON.stringify(response.headers));
	  console.log('Response:', body);
	});
})

module.exports = router;