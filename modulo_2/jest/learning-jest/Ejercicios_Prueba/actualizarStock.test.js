const { actualizarStock } = require('./actualizarStock');

describe('actualizarStock', () => {    
    test('Happy path: Aumenta el stock correctamente', () => {
        expect(actualizarStock(50, 10)).toBe(60); 
    });
    test('Happy path: Disminuye el stock correctamente sin quedar negativo', () => {
        expect(actualizarStock(50, -40)).toBe(10); 
        expect(actualizarStock(50, -50)).toBe(0); 
    });
    test('Sad path: si el resultado es negativo "stock insuficiente"', () => {
        expect(() => {
            actualizarStock(50, -60);
        }).toThrow('Stock insuficiente'); 
    });
    test('sad path: valores invalidos si no son enteros', () => {
        expect(() => {
            actualizarStock(50, 10.5);
        }).toThrow(TypeError); 
        expect(() => {
            actualizarStock(50, 10.5);
        }).toThrow('valores inválidos'); 
    });
});