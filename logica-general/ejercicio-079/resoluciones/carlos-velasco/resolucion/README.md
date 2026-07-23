# Plantilla de solucion

## Analisis

* **Entrada**: Dos arreglos de objetos: `inventarioActual` (que contiene los reactivos disponibles y sus cantidades) y `requeridos` (los elementos y cantidades necesarios para una fórmula).
* **Proceso**: Recorrido de los requerimientos para buscar cada componente en el inventario mediante `find`, validación de existencia y suficiencia de stock, cálculo del déficit cuantitativo en caso de faltantes, y consolidación de un reporte general de disponibilidad.
* **Salida**: Un objeto que detalla si el `inventarioSuficiente` es verdadero o falso, junto con un `reporteFaltantes` que lista los déficits o un mensaje de conformidad.

## Reglas identificadas

1. **Búsqueda y Verificación de Existencia**: Cada reactivo requerido debe ser buscado dentro del inventario actual; si no se encuentra, se considera que la cantidad disponible es cero.
2. **Control de Stock Suficiente**: Si la cantidad disponible en el inventario es menor a la cantidad solicitada por la fórmula, se genera un registro de faltante.
3. **Cálculo Cuantitativo de Déficit**: El faltante se determina restando la cantidad disponible en el stock de la cantidad requerida por el proceso químico.

## Pruebas

### Caso normal

* **Entrada**: `stockActual = [{ reactivo: "Hidrógeno", cantidad: 50 }, { reactivo: "Oxígeno", cantidad: 20 }, { reactivo: "Carbono", cantidad: 10 }]`, `formulaAguaReq = [{ reactivo: "Hidrógeno", cantidad: 40 }, { reactivo: "Oxígeno", cantidad: 25 }]`
* **Resultado esperado**: `{ inventarioSuficiente: false, reporteFaltantes: [{ reactivo: "Oxígeno", deficit: 5, motivo: "Stock insuficiente para completar la fórmula química." }] }`

### Caso borde

* **Entrada**: `stockActual` (mismo stock anterior), `[{ reactivo: "Carbono", cantidad: 5 }]`
* **Resultado esperado**: `{ inventarioSuficiente: true, reporteFaltantes: ["Todos los reactivos están disponibles en cantidades suficientes."] }`

## Explicacion final

La solución funciona porque implementa un recorrido estructurado de los elementos solicitados cruzándolos eficientemente con el stock disponible mediante el método `find`. Al evaluar de forma independiente tanto la ausencia total del reactivo como el déficit numérico cuando la cantidad es insuficiente, el algoritmo captura con precisión cualquier escenario de escasez. Finalmente, consolida los resultados en una estructura clara que permite auditar el inventario de manera rápida y confiable.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Validación previa**: Asegúrate de definir claramente qué sucede si un ítem no existe en el inventario (asignando un valor predeterminado de cero) antes de intentar realizar operaciones matemáticas con su cantidad.