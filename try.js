var array = ["1","4", "5"];
var temp = [];
for(var i=0;i<array.length;i++){
  var j = JSON.parse(array[i]);
  temp.push(j);
};
console.log(JSON.stringify(temp));
