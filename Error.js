'use strict';

let InputError = function (message) {
    this.message = message;
    this.stack = (new Error()).stack;
}

InputError.prototype = Object.create(Error.prototype);
InputError.prototype.name = "InputError";


/*
EXAMPLE...
catch (e) {
    if (e instanceof InputError)
        console.log("Not a valid direction. Try again.");
    else
        throw e;
}*/