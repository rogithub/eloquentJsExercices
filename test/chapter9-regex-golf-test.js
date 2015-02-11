'use strict';

exports.regexGolfTest = function (test) {
    test.expect(27);
    
    //car and cat
    let input = ["carton", "el cartucho"];
    let regex = /cart|car/;
    for(let i = 0; i < input.length; i++){
        test.equal(regex.test(input[i]), true, "car and cat");
    }
    test.equal(regex.test("gato"), false);
    
    //pop and prop
    input = ["el propósito de la música", "pop es entretener a la udiencia"];
    regex = /pr?op/;
    for(let i = 0; i < input.length; i++){
        test.equal(regex.test(input[i]), true, "pop and prop");
    }
    test.equal(regex.test("portazo"), false);
    
    //ferret, ferry and ferrary
    input = ["el ferrary rojo", "que atraviesa el ferry", "es de un tal ferret"];
    regex = /ferry?[et|ary]/;
    for(let i = 0; i < input.length; i++){
        test.equal(regex.test(input[i]), true, "//ferret, ferry and ferrary");
    }
    test.equal(regex.test("Fernando"), false);
    
    //ious ending word
    input = ["el tedious rojo", "que hilarious el ferry", "es rious ferret"];
    regex = /\b\w*ious\b/;
    for(let i = 0; i < input.length; i++) {
        test.equal(regex.test(input[i]), true, "ious ending word");
    }
    test.equal(regex.test("tedioso"), false);
    
    //A whitespace character followed by a dot, comma, colon, or semicolon
    input = ["despacio ;", "que     ,", "llevo bien mucha :", "prisa ."];
    regex = /\s[.,;:]/;
    for(let i = 0; i < input.length; i++) {
        test.equal(regex.test(input[i]), true, "A whitespace character followed by a dot, comma, colon, or semicolon");
    }
    test.equal(regex.test("Sin coma, punto, ni punto y coma."), false);
    
    //A word longer than six letters
    input = ["1234567", "Hola me llamo Cornelio", "Popocatépetl"];
    regex = /\b\w{7,}\b/;
    for(let i = 0; i < input.length; i++) {
        test.equal(regex.test(input[i]), true, "A word longer than six letters");
    }
    test.equal(regex.test("pala bras de menos de 6 letras"), false);
    
    //A word without the letter e
    input = ["*l animal llamado *l*fant*", " caball*ro ", "Popocat*p*tl"];
    regex = /\b[a-df-z]+\b/;
    for(let i = 0; i < input.length; i++) {
        test.equal(regex.test(input[i]), true, "A word without the letter e");
    }
    test.equal(regex.test("el elefante Eleandro"), false);
    
    test.done();
};