function filterActiveUsers(users) {
    if (!Array.isArray(users)) {
        throw new TypeError('users debe ser un array');
    }
    return users.filter(u =>
        typeof u.id === 'number' &&
        typeof u.username === 'string' &&
        typeof u.active === 'boolean' &&
        u.active === true
    );
}

module.exports = { filterActiveUsers };
