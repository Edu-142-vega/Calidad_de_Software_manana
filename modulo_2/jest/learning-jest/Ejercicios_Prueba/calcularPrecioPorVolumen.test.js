const { calcularPrecioPorVolumen } = require('./calcularPrecioPorVolumen');

describe('calcularPrecioPorVolumen', () => {
    const precioUnitario = 100;
    test('Happy path: No aplica descuento para 10 unidades o menos', () => {
        expect(calcularPrecioPorVolumen(5, precioUnitario)).toBe(500); 
        expect(calcularPrecioPorVolumen(10, precioUnitario)).toBe(1000); 
    });
    test('happy path: Aplica 5% de descuento para 11 a 20 unidades', () => {
        expect(calcularPrecioPorVolumen(15, precioUnitario)).toBe(1425);
        expect(calcularPrecioPorVolumen(20, precioUnitario)).toBe(1900);
    });
    test('happy path: Aplica 10% de descuento para más de 20 unidades', () => {
        expect(calcularPrecioPorVolumen(25, precioUnitario)).toBe(2250);
    });
    test('sad path: si los parámetros son inválidos devuelve "datos invalidos"', () => {
        expect(calcularPrecioPorVolumen(15, 0)).toBe('datos inválidos');
        expect(calcularPrecioPorVolumen(-5, 100)).toBe('datos inválidos');
        expect(calcularPrecioPorVolumen('texto', 100)).toBe('datos inválidos');
    });
});