function calcularPagoHorasExtras(horasTrabajadas, horasBase, tarifaHora, factorExtra) {
    if (
        typeof horasTrabajadas !== 'number' ||
        typeof horasBase !== 'number' ||
        typeof tarifaHora !== 'number' ||
        typeof factorExtra !== 'number' ||
        horasTrabajadas < 0 ||
        horasBase <= 0 ||
        tarifaHora <= 0 ||
        factorExtra < 0
    ) {
        throw new TypeError('parametros inválidos');
    }

    if (horasTrabajadas <= horasBase) {
        return horasTrabajadas * tarifaHora;
    }

    const horasExtra = horasTrabajadas - horasBase;
    const pagoBase = horasBase * tarifaHora;
    const tarifaExtra = tarifaHora * factorExtra;
    const pagoExtra = horasExtra * tarifaExtra;
    
    return pagoBase + pagoExtra;
}

module.exports = { calcularPagoHorasExtras };