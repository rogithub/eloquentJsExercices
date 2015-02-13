function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.z = 3;

function VectorHijo(x, y) {
  Vector.call(this, x, y);
  this.nombre = "Hijo de Vector";
}
VectorHijo.prototype = Object.create(Vector.prototype);
VectorHijo.prototype.z = 4;

var vector = new Vector(1, 2);
var vector2 = new Vector(5, 8);
var vector3 = new VectorHijo(6, 6);


var objectToIterate = vector3;
for(var property in objectToIterate) {
  if (objectToIterate.hasOwnProperty(property)) {    
    console.log(property + " (own) tiene el valor " + objectToIterate[property]); 
  }else{    
    console.log(property + " (proto) tiene el valor " + objectToIterate[property]); 
  }
}
