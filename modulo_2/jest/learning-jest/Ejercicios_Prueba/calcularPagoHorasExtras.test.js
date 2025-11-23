const { calcularPagoHorasExtras } = require('./calcularPagoHorasExtras');

describe('calcularPagoHorasExtras', ()=>{
    test('Happy path: calcula el pago base cuando las horas trabajadas son iguales o menores a las horas base',
        ()=>{
            const horasBase = 40;
            const tarifaHora = 10;
            const factorExtra = 1.5;
            const pagoJusto = calcularPagoHorasExtras(40,horasBase,tarifaHora,factorExtra);
            expect(pagoJusto).toBe(400);

            const pagoMenor = calcularPagoHorasExtras(35,horasBase,tarifaHora,factorExtra);
            expect(pagoMenor).toBe(350);
        });
    test('Happy path: calcula el pago total correctamente con horas extras',
        ()=> {
            const horasTrabajadas = 50;
            const horasBase = 40;
            const tarifaHora = 10;
            const factorExtra = 1.5;
            
            const pagoConExtra = calcularPagoHorasExtras(horasTrabajadas,horasBase,tarifaHora,factorExtra);
            expect(pagoConExtra).toBe(550);
    });
    test('Sad path: lanza TypeError si algún parámetro no es un número o es inválido',()=>{
        expect(()=>{
            calcularPagoHorasExtras(50,40,'diez',1.5);
        }).toThrow(TypeError);
        expect(()=>{
            calcularPagoHorasExtras(50,0,10,1.5);
        }).toThrow(TypeError);
        expect(()=>{
            calcularPagoHorasExtras(-10,40,10,1.5);
        }).toThrow(TypeError);
    });
});