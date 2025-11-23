const { calcularBonoAntiguedad } = require('./calcularBonoAntiguedad');

describe('calcularBonoAntiguedad', () => {
    test('Happy path: calcula bono 0% para 0 a 2 años', 
        () => {
        expect(calcularBonoAntiguedad(1, 5000)).toBe(0); 
        expect(calcularBonoAntiguedad(2, 5000)).toBe(0);
    });
    test('Happy path: calcula bono 5% para 3 a 5 años',
         () => {
        const salario = 4000;
        const bonoEsperado = 4000 * 0.05; 
        expect(calcularBonoAntiguedad(3, salario)).toBe(bonoEsperado);
        expect(calcularBonoAntiguedad(5, salario)).toBe(bonoEsperado);
    });
    test('happy path: calcula bono 10% para más de 5 años', () => {
        const salario = 6000;
        const bonoEsperado = 6000 * 0.10; 
        expect(calcularBonoAntiguedad(6, salario)).toBe(bonoEsperado);
        expect(calcularBonoAntiguedad(15, salario)).toBe(bonoEsperado);
    });
    test('sad path: devuelve "datos invalidos" para tipos incorrectos o negativos', () => {
        expect(calcularBonoAntiguedad('cinco', 5000)).toBe('datos invalidos');
        expect(calcularBonoAntiguedad(5, 'cinco mil')).toBe('datos invalidos');
        expect(calcularBonoAntiguedad(-1, 5000)).toBe('datos invalidos');
        expect(calcularBonoAntiguedad(5, 0)).toBe('datos invalidos');
        expect(calcularBonoAntiguedad(5, -100)).toBe('datos invalidos');
    });
});