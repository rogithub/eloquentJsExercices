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

let arrayToList = function(arr) {  
  let list = {};  

  if (arr.length == 0){
    return list;
  }

  if (arr.length === 1) {
    list.value = arr[0];
    list.rest = null;
    return list;    
  }

  else if (arr.length > 1){
    list.value = arr[0];
    arr.splice(0, 1); // remover 1 elemento
    list.rest = arrayToList(arr);
  }
  
  return list;  
}

let listToArray = function(list) {
  var array = [];
  
  let getValue = function(item) {
    if (!item) return;

    array.push(item.value);
    getValue(item.rest);
  }
  
  getValue(list);

  return array;
}

let prepend = function(element, list) {
  // element: { value: 1, rest: list }
  element.rest = list;
  return element;
}

let itemAt = function(list, nth) {
  let item = undefined;
  let count = 0;

  let getItem = function(item) {
    if (!item) return undefined;
    if (count === nth) {
      return item;
    }
    count++;
    return getItem(item.rest);
  }
  
  item = getItem(list);
  return item;
}

let deepEqual = function(obj1, obj2) {
  
  if (obj1 === null && obj2 === null) return true;
  if (obj1 && !obj2) return false;
  if (!obj1 && obj2) return false;

  if(typeof obj1 === "object" && typeof obj2 === "object") {
    if (obj1 == obj2) return true;    
           
    for(var property in obj1) {      
      if (obj1.hasOwnProperty(property)) {
        if (!deepEqual(obj1[property], obj2[property]))
          return false;
      }
    } 

    for(var property in obj2) {
      if (obj2.hasOwnProperty(property)) {
        if (!deepEqual(obj1[property], obj2[property]))
          return false;
      }
    }

    return true;
  }

  return obj1 === obj2;
}

exports.range = range;
exports.sum = sum;
exports.reverseArray = reverseArray;
exports.reverseArrayInPlace = reverseArrayInPlace;
exports.arrayToList = arrayToList;
exports.listToArray = listToArray;
exports.prepend = prepend;
exports.itemAt = itemAt;
exports.deepEqual = deepEqual;

