const validarMasaMolar = (elementos) => {
    if (!elementos || elementos.length === 0) {
        return { error: "La lista de elementos químicos está vacía." };
    }

    let masaTotal = 0;
    let errores = [];

    for (let i = 0; i < elementos.length; i++) {
        const item = elementos[i];

        // Validaciones numéricas de rangos y tipos
        if (typeof item.masaAtomica !== 'number' || isNaN(item.masaAtomica)) {
            errores.push(`El elemento ${item.simbolo || i} tiene una masa atómica no numérica.`);
        } else if (item.masaAtomica <= 0) {
            errores.push(`El elemento ${item.simbolo} tiene una masa atómica inválida (menor o igual a 0).`);
        }

        if (typeof item.cantidad !== 'number' || item.cantidad <= 0) {
            errores.push(`El elemento ${item.simbolo || i} tiene una cantidad inválida.`);
        }

        if (errores.length === 0) {
            masaTotal += item.masaAtomica * item.cantidad;
        }
    }

    if (errores.length > 0) {
        return {
            valido: false,
            errores_detectados: errores
        };
    }

    return {
        valido: true,
        masa_molar_total: parseFloat(masaTotal.toFixed(2)),
        explicacion: "Se validaron correctamente los rangos numéricos de masas y cantidades para calcular la masa molar del compuesto."
    };
};

const compuestoNormal = [
    { simbolo: "H", masaAtomica: 1.01, cantidad: 2 },
    { simbolo: "O", masaAtomica: 16.00, cantidad: 1 }
];

const compuestoInvalido = [
    { simbolo: "C", masaAtomica: -12.01, cantidad: 1 },
    { simbolo: "Na", masaAtomica: "22.99", cantidad: 0 }
];

console.log(validarMasaMolar(compuestoNormal));
console.log(validarMasaMolar(compuestoInvalido));