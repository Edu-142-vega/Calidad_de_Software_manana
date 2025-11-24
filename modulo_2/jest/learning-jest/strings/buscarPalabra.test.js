const { buscarPalabra } = require('./buscarPalabra');

describe('Buscar Palabra', () => {

    test('Happy path: buscar "jest" en frase', () => {
        const resultado = buscarPalabra('Hola Jest mundo Jest', 'Jest');
        expect(resultado).toBe(2);
    });

    test('Sad path: ERROR en frase inválida', () => {
        expect(() => buscarPalabra(null, 'jest'))
            .toThrow('frase invalida');
    });

    test('Sad path: ERROR en palabra inválida', () => {
        expect(() => buscarPalabra('Hola Jest mundo', 123))
            .toThrow('palabra invalida');
    });

});
