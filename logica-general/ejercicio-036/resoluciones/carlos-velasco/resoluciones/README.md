# Plantilla de solución

## Analisis

* **Entrada**: Una `matriz` bidimensional de datos numéricos y un valor `umbral` de tipo numérico.
* **Proceso**: Recorrido iterativo mediante bucles anidados para comparar cada elemento de la matriz contra el umbral, registrando coordenadas y valores de aquellos que excedan dicho límite.
* **Salida**: Un objeto que contiene el `total` de elementos sobreexpuestos y una lista `detalles` con la ubicación y valor de cada hallazgo.

## Reglas identificadas

1. Se debe recorrer la matriz en su totalidad, evaluando cada celda individualmente.
2. Una zona se considera sobreexpuesta únicamente si el valor en la posición $(f, c)$ es estrictamente mayor que el `umbral`.
3. El resultado debe consolidar tanto la cantidad total de zonas identificadas como el detalle individual de cada una.

## Pruebas

### Caso normal

* **Entrada**: `matriz: [[100, 250, 50], [200, 300, 10], [50, 50, 260]], umbral: 200`
* **Resultado esperado**: `{ total: 3, detalles: [{ fila: 0, columna: 1, valor: 250 }, { fila: 1, columna: 1, valor: 300 }, { fila: 2, columna: 2, valor: 260 }] }`

### Caso borde

* **Entrada**: `matriz: [[10, 20], [30, 40]], umbral: 50`
* **Resultado esperado**: `{ total: 0, detalles: [] }`

## Explicacion final

La solución funciona mediante una estrategia de búsqueda exhaustiva. Al procesar la estructura bidimensional con bucles anidados, el algoritmo garantiza que ninguna celda pase desapercibida, capturando de forma precisa todas las instancias que cumplen con la condición de sobreexposición establecida. Esta arquitectura permite una extracción de datos altamente confiable y estructurada.

## Sugerencia

Convierte cada regla del problema en una condición clara antes de programar:

* **Regla de comparación**: `if (matriz[f][c] > umbral)`.