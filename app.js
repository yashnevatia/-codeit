var express = require('express');
var app = express();
var _ = require('underscore');

app.post('/sort', function(req, res){
  var array = req.body;
  var temp = _.sortBy(array, function(num){
    return num;
  })
  res.send(temp);
});

app.listen(process.env.PORT || 3000, function(){
  console.log("server successfully listening");
})
