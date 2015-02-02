'use strict';
const f = require('./../chapter4-DataStructures.js');

exports.sumRangeTest = function(test) {
  test.expect(1); 
  test.equal(f.sum(f.range(1,10)), 55);
  test.done();
}

