//estudiar

function actualizarStock(stockActual, movimiento) {
    if (
        !Number.isInteger(stockActual) ||
        !Number.isInteger(movimiento)
    ) {
        throw new TypeError('valores inválidos');
    }
    const nuevoStock = stockActual + movimiento;
    if (nuevoStock < 0) {
        throw new Error('Stock insuficiente'); 
    }
    return nuevoStock;
}
module.exports = { actualizarStock };