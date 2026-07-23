# Logica general 079 - sistema de verificación de inventarios de reactivos

## Motor de Auditoría y Control de Stock para Fórmulas Químicas

Este script analiza el inventario actual de reactivos químicos frente a los requerimientos necesarios para una fórmula o proceso, identificando automáticamente faltantes, calculando déficits cuantitativos y determinando si se cuenta con el stock suficiente.

* **Descripción del proceso:**
* **Inicialización de Reporte**: Crea un arreglo vacío (`faltantes`) para almacenar los elementos que no cumplan con las cantidades requeridas.
* **Recorrido de Requerimientos**: Itera a través de cada elemento de la lista requerida (`requeridos`) buscando su coincidencia en el inventario actual mediante el método `find`.
* **Validación de Existencias**: Evalúa dos condiciones críticas:
* Si el reactivo no existe en el inventario.
* Si la cantidad disponible es menor a la solicitada.


* **Cálculo de Déficit**: Si se detecta escasez, calcula la diferencia numérica exacta (`deficit`) y registra un objeto detallado con el motivo de la falta.
* **Retorno del Dictamen**: Devuelve un objeto indicando si el `inventarioSuficiente` es verdadero o falso, junto con el reporte estructurado de faltantes o un mensaje de conformidad.


* **Tecnologías:**
* JavaScript (método de búsqueda `find`, bucles de iteración clásica, manipulación de arreglos de objetos, condiciones lógicas).



---

### Explicación técnica

1. **Cruces de Datos Eficientes**: El uso de `find` permite buscar de manera dirigida el reactivo correspondiente dentro del stock actual sin necesidad de bucles anidados complejos.
2. **Control de Inventario Preventivo**: Permite auditar de forma exacta qué componentes específicos generan desabastecimiento, facilitando la toma de decisiones logísticas antes de ejecutar un proceso químico.

### Lógica del Código

```javascript
const verificarInventarioReactivos = (inventarioActual, requeridos) => {
    let faltantes = [];

    // 1. Iterar sobre cada reactivo requerido por la fórmula
    for (let i = 0; i < requeridos.length; i++) {
        const itemReq = requeridos[i];
        const itemActual = inventarioActual.find(item => item.reactivo === itemReq.reactivo);

        // 2. Verificar si el ítem no existe o si la cantidad es insuficiente
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

    // 3. Retornar el estado general del inventario y el reporte de faltantes
    return {
        inventarioSuficiente: faltantes.length === 0,
        reporteFaltantes: faltantes.length > 0 ? faltantes : ["Todos los reactivos están disponibles en cantidades suficientes."]
    };
};

```

### Salida Esperada

```json
{
  "inventarioSuficiente": false,
  "reporteFaltantes": [
    {
      "reactivo": "Oxígeno",
      "deficit": 5,
      "motivo": "Stock insuficiente para completar la fórmula química."
    }
  ]
}
{
  "inventarioSuficiente": true,
  "reporteFaltantes": [
    "Todos los reactivos están disponibles en cantidades suficientes."
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