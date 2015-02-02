'use strict';

let range = function(start, end){
  let arr = [];  
  for (let i = start; i <= end; i++){
    arr.push(i);        
  }
  return arr;
}

let sum = function(arr) {
  var counter = 0;
  for(let i = 0; i < arr.length; i++)
    counter += arr[i];
  return counter;
}

exports.range = range;
exports.sum = sum;
