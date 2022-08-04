const Matriz = require("./models/matriz");
//FUNCION PARA PRUEBA

let matriz = new Matriz(8, 4);
matriz.crearMatriz();
matriz.llenarMatriz();
let celulasVivas = [
  [1, 4],
  [2, 3],
  [2, 4],
];
matriz.fillLiveCells(celulasVivas);
console.log("________________");
matriz.imprimirMatriz(matriz.siguienteGeneracion());

