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

app.post('/calculateemptyarea', function(req, res){
  var input = req.body;
  var PythonShell = require('python-shell');
  var options = {
    mode: 'text',
    pythonOptions: ['-u'],
    scriptPath: './',
    args: [intput]
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
