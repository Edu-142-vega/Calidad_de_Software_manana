function buscarAlumno(alumnos, nombre) {
    if (!Array.isArray(alumnos)) {
        throw new TypeError('alumnos debe ser un array');
    }

    if (typeof nombre !== 'string' || !nombre.trim()) {
        throw new TypeError('nombre invalido');
    }

    const found = alumnos.find(a => a?.nombre === nombre.trim());
    return found ?? null;
}

function leerProp(obj, prop) {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        throw new TypeError('obj invalido');
    }

    if (typeof prop !== 'string' || !prop.trim()) {
        throw new TypeError('prop invalida');
    }

    return obj[prop];
}

module.exports = { buscarAlumno, leerProp };
