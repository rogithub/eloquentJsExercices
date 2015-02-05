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

let average = function(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

let motherChildAgeDifference = function() {

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


let historicalLifeExpectancy = function() {
  let getCentury = function(person) {
    return Math.ceil(person.died / 100);
  }

  let items = {};
  ancestry.forEach(function(person) {
    let century = "century " + getCentury(person);
    if (!(century in items)) {
      items[century] = {
        ages: [],
        average: 0
      };
    }
    
    let item = items[century];

    let age = person.died - person.born;
    item.ages.push(age);

    //re-calculate average
    item.average = average(item.ages);
  }); 

  return items;
}

exports.flatten = flatten;
exports.motherChildAgeDifference = motherChildAgeDifference;
exports.historicalLifeExpectancy = historicalLifeExpectancy;
