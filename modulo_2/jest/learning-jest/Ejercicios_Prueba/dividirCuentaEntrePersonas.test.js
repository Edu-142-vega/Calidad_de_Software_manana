const { dividirCuentaEntrePersonas } = require('./dividirCuentaEntrePersonas');

describe('dividirCuentaEntrePersonas', () => {

    test('Happy path: Calcula divisiones exactas y no exactas', () => {
        expect(dividirCuentaEntrePersonas(100, 4)).toBe(25);
        expect(dividirCuentaEntrePersonas(100, 3)).toBeCloseTo(33.33);
        expect(dividirCuentaEntrePersonas(50, 1)).toBe(50);
    });
    test('sad path: TypeError "cuenta inválida" para valores de cuenta inválidos', () => {
        expect(() => dividirCuentaEntrePersonas('cien', 4)).toThrow('cuenta inválida');
        expect(() => dividirCuentaEntrePersonas(-10, 4)).toThrow('cuenta inválida');
    });
    test('sad path: TypeError "personas inválidas" para número de personas inválido', () => {
        expect(() => dividirCuentaEntrePersonas(100, 0)).toThrow('personas inválidas');
        expect(() => dividirCuentaEntrePersonas(100, 2.5)).toThrow('personas inválidas');
        expect(() => dividirCuentaEntrePersonas(100, -2)).toThrow('personas inválidas');
        expect(() => dividirCuentaEntrePersonas(100, 'cuatro')).toThrow('personas inválidas');
    });
});