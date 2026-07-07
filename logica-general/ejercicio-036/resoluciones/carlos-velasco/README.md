# Logica general 036 - matrices simples

## Sistema de Análisis de Iluminación

Este script recorre una matriz bidimensional (representativa de un render o imagen) para detectar y registrar todas las celdas cuyos valores superen un umbral de luminosidad predefinido.

* **Descripción del proceso:**
* **Iteración Matricial**: Utiliza un bucle anidado para recorrer cada fila y columna de la matriz `render`.
* **Comparación**: Evalúa si el valor en la posición `(f, c)` es estrictamente mayor al `umbral` proporcionado.
* **Registro de hallazgos**: Si se supera el umbral, almacena la ubicación (fila, columna) y el valor exacto en una lista.
* **Reporte**: Devuelve un objeto que resume el conteo total de puntos sobreexpuestos y el detalle individual de cada uno.


* **Tecnologías:**
* JavaScript (bucles anidados, manipulación de arreglos y objetos).

---

### Explicación técnica

1. **Eficiencia Algorítmica**: El algoritmo utiliza una complejidad temporal de orden $O(n \times m)$, donde $n$ es el número de filas y $m$ es el de columnas, lo cual es óptimo para recorrer completamente una estructura bidimensional.
2. **Modularidad de Datos**: Al devolver un objeto estructurado, la función permite que el sistema de post-procesamiento decida qué hacer con la información (por ejemplo, corregir automáticamente los píxeles identificados).
3. **Flexibilidad**: El parámetro `umbral` permite reutilizar la misma función para diferentes criterios de calidad o diferentes tipos de sensores (luz, calor, presión, etc.).

### Lógica del Código

```javascript
const analizarIluminacion = (matriz, umbral) => {
    let zonasSobreexpuestas = [];

    // Recorrido de la matriz (filas y columnas)
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz[f].length; c++) {
            // Comparación contra el umbral
            if (matriz[f][c] > umbral) {
                zonasSobreexpuestas.push({ fila: f, columna: c, valor: matriz[f][c] });
            }
        }
    }

    // Retorno del informe
    return {
        total: zonasSobreexpuestas.length,
        detalles: zonasSobreexpuestas
    };
};

```

### Salida Esperada

```text
{
  total: 3,
  detalles: [
    { fila: 0, columna: 1, valor: 250 },
    { fila: 1, columna: 1, valor: 300 },
    { fila: 2, columna: 2, valor: 260 }
  ]
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-general/
    └── ejercicio-036/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco