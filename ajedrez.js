'use strict';

for(let fila = 0; fila < 8; fila++) {  
  var linea = "";
  // si es fila non empezar con gato
  let empezarConGato = fila % 2 != 0;
  for(let columna = 0; columna < 8; columna ++){    
    let esColumnaPar = columna % 2 == 0;

    if (empezarConGato)
      linea += esColumnaPar ? "#": " ";
    else
      linea += esColumnaPar ? " " : "#";
  }
  console.log(linea);
}

