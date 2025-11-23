function evaluarDesempeno(mediciones) {
    if (!Array.isArray(mediciones) || mediciones.length === 0) {
        throw new TypeError('lista inválida');
    }
    let suma = 0;
    for (const medicion of mediciones) {
        if (typeof medicion !== 'number' || medicion < 0 || medicion > 10) {
            throw new TypeError('medición inválida');
        }
        suma += medicion;
    }
    const promedio = suma / mediciones.length;
    if (promedio < 6) {
        return 'bajo';
    } else if (promedio >= 6 && promedio < 8) {
        return 'aceptable';
    } else { 
        return 'ocho o más alto';
    }
}
module.exports = { evaluarDesempeno };