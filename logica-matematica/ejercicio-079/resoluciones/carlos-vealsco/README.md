# Logica general 079 - sistema de validación numérica y cálculo de masa molar

## Motor de Validación de Tipos y Rangos para Compuestos Químicos

Este script analiza un arreglo de objetos que representan elementos químicos de un compuesto, aplicando rigurosas validaciones numéricas sobre su masa atómica y cantidad antes de calcular la masa molar total del sistema.

* **Descripción del proceso:**
* **Validación de Integridad General**: Verifica si el arreglo de `elementos` está vacío o es nulo, retornando un objeto de error en caso de cumplirse.
* **Inicialización de Contadores**: Define un acumulador numérico para la masa total (`masaTotal`) y un arreglo (`errores`) para recolectar incidencias de validación.
* **Recorrido y Validaciones Numéricas**: Itera sobre cada elemento evaluando:
* Si la `masaAtomica` es un número válido y estrictamente mayor a 0.
* Si la `cantidad` es un número válido y estrictamente mayor a 0.


* **Acumulación de Resultados**: Si no se detectan errores en el elemento actual, multiplica su masa atómica por su cantidad y la suma a la masa molar total.
* **Retorno del Dictamen**: Si existen errores recopilados, retorna un reporte con el estatus falso y la lista de fallos; de lo contrario, entrega la masa molar calculada y redondeada a dos decimales.


* **Tecnologías:**
* JavaScript (verificación de tipos de datos con `typeof`, evaluación con `isNaN`, manipulación de arreglos y formato numérico).



---

### Explicación técnica

1. **Control de Tipos y Rangos**: El uso de validaciones estrictas (`typeof` e `isNaN`) previene fallos derivados de datos mal tipados (como strings que simulan números), asegurando la integridad del cálculo físico-químico.
2. **Auditoría de Errores Múltiples**: A diferencia de las validaciones que se detienen en el primer fallo, este algoritmo recorre todo el conjunto para acumular todas las inconsistencias presentes, facilitando la depuración completa de datos erróneos.

### Lógica del Código

```javascript
const validarMasaMolar = (elementos) => {
    // 1. Validar si la lista está vacía o nula
    if (!elementos || elementos.length === 0) {
        return { error: "La lista de elementos químicos está vacía." };
    }

    let masaTotal = 0;
    let errores = [];

    // 2. Iterar sobre cada elemento del compuesto
    for (let i = 0; i < elementos.length; i++) {
        const item = elementos[i];

        // Validaciones numéricas de rangos y tipos para masa atómica
        if (typeof item.masaAtomica !== 'number' || isNaN(item.masaAtomica)) {
            errores.push(`El elemento ${item.simbolo || i} tiene una masa atómica no numérica.`);
        } else if (item.masaAtomica <= 0) {
            errores.push(`El elemento ${item.simbolo} tiene una masa atómica inválida (menor o igual a 0).`);
        }

        // Validaciones numéricas de rangos y tipos para cantidad
        if (typeof item.cantidad !== 'number' || item.cantidad <= 0) {
            errores.push(`El elemento ${item.simbolo || i} tiene una cantidad inválida.`);
        }

        // Si no hay errores previos en este ciclo, acumular masa molar
        if (errores.length === 0) {
            masaTotal += item.masaAtomica * item.cantidad;
        }
    }

    // 3. Retornar errores si se detectaron anomalías
    if (errores.length > 0) {
        return {
            valido: false,
            errores_detectados: errores
        };
    }

    // 4. Retornar resultado exitoso con masa molar calculada
    return {
        valido: true,
        masa_molar_total: parseFloat(masaTotal.toFixed(2)),
        explicacion: "Se validaron correctamente los rangos numéricos de masas y cantidades para calcular la masa molar del compuesto."
    };
};

```

### Salida Esperada

```json
{
  "valido": true,
  "masa_molar_total": 18.02,
  "explicacion": "Se validaron correctamente los rangos numéricos de masas y cantidades para calcular la masa molar del compuesto."
}
{
  "valido": false,
  "errores_detectados": [
    "El elemento C tiene una masa atómica inválida (menor o igual a 0).",
    "El elemento Na tiene una cantidad inválida."
  ]
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-079/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco