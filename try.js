var _ = require('underscore');

var object = {
  "maxWeight": 5,
  "vault": [
  {"weight": 1, "value": 200},
  {"weight": 3, "value": 240},
  {"weight": 5, "value": 150},
  {"weight": 2, "value": 140}
  ]
};

function findWeightArray(object){
  var weightArray = object.vault;
  weightArray = _.sortBy(weightArray, "weight");

  weightArray = _.map(weightArray, function(item){
    return [item.weight, item.value, item.value/item.weight]
  })
  return weightArray;
}

function findSumArray(object){
  var sumArray1 = [];
  function partition(n, max, prefix){
    if(n === 0){
      sumArray1.push(prefix);
      return;
    }
    for(var i= Math.min(max, n); i>= 1; i--){
      partition(n-i, i, prefix + " " + i);
    }
  }
  partition(object.maxWeight, object.maxWeight, "");
  for (var i = 0; i < sumArray1.length; i++) {
    sumArray1[i] = sumArray1[i].split(' ');
    sumArray1[i].shift();
    for(var j =0 ;j<sumArray1[i].length;j++){
      sumArray1[i][j] = parseInt(sumArray1[i][j]);
    }
  }
  return sumArray1;
}

function check(sumArray, weightArray){
  
}

function main(object){
  var weightArray1 = findWeightArray(object);
  var sumArray = findSumArray(object);
  console.log(weightArray1);
  console.log(sumArray);
  for(var i=0 ;i<sumArray.length;i++){
    check(sumArray[i], weightArray1);
  }
}

main(object);
