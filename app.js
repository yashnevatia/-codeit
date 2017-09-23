var express = require('express');
var app = express();
var _ = require('underscore');

var bodyParser = require('body-parser');
app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/sort', function(req, res){
  //console.log(req);
  var array = req.body;
  console.log(array);
  var temp = _.sortBy(array, function(num){
    return num;
  })
  res.send(temp);
});

app.post('/calculateemptyarea', function(req, res){
  var input = req.body;
  var PythonShell = require('python-shell');
  var options = {
    mode: 'text',
    pythonOptions: ['-u'],
    scriptPath: './',
    args: [input]
  };

  PythonShell.run('hello.py', options, function (err, results) {
    if (err) throw err;
    console.log('results: %j', results);
    var temp = parseFloat(results);
    res.send(temp)
  });
})

app.listen(process.env.PORT || 3000, function(){
  console.log("server successfully listening");
})
