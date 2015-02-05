'use strict';

let flatten = function(arr) {
  let newArray = [];
  let flattened = arr.reduce(function(prev, curr, i) {

    return prev.concat(curr);

  }, newArray);

  return flattened;
}

exports.flatten = flatten;
