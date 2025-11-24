function esTruthy(valor) {
    return !!valor;
}

function retornDefault(valor, defecto) {
    return valor || defecto;
}

function requiereTextoNoVacio(texto) {
    if (typeof texto !== 'string') {
        throw new TypeError('texto requerido');
    }

    const trimmed = texto.trim();
    if (!trimmed) {
        throw new TypeError('texto requerido');
    }

    return trimmed;
}

module.exports = {
    esTruthy,
    retornDefault,
    requiereTextoNoVacio
};
