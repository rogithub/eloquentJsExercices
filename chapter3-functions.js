'use strict';
let min = function(a, b) {
  return (a < b) ? a : b;
}

let isEven = function(n) {
  function makeItPossitive(number){
    return (n < 0) ? n * -1: n;
  }
  n = makeItPossitive(n);
  
  if (n===0) return true;
  if (n===1) return false;

  var newTry = n - 2;

  return isEven(newTry);  
}

let countChar = function(text, letter) {
  let count = 0;
  
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === letter)
      count ++;
  }

  return count;
}

let countBs = function(text) {
  return countChar(text, "B");
}

exports.min = min;
exports.isEven = isEven;
exports.countChar = countChar;
