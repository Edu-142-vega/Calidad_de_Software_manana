function buscarPalabra(frase, palabra) {
    if (!frase || typeof frase !== 'string') {
        throw new TypeError('frase invalida');
    }
    if (!palabra || typeof palabra !== 'string') {
        throw new TypeError('palabra invalida');
    }

    const palabras = frase.trim().toLowerCase().split(/\s+/);
    return palabras.filter(p => p === palabra.toLowerCase()).length;
}

module.exports = { buscarPalabra };