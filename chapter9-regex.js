'use strict';

let singleToDoubleQuotes = function(text) {
    return text.replace(/'\b\w+\b'/g, "\"");
};

exports.singleToDoubleQuotes = singleToDoubleQuotes;