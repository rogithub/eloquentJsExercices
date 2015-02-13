'use strict';

// suponga por un momento que usted manda llamar a la siguiente funcion
// que no recibe aparéntemente ningún parámetro.
function print() {
    // Aún así la variable especial "arguments"
    // contiene todos los parámetros recibidos,
    // en forma de array.
    
    // Todas las funciones de JavaScript tienen 
    // internamente la variable "arguments"
    for(var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

print("hola", "mundo", "de JavaScript");

// "persona" es el objeto que se bindeará a la función "f".
// Esto significa que dentro de "f" la palabra reservada
// "this" será una referencia a "persona". 
// O sea que "this" y "persona", dentro de "f" serán uno y lo mismo.
var persona = { nombre: "Juan" };

var f = function(text) {
    // Dentro de "f", "this" corresponderá 
    // al objeto bindeado, o sea "persona".
    // Note cómo en las funciones de printCall, printApply y printBind,
    // de alguna manera se le manda "persona" a la función "f".
    console.log(text + " Mi nombre es: " + this.nombre);
}

function printCall(text) {
    // call recibe el contexto que es el objecto a bindear y
    // cada uno de los parámetros de "f", separados por coma,
    // y manda llamar a la function "f".
    
    // A diferencia de simplemente llamar "f" con los
    // paréntesis f(text), call nos permite bindear "persona"
    // a "f".
    
    f.call(persona, text);    
}

function printApply() {
    // apply recibe el contexto que es el objeto a bindear y
    // cada uno de los parámetros de "f" en forma de array,
    // y manda llamar "f".
    
    // La principal diferencia con call es que en vez de mandarle
    // los parámetros a "f" separados por coma, se los manda en array.
    // Esto nos permite tomar simplemente "arguments" de printApply y
    // pasárle ese array a apply.
    
    f.apply(persona, arguments);
}

function printBind(text) {
    // "bind" sólo recibe el contexto que es el objeto a bindear,
    // y regresa una nueva función que es escencialmente "f" pero
    // con el contexto ya bindeado.
    
    // La principal diferencia es que "call" y "apply" llaman directamente a "f"
    // mientras que bind regresa otra funcion wrapper de "f".
    
    // A continuación simplemente llamamos "bound(text)" como si llamáramos
    // a "f(text)". La diferencia es que "bound" está bindeada al contexto "persona".
    
    var bound = f.bind(persona);
    bound(text);
}

printCall("Hola con Call.");
printApply("hola con Apply.");
printBind("hola con Bind.");