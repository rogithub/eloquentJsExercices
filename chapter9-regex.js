'use strict';

let isJsNumber = function(text) {
    let number = /^(-|\+)?\d+(\.)?$/;
    if (number.test(text)) return true;
    
    let exponent = /^(\d.)?\d+[eE]{1}(-|\+)?\d+$/;
    if (exponent.test(text)) return true;
    
    let decimal = /^(-|\+)?(\d+)?[.]{1}\d+$/
    return decimal.test(text);
};

let singleToDoubleQuotes = function(text) {
    return text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2');
};

exports.singleToDoubleQuotes = singleToDoubleQuotes;
exports.isJsNumber = isJsNumber;