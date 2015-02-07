'use strict';
const chapter3 = require("./chapter3-functions.js"),
      chapter6 = require("./chapter6-objects.js"),
    bookModule = require("./classesFromBookChapter6.js");

let textCell = new bookModule.TextCell("abc");
    
let cell = new chapter6.StretchCell(textCell, 1, 2);
console.log(cell.minWidth());
console.log(cell.minHeight());
console.log(cell.draw());



process.exit(0);