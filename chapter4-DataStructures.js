'use strict';

let range = function(start, end, step) {
  let arr = [];  
  step = step || 1;  
     
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else {
    // (5, 2, -1) [5, 4, 3, 2]
    for(let i = start; i >= end; i += step) {
      arr.push(i);
    }  
  }

  return arr;
}

let sum = function(arr) {
  var counter = 0;

  for(let i = 0; i < arr.length; i++)
    counter += arr[i];

  return counter;
}

let reverseArray = function(arr) {
  let arrCopy = [];
  for(let i = 0; i < arr.length; i++) {
    arrCopy[i] = arr[(arr.length-1)-i];
  }
  return arrCopy;
}

let reverseArrayInPlace = function(arr) {
  let reversed = reverseArray(arr);
  for(let i = 0; i < reversed.length; i++){
    arr[i] = reversed[i];
  } 
}

exports.range = range;
exports.sum = sum;
exports.reverseArray = reverseArray;
exports.reverseArrayInPlace = reverseArrayInPlace;
