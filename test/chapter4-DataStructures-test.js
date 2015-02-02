'use strict';
const f = require('./../chapter4-DataStructures.js');

exports.sumRangeTest = function(test) {
  test.expect(1); 
  test.equal(f.sum(f.range(1,10)), 55);
  test.done();
}

exports.rangeStepTest = function(test) {
  test.expect(2);
  test.deepEqual(f.range(1, 10, 2), [1, 3, 5, 7, 9]);
  test.deepEqual(f.range(5, 2, -1), [5, 4, 3, 2]);
  test.done();
}
