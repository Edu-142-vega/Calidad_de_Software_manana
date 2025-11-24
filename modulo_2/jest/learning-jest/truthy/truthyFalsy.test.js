const {
    esTruthy,
    retornDefault,
    requiereTextoNoVacio
} = require('./truthyFalsy');

describe('Truthy / Falsy', () => {
    test('Happy path: valores truthy/falsy', () => {
        expect(esTruthy('hola')).toBeTruthy();
        expect(esTruthy('')).toBeFalsy();
        expect(esTruthy(0)).toBeFalsy();
        expect(esTruthy(null)).toBeFalsy();
        expect(esTruthy(undefined)).toBeFalsy();
        expect(esTruthy(NaN)).toBeFalsy();
    });

    test('Happy path: retornDefault usa falsy para asignar defecto', () => {
        expect(retornDefault('valor', 'defecto')).toBe('valor');
        expect(retornDefault('', 'defecto')).toBe('defecto');
        expect(retornDefault(0, 10)).toBe(10);
    });

    test('Sad path: requiereTextoNoVacio lanza en falsy o no string', () => {
        expect(() => requiereTextoNoVacio('')).toThrow('texto requerido');
        expect(() => requiereTextoNoVacio('     ')).toThrow('texto requerido');
        expect(() => requiereTextoNoVacio(null)).toThrow('texto requerido');
        expect(requiereTextoNoVacio('  Jest  ')).toBe('Jest');
    });
});
