const { evaluarDesempeno } = require('./evaluarDesempeno');

describe('evaluarDesempeno', () => {
    test('happy path: clasificacion del desempeño segun el promedio', () => {
        expect(evaluarDesempeno([5, 5.9])).toBe('bajo');
        expect(evaluarDesempeno([6, 7.9])).toBe('aceptable');
        expect(evaluarDesempeno([8, 10])).toBe('ocho o más alto');
    });
    test('sad path: TypeError para lista inválida o vacía', () => {
        expect(() => evaluarDesempeno([])).toThrow('lista inválida');
        expect(() => evaluarDesempeno(null)).toThrow('lista inválida');
    });
    test('sad path: TypeError para medición inválida fuera de 0-10 o no numérica', () => {
        expect(() => evaluarDesempeno([5, 12, 8])).toThrow('medición inválida');
        expect(() => evaluarDesempeno([5, 'seis', 8])).toThrow('medición inválida');
    });
});