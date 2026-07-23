const verificarInventarioReactivos = (inventarioActual, requeridos) => {
    let faltantes = [];

    for (let i = 0; i < requeridos.length; i++) {
        const itemReq = requeridos[i];
        const itemActual = inventarioActual.find(item => item.reactivo === itemReq.reactivo);

        if (!itemActual || itemActual.cantidad < itemReq.cantidad) {
            const cantidadDisponible = itemActual ? itemActual.cantidad : 0;
            const deficit = itemReq.cantidad - cantidadDisponible;
            faltantes.push({
                reactivo: itemReq.reactivo,
                deficit: deficit,
                motivo: "Stock insuficiente para completar la fórmula química."
            });
        }
    }

    return {
        inventarioSuficiente: faltantes.length === 0,
        reporteFaltantes: faltantes.length > 0 ? faltantes : ["Todos los reactivos están disponibles en cantidades suficientes."]
    };
};

const stockActual = [
    { reactivo: "Hidrógeno", cantidad: 50 },
    { reactivo: "Oxígeno", cantidad: 20 },
    { reactivo: "Carbono", cantidad: 10 }
];

const formulaAguaReq = [
    { reactivo: "Hidrógeno", cantidad: 40 },
    { reactivo: "Oxígeno", cantidad: 25 }
];

console.log(verificarInventarioReactivos(stockActual, formulaAguaReq));
console.log(verificarInventarioReactivos(stockActual, [{ reactivo: "Carbono", cantidad: 5 }]));