'use strict';
const m = require("./../chapter9-regex.js");

exports.isJsNumberTest = function(test) {
    test.expect(32);
    let validNumbers = ["1", "-1", "1.0", "-1.0", 
    "-1.509", "-1.509", "10e-20", "33e-4", ".5", "-0.5", 
    "-.78", "+0.20", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
    "1e+12"];
    
    for(let i = 0; i < validNumbers.length; i++) {
        let number = validNumbers[i];
        let actual = m.isJsNumber(number);
        
        test.equal(actual, true, "is number: " + number);
    }
    
    let invalidNumbers = ["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
    ".", "120c", "-44dias", "a10b", "e-10.0", "12k3"]; 
    
    for(let i = 0; i < invalidNumbers.length; i++) {
        let number = invalidNumbers[i];
        let actual = m.isJsNumber(number);
        
        test.equal(actual, false, "is not a number: " + number);
    }
    
    test.done();
};

exports.singleToDoubleQuotesTest = function(test) {
    test.expect(1);
    
    let input = "This is 'the end' of the World's pollution";
    let expected = "This is \"the end\" of the World's pollution";
    let actual = m.singleToDoubleQuotes(input);
    
    test.equal(actual, expected);
    
    test.done();
};