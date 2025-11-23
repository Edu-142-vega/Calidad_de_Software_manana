function calcularBonoAntiguedad(anios,salarioBase){
    if(
        typeof anios !== 'number'||
        typeof salarioBase !== 'number'||
        anios < 0||
        salarioBase <= 0
    ){
        return 'datos invalidos'
    }
    let bono = 0;
    if(anios <=2 ){
        bono = 0;
    }
    else if (anios >= 3 && anios <= 5){
        bono = salarioBase * 0.05;
    }
    else {
        bono = salarioBase * 0.10;
    }
    return bono;
}

module.exports = { calcularBonoAntiguedad };