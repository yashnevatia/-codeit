var express = require('express');
var app = express();

/// final

var {testfunction}  = require ('./testfunction');

app.get('/', function(req, res){
  res.send("Hello World");
})

app.get('/aman', function(req, res){
  res.send("hello from aman")
})

app.get('/tejasvi', function(req, res){
  testfunction();
  res.send("Hello new")
})

app.post('/nevatia', function(req,res){
	res.send("Hello World");
})

app.listen(process.env.PORT || 3000, function(){
  console.log("server successfully listening on port 3000");
})
