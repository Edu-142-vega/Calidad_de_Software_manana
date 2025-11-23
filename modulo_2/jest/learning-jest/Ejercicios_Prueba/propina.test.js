const {calcularPropina} = require('./propinaRestaurante.js')
describe('Calcular propina', () => {
    test('Happy Path',()=>{
        const valorEsperado = {cuenta: 10,propina: 1.5,totalPagar: 11.5}
        const resultado = calcularPropina(10,15);
        expect(resultado).toEqual(valorEsperado)
    });
    test('Sad path: cuenta invalida',()=>{
        expect(() => calcularPropina(-10, 10)).toThrow('cuenta invalida');
    });
    test('Sad path: porcentaje invalido',()=>{
        expect(() => calcularPropina(20, -5)).toThrow('porcentaje invalido');
    });
    test('Sad path: porcentaje invalido',()=>{
        expect(() => calcularPropina(20, 150)).toThrow('porcentaje invalido');
    });
});