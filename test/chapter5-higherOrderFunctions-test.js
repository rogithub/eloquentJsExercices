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

exports.historicalLifeExpectancyTest = function(test) {
  test.expect(6);

  let actual = f.historicalLifeExpectancy();
  
  test.equal(actual["century 16"].average, 43.5);
  test.equal(actual["century 17"].average, 51.2);
  test.equal(actual["century 18"].average, 52.78947368421053);
  test.equal(actual["century 19"].average, 54.833333333333336);
  test.equal(actual["century 20"].average, 84.66666666666667);
  test.equal(actual["century 21"].average, 94);
  
  test.done();
}
