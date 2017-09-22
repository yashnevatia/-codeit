var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send("Hello World");
})

app.get('/aman', function(req, res){
  res.send("hello from aman")
})

app.get('/tejasvi', function(req, res)
{
  res.send("Hello new")
})

app.listen(3000, function(){
  console.log("server successfully listening on port 3000");
})
