function dividirCuentaEntrePersonas(totalCuenta, numeroPersonas) {
    if (typeof totalCuenta !== 'number' || totalCuenta < 0) {
        throw new TypeError('cuenta inválida');
    }
    if (
        typeof numeroPersonas !== 'number' ||
        !Number.isInteger(numeroPersonas) ||
        numeroPersonas < 1
    ) {
        throw new TypeError('personas inválidas');
    }
    const pagoPorPersona = totalCuenta / numeroPersonas;
    return pagoPorPersona;
}
module.exports = { dividirCuentaEntrePersonas };