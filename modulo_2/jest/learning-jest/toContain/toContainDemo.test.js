const {
    obtenerFrutas,
    contienePalabra,
    agregarElemento
} = require('./toContainDemo');

describe('toContain Matcher', () => {
    test('Happy path: elemento dentro de array', () => {
        const frutas = obtenerFrutas(['manzana', 'pera', 'uva']);
        expect(frutas).toContain('pera');
    });

    test('Sad path: palabra dentro de texto', () => {
        const texto = 'Hola mundo Jest';
        expect(contienePalabra(texto, 'Jest')).toBe(true);
        expect(contienePalabra(texto, 'Angular')).toBe(false);
    });

    test('Sad path: elemento no encontrado o tipo incorrecto', () => {
        const frutas = obtenerFrutas(['manzana', 'pera']);
        expect(frutas).not.toContain('uva');
    });

    test('Sad path: elementos invalidos', () => {
        expect(() => obtenerFrutas('no array'))
            .toThrow('Lista debe ser array');
        expect(() => agregarElemento('no array', 'pera'))
            .toThrow('Lista debe ser array');
        expect(() => agregarElemento([], null))
            .toThrow('Lista no puede ser vacio');
    });
});
