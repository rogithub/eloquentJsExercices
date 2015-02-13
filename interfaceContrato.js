
function Auto() {
  this.conducir = function(conductor) {
    return conductor + " estaá manejando un Auto";
  }
}

function Camion(){
  this.conducir = function(conductor) {
    return conductor + " está manejando un camión";
  }
}


var conductores = ["Moi", "David", "Pepe"];
var vehiculos = [ new Auto(), new Camion() ];

for(var i = 0; i < conductores.length; i++) {
  for (var j = 0; j < vehiculos.length; j++){
    var persona = conductores[i];
    var vehiculo = vehiculos[j];

    console.log(vehiculo.conducir(persona));
  }
}

