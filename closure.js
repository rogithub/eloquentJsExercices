'use strict';
var x = 8;
var saludar = function() {
  var x = 10;

  var add = function(){    
    x = 0;
    x = x + 1;
    return x;
  }
 
  add();

  var x = x + 1;

  console.log(x); // 2

  return add;
}

console.log(x);//8

var add = saludar();

console.log(add()); //1
console.log("-------------let-------------");
for(let i = 0; i < 4; i++)
  for(let i = 0; i < 4; i++)
    console.log(i);
