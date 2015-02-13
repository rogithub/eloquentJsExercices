'use strict';
const m = require("./../chapter10-modules.js");

exports.monthTest = function(test) {
  test.expect(2);
  
  test.equal(m.month.name(0), "January", "Enero en la posició 0");
  test.equal(m.month.number("December"), 11, "Diciembre en la posición 12");
  
  test.done();
    
};