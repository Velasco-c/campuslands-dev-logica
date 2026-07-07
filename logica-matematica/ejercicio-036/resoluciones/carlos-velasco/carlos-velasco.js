const calcularPresupuesto = (horas, costoHora, altaCalidad) => {
    let total = horas * costoHora;

    if (horas > 50) {
        total -= total * 0.15;
    }

    if (altaCalidad) {
        total += total * 0.20;
    }

    return {
        presupuesto_final: total.toFixed(2),
        explicacion: `Cálculo aplicado con ${horas > 50 ? 'descuento de 15%' : 'tarifa estándar'} y ${altaCalidad ? 'recargo de alta calidad 20%' : 'calidad estándar'}.`
    };
};

console.log(calcularPresupuesto(60, 100, true));
console.log(calcularPresupuesto(20, 100, false));