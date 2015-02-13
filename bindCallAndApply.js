'use strict';

//Este es el objeto persona que se bindeará a la función "f".
//Esto significa que dentro de "f" la palabra reservada
//"this" será una referencia a "persona". O sea que "this" y "persona" 
//dentro de "f" serán uno y lo mismo.
var persona = { nombre: "Juan" };

var f = function(text) {
    // en este caso "this" corresponderá 
    // al objeto bindeado o sea "persona".
    // Note como en las siguientes funciones de 
    // printCall, printApply y printBind, de alguna
    // manera se le manda "persona" junto con "f".
    console.log(text + " Mi nombre es: " + this.nombre);
}

function printCall(text) {
    //call recibe los argumentos separados por coma
    //y manda llamar a la function "f".
    //A diferencia de simplemente llamar "f" con los
    //paréntesis f(), call nos permite bindear "persona"
    //a "f".
    
    f.call(persona, text);    
}

function printApply() {
    // apply recibe los argumentos en forma de arreglo
    // en lugar de separados por coma. Y manda llamar la función f.
    // Note la variable especial "arguments" que contiene
    // todos los argumentos pasados a printApply().
    // Note también que nos permite bindear "persona"
    f.apply(persona, arguments);
}

function printBind(text) {
    // "bind" crea y regresa una nueva función en este caso "bound".
    // la cual contiene una llamada a "f" pero bindeada a "persona".
    // note que esta característica ya la tienen call y apply.
    // la diferencia es q "call" y "apply" llaman directamente a "f"
    // pero "bind" sólo crea una nueva función wraper, la cual hay que
    // llamará explísitamente con paréntesis bound(text);
    
    var bound = f.bind(persona);
    bound(text);
}

printCall("Hola con Call.");
printApply("hola con Apply.");
printBind("hola con Bind.");