const { buscarAlumno, leerProp } = require('./buscarAlumno');

describe('Null / Undefined / Defined', () => {
    test('Happy path: buscarAlumno devuelve objeto o null', () => {
        const alumnos = [
            { nombre: 'Ana', edad: 20 },
            { nombre: 'Luis', edad: 22 },
        ];

        const encontrado = buscarAlumno(alumnos, 'Ana');
        const noEncontrado = buscarAlumno(alumnos, 'Carlos');

        expect(encontrado).toEqual({ nombre: 'Ana', edad: 20 });
        expect(noEncontrado).toBeNull();
    });

    test('Happy path: leerProp puede ser defined o undefined', ()  => {
        const obj = { a: 1, b: undefined };

        expect(leerProp(obj, 'a')).toBeDefined();
        expect(leerProp(obj, 'b')).toBeUndefined();
        expect(leerProp(obj, 'c')).toBeUndefined();
    });

    test('Sad path: parametros invalidos', () => {
        expect(() => buscarAlumno('no array', 'Ana'))
            .toThrow('alumnos debe ser un array');

        expect(() => buscarAlumno([], ''))
            .toThrow('nombre invalido');

        expect(() => leerProp({}, 123))
            .toThrow('prop invalida');
    });
});
