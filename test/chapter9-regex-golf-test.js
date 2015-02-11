'use strict';

exports.regexGolfTest = function (test) {
    test.expect(7);
    
    //car and cat
    let input = ["carton", "el cartucho"];
    let regex = /cart|car/;
    for(let i = 0; i < input.length; i++){
        test.equal(regex.test(input[i]), true);
    }
    
    //pop and prop
    input = ["el propósito de la música", "pop es entretener a la udiencia"];
    regex = /pr?op/
    for(let i = 0; i < input.length; i++){
        test.equal(regex.test(input[i]), true);
    }
    
    //ferret, ferry and ferrary
    input = ["el ferrary rojo", "que atraviesa el ferry", "es de un tal ferret"];
    regex = /ferry?[et|ary]/
    for(let i = 0; i < input.length; i++){
        test.equal(regex.test(input[i]), true);
    }
    
    test.done();
};