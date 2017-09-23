var express = require('express');
var app = express();
var _ = require('underscore');

var bodyParser = require('body-parser');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sort', function(req, res){
  var array = req.body;
  console.log(array);
  var temp = _.sortBy(array, function(num){
    return num;
  })
  res.send(temp);
});

app.post('/calculateemptyarea', function(req, res){

})

app.listen(process.env.PORT || 3000, function(){
  console.log("server successfully listening");
})
