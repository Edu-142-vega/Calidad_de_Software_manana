const { calcularTotalCafeteria } = require('./consumoCafeteria');

describe('Calcular total cafeteria',()=>{
    const items = [
        { nombre: 'cafe', precioUnitario: 2.5, cantidad: 2 },
        { nombre: 'galleta', precioUnitario: 1, cantidad: 3 }
    ];
    test('Happy Path',()=>{
        expect(calcularTotalCafeteria(items, 12)).toEqual({
            subtotal: 8,
            iva: 0.96,
            total: 8.96
        });
    });
    test('Sad path: items no es arreglo',()=>{
        expect(()=>calcularTotalCafeteria('hola', 12)).toThrow('items invalidos');
    });

    test('Sad path: item invalido',()=>{
        expect(()=> calcularTotalCafeteria(items,'23')).toThrow('items invalidos');
    });
    
    test('Sad path: iva fuera del rango',()=>{
        expect(()=> calcularTotalCafeteria(items, 200)).toThrow('items invalidos');
    });

});