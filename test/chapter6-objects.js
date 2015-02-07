'use strict';
const m = require('./../chapter6-objects.js');

exports.vectorTest = function(test) {
    test.expect(3);
    
    let point = new m.Vector(4, 3);
    
    let expected = 5;
    let actual = point.distance();
    test.equal(actual, expected);
    
    expected = new m.Vector(3, 2);
    actual = point.minus(new m.Vector(1, 1));
    test.deepEqual(actual, expected);

    expected = new m.Vector(10, 10);
    actual = point.plus(new m.Vector(6, 7));
    test.deepEqual(actual, expected);
    
    test.done();
};