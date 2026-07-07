const analizarIluminacion = (matriz, umbral) => {
    let zonasSobreexpuestas = [];

    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz[f].length; c++) {
            if (matriz[f][c] > umbral) {
                zonasSobreexpuestas.push({ fila: f, columna: c, valor: matriz[f][c] });
            }
        }
    }

    return {
        total: zonasSobreexpuestas.length,
        detalles: zonasSobreexpuestas
    };
};

const render = [
    [100, 250, 50],
    [200, 300, 10],
    [50, 50, 260]
];

console.log(analizarIluminacion(render, 200));