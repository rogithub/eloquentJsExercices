'use strict';
const m = require('./../chapter6-objects.js');

exports.vectorTest = function(test) {
    test.expect(1);
    
    let point = new m.Vector(4, 3);
    
    let expected = 5.656854249492381;
    let actual = point.distance();
    
    test.equal(actual, expected);
    test.done();
};