function calcularPrecioPorVolumen(cantidad, precioUnitario) {
    if (
        typeof cantidad !== 'number' ||
        typeof precioUnitario !== 'number' ||
        cantidad < 0 ||
        precioUnitario <= 0
    ) {
        return 'datos inválidos';
    }
    let descuento = 0.0;
    const subtotal = cantidad * precioUnitario;

    if (cantidad <= 10) {
        descuento = 0.00; 
    } else if (cantidad > 10 && cantidad <= 20) {
        descuento = 0.05; 
    } else { 
        descuento = 0.10; 
    }
    const precioFinal = subtotal * (1 - descuento);
    return precioFinal;
}
modulo.exports = { calcularPrecioPorVolumen };