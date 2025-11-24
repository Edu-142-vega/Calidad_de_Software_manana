function enMayusculas(texto) {
    if (typeof texto !== 'string') {
        throw new TypeError('texto invalido');
    }
    return texto.toUpperCase();
}

module.exports = { enMayusculas };
