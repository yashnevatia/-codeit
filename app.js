var express = require('express');
var app = express();
var _ = require('underscore');

app.post('/sort', function(req, res){
res.send("hey");

});

app.listen(process.env.PORT || 3000, function(){
  console.log("server successfully listening");
})
