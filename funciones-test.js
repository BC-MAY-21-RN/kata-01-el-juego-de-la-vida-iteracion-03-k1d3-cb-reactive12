const Matriz = require("./models/matriz");
//FUNCION PARA PRUEBA
let matriz = new Matriz(8, 4);

const salida = () => {
  matriz.crearMatriz();
  matriz.llenarMatriz();
  let celulasVivas = [
    [1, 4],
    [2, 3],
    [2, 4],
  ];
  matriz.fillLiveCells(celulasVivas);
  console.log("________________");
  return matriz.siguienteGeneracion();
};

//TEST CONTAR VECINOS DE LA CELULA EN LA POSICION (1,3)
const contarVecinosTotal = ()=>{
    return matriz.countNeighbours(1,3);
}

//TEST CONTAR LOS VECINOS DE LAS COLUMNAS DE LOS COSTADOS
//CELULA EN LA POSICION (2,3)
const contarVecinosColumnasLaterales = ()=>{
    let count = 0;
     count += matriz.contarLados(1,2); //Columna izquiera
     count += matriz.contarLados(1,4); //Columna derecha

     return count;
}

//TEST CONTAR LOS VECINOS MEDIOS POSICION (2,3)
const contarVecinosMedios = ()=>{
    return matriz.contarMedios(2,3);
}


//TEST REVIVIR CELULA MUERTA 

module.exports = {
    salida,
    contarVecinosTotal,
    contarVecinosColumnasLaterales,
    contarVecinosMedios
};