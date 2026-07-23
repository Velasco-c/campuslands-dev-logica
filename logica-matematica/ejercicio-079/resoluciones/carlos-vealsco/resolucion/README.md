# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de objetos (`elementos`) que representan los componentes químicos de un compuesto, conteniendo propiedades como `simbolo`, `masaAtomica` y `cantidad`.
* **Proceso**: Validación de que el arreglo no esté vacío, recorrido iterativo para evaluar tipos de datos estrictos y rangos numéricos válidos en cada propiedad, acumulación de errores o cálculo de la masa molar total, y normalización del resultado final a dos decimales.
* **Salida**: Un objeto que detalla si el compuesto es `valido` (verdadero o falso), junto con la `masa_molar_total` y su explicación o una lista de `errores_detectados`.

## Reglas identificadas

1. **Validación de Tipo y Valor Numérico de Masa**: La masa atómica debe ser obligatoriamente un número válido (no NaN) y estrictamente mayor a 0.
2. **Validación de Cantidad Válida**: La cantidad de átomos por elemento debe ser un número positivo mayor a 0.
3. **Acumulación y Auditoría de Errores**: El algoritmo debe registrar todas las anomalías encontradas en los elementos antes de decidir si procede con el cálculo matemático de la masa molar.

## Pruebas

### Caso normal

* **Entrada**: `[{ simbolo: "H", masaAtomica: 1.01, cantidad: 2 }, { simbolo: "O", masaAtomica: 16.00, cantidad: 1 }]`
* **Resultado esperado**: `{ valido: true, masa_molar_total: 18.02, explicacion: "Se validaron correctamente los rangos numéricos de masas y cantidades para calcular la masa molar del compuesto." }`

### Caso borde

* **Entrada**: `[{ simbolo: "C", masaAtomica: -12.01, cantidad: 1 }, { simbolo: "Na", masaAtomica: "22.99", cantidad: 0 }]`
* **Resultado esperado**: `{ valido: false, errores_detectados: ["El elemento C tiene una masa atómica inválida (menor o igual a 0).", "El elemento Na tiene una cantidad inválida."] }`

## Explicacion final

La solución funciona porque implementa un sistema robusto de validación de entradas que protege los cálculos físicos posteriores de datos erróneos o mal tipados. Al verificar de manera independiente tanto las restricciones de tipo como los rangos lógicos (`> 0`), el algoritmo recopila todas las inconsistencias en un arreglo de errores. Si los datos son correctos, procede limpiamente a multiplicar la masa por su cantidad, acumulando el total y formateándolo con precisión decimal.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Validación estructurada**: Diseña condiciones específicas para cada tipo de error (como distinguir entre strings no numéricos y números negativos) antes de aplicar cualquier operación matemática en el ciclo.