const { promedio } = require('./promedio');


describe('promedio', () =>{
    test('Happy path: [3,5,1] promedio 3', () => {
        expect(promedio([3,5,1])).toEqual(3);
    });

    test('Sad path: edades invalidas', () => {
        expect(()=>promedio('arreglo')).toThrow('arreglo invalido');
    });
});
