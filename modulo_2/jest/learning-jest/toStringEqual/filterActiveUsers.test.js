const { filterActiveUsers } = require('./filterActiveUsers');

describe('Filtrar Usuarios Activos', () => {
    test('Happy path: Usuarios Filtrados Correactemente', () => {
        const users = [
            { id: 1, username: "higueraf", active: true },
            { id: 2, username: "ana", active: false },
        ];

        const response = filterActiveUsers(users);

        const expectedUsers = [
            { id: 1, username: "higueraf", active: true }
        ];

        expect(response).toStrictEqual(expectedUsers);
    });

    test('Sad path: Falla si falta una propiedad o cambia el tipo', () => {
        const users = [
            { id: 1, username: "higueraf", active: true },
            { id: 2, username: "ana", active: 'true' }
        ];

        const response = filterActiveUsers(users);

        const expectedInvalid = [
            { id: 1, username: "higueraf", active: 'true' }
        ];

        expect(response).not.toStrictEqual(expectedInvalid);
    });
});
