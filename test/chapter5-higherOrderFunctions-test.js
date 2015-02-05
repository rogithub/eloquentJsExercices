'use strict';
const f = require("./../chapter5-higherOrderFunctions.js");

exports.flattenningTest = function(test) {
  test.expect(1);

  let a = [[1, 2, 3], [4, 5], [6, 7, 8, 9], [10]];
  let actual = f.flatten(a);
  let expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  test.deepEqual(actual, expected); 
  test.done(); 
}

exports.motherChildAgeDifferenceTest = function(test) {
  test.expect(1);

  let expected = 31.22222222222222; // http://eloquentjavascript.net/code/#5.2
  let actual = f.motherChildAgeDifference();

  test.equal(actual, expected);

  test.done();
}
