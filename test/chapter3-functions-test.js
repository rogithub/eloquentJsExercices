'use strict';
const f = require("./../chapter3-functions.js");


exports.minFunctionTest = function(test) {
  test.expect(3);
  let a = 0, b = 0, expected = 0, actual = 0;

  a = 3;
  b = 9;
  expected = 3;
  actual = f.min(a, b);
  test.equal(actual, expected);

  a = -100;
  b = -2;
  expected = -100;
  actual = f.min(b, a);
  test.equal(actual, expected);

  a = -1;
  b = 1;
  expected = -1;
  actual = f.min(a, b);
  test.equal(actual, expected);

  test.done();
}

exports.isEvenTest = function(test) {
  test.expect(4);

  test.equal(f.isEven(50), true);
  test.equal(f.isEven(75), false);
  test.equal(f.isEven(8), true);
  test.equal(f.isEven(-1), false);

  test.done();
}

exports.countCharTest = function(test){
  test.expect(3);
  test.equal(f.countChar("anita lava la tina", "a"), 6);
  test.equal(f.countChar("mi nuevo Black Berry rifa bien chido", "B"), 2);
  test.equal(f.countChar("erongaricuaro", "e"), 1);
  test.done();
}
