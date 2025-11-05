const { deepMerge, normalizarAlumno } = require('./deepMerge');

describe('Iguadad Profunda', () => {
    test('Happy path: deepMerge' + 'combina objetos anidados por valor', () => {
        const a= {
            user:
            {nombre: 'Ana', rol: 'Estudiante'},
            activo: true
        }

        const b= {
            user:
            {rol: 'tutor'},
            activo: true,
            extra: 1
        }

        const response = deepMerge(a,b)
        expect(response).toEqual(
        {
            user:
            {nombre: 'Ana', rol: 'tutor'},
            activo: true,
            extra: 1
        }
        );
    });



    test('Happy path: Normalizar Alumno' + 'retorna estructura con promedio', () => {
        const alumno = {nombre: 'Ana', notas:[8,9,7]};
        const response2 = normalizarAlumno(alumno);
        expect(response2).toEqual(
            {nombre: 'Ana', notas: [8,9,7], promedio: 8}
        );
    });

    test('Sad path: deepMerge con parametros invalidos', () => {
        expect(() => deepMerge(null, {}))
            .toThrow('b debe ser objeto');
        expect(() => deepMerge({}, []))
            .toThrow('b debe ser objeto');
    });
});