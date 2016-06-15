var express = require('express')
var router = express.Router();
var path = require('path')
var request = require('request')

router.post('/', function(req, res, next){
	var name = req.body.name
	var surname = req.body.surname
	var username = req.body.username
	var email = req.body.email
	var password = req.body.password
	var data = {
		name: name,
		surname: surname,
		username: username,
		email: email,
		password: password
	}
	console.log(data)
	request({
	  method: 'POST',
	  url: 'https://api.alpharank.io/api/v1/users',
	  headers: {
	    'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(data)
	}, function (error, response, body) {
		var result = {}
	  if(response.statusCode === 201){
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