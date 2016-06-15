var express = require('express')
var router = express.Router();
var path = require('path')
var request = require('request')

router.post('/', function(req, res, next){
	var username = req.body.username
	var password = req.body.password
	var data = {
		username: username,
		password: password
	}
	request({
	  method: 'POST',
	  url: 'https://api.alpharank.io/api/v1/users/login',
	  headers: {
	    'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(data)
	}, function (error, response, body) {
		var result = {}
	  if(response.statusCode === 200){
	  	result = {
	  		status: "success",
	  		response: body
	  	}
	  	res.send(result)
	  }
	  else{
	  	result = {
	  		status: "error",
	  		response: body
	  	}
	  	res.send(result)
	  }
	  console.log('Status:', response.statusCode);
	  console.log('Headers:', JSON.stringify(response.headers));
	  console.log('Response:', body);
	});
})

module.exports = router;