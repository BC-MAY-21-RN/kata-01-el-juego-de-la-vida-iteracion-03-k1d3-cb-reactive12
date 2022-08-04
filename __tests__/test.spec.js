const {salida, contarVecinosTotal, contarVecinosColumnasLaterales,
    contarVecinosMedios} = require('../funciones-test');

const Matriz = require('../models/matriz');



describe("Test", () => {
    
    test("Testear salida", () => {
        let inicial = salida()
        let final = [
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '*', '*', '.', '.', '.'],
            ['.', '.', '.', '*', '*', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.']
          ];
      expect(inicial).toEqual(final)
    });

    //Test para comprobar vecinos de una celula
    test('Test counting total neighbors', ()=>{
        let inicial = contarVecinosTotal();
        expect(inicial).toBe(3);
    })

    //Test para comprobar los vecinos laterales.
    //CELULA EN LA POSICION (2,3)

    test('Test counting neighbors laterales', ()=>{
        let inicial = contarVecinosColumnasLaterales();
        expect(inicial).toBe(2);
    })

    //TEST CONTAR LOS VECINOS MEDIOS POSICION (2,3)
    test('Test Contar vecinos Medios', ()=>{
        let vecinos = contarVecinosMedios()
        expect(vecinos).toBeGreaterThanOrEqual(0)
        expect(vecinos).toBeLessThanOrEqual(2)
    })

    //TEST PARA CHECAR LOS VECINOS DE LA CELULA REVIVIDA
    test('Test Checar celula Revivida', ()=>{
        let inicial = salida()
        let final = [
            ['.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '*', '*', '.', '.', '.'],
            ['.', '.', '.', '*', '*', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.']
          ];
        expect(inicial[1][3]).toEqual(final[1][3]);
    })
  });