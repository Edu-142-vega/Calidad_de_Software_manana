const { maximo } = require('./maximo');


describe('maximo', () =>{
    test('Happy path: [4,9,2,10]', () => {
        expect(maximo([4,9,2,10])).toBe(10);
    });

    test('Happy path: [-5,-1]', () => {
        expect(maximo([-5,-1])).toBe(-1);
    });

    test('Sad path: arreglo invalido', () => {
        expect(()=>maximo([])).toThrow('arreglo invalido');
        expect(()=>maximo('edificio')).toThrow('arreglo invalido');
    });
});
