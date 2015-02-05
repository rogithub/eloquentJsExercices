'use strict';
const data = require("./ancestry.js");
const ancestry = JSON.parse(data);

let flatten = function(arr) {
  let newArray = [];
  let flattened = arr.reduce(function(prev, curr, i) {

    return prev.concat(curr);

  }, newArray);

  return flattened;
}


let motherChildAgeDifference = function() {

  let average = function(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
  }

  let byName = function(name) {
    return ancestry.filter(function(person) {
      return person.name == name;
    });
  }

  let all = []; 
  ancestry.forEach(function(person){        
    let filtered = byName(person.mother);

    if (filtered.length > 0) {
      let mother = filtered[0];      
      all.push(person.born - mother.born);
    }

  });

  return average(all);  
}


exports.flatten = flatten;
exports.motherChildAgeDifference = motherChildAgeDifference;
