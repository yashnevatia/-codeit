var express = require('express');
var app = express();
var _ = require('underscore');
var {calculateEmptyArea} = require('./calculateEmptyArea');

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//here
app.post('/sort', function(req, res){
  var array = req.body;
  console.log(array);
  var temp = _.sortBy(array, function(num){
    return num;
  })
  res.send(temp);
});

app.post('/calculateemptyarea', function(req, res){
  var input = req.body;
  console.log(input);
  res.send(calculateEmptyArea(input));
})

app.listen(process.env.PORT || 3000, function(){
  console.log("server successfully listening");
})
