function calcularTotalCafeteria(items, ivaPorcentaje) {
    if (!Array.isArray(items) || items.length === 0) {
        throw new TypeError('items invalidos');
    }
    
    if (typeof ivaPorcentaje !== 'number' || ivaPorcentaje < 0 || ivaPorcentaje > 100) {
        throw new TypeError('items invalidos');
    }

    let subtotal = 0;
    for (const item of items) {
        const subtotalItem  = item.precioUnitario * item.cantidad;
        subtotal += subtotalItem;
    }

    const iva = subtotal * (ivaPorcentaje / 100);
    const total = subtotal + iva;

    return { subtotal, iva, total };
}

module.exports = { calcularTotalCafeteria };