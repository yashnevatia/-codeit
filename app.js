var express = require('express');
var app = express();


var PythonShell = require('python-shell');

var options = {
  mode: 'text',
  pythonOptions: ['-u'],
  scriptPath: './',
  args: ['value1', 'value2', 'value3']
};

PythonShell.run('hello.py', options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log('results: %j', results);
});

app.listen(process.env.PORT || 3000, function(){
  console.log("server successfully listening on port 3000");
})
