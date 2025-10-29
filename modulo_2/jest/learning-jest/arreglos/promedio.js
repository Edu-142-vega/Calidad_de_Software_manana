function promedio(arreglo){
    if(!Array.isArray(arreglo) || arreglo.length==0 )
        throw new TypeError("arreglo invalido");
    let total = 0;
    let p = 0;
    while(arreglo.length > p){
        total += arreglo[p]
        p++;
    }
    promedio1 = total/arreglo.length;
    return promedio1
}
module.exports = { promedio };
