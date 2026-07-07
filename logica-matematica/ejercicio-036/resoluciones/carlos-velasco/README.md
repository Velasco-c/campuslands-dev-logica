# Logica matematica 036 - presupuestos y descuentos

## Sistema de Cálculo de Presupuesto

Este script automatiza la generación de presupuestos financieros, integrando incentivos por volumen (descuentos por proyectos largos) y recargos operativos (calidad premium).

* **Descripción del proceso:**
* **Cálculo Base**: Multiplica las horas estimadas por el costo unitario por hora.
* **Descuento por Volumen**: Si la duración del proyecto excede las 50 horas, se aplica un descuento del 15% sobre el total.
* **Recargo de Calidad**: Si se selecciona `altaCalidad` (valor booleano `true`), se aplica un recargo del 20% adicional sobre el costo calculado.
* **Reporte**: Devuelve un objeto con el `presupuesto_final` formateado a dos decimales y una `explicacion` textual que resume las condiciones aplicadas al cálculo.


* **Tecnologías:**
* JavaScript (lógica aritmética, condicionales, plantillas de texto).

---

### Explicación técnica

1. **Orden de Operaciones**: El script aplica primero el descuento por volumen y luego el recargo de calidad. Este orden es crucial, ya que el recargo del 20% se aplica sobre el precio *ya descontado* (si el proyecto tiene > 50 horas), lo cual es una lógica financiera estándar en servicios profesionales.
2. **Operador Ternario en Plantillas**: La `explicacion` utiliza un operador ternario (`? :`) directamente dentro de un *template literal*, permitiendo una respuesta dinámica y legible para el usuario final sin necesidad de bloques `if/else` extensos.
3. **Encapsulamiento**: La función es puramente lógica, sin efectos secundarios, lo que la hace altamente reutilizable en diferentes contextos, como un formulario web o un sistema de gestión de proyectos interno.

### Lógica del Código

```javascript
const calcularPresupuesto = (horas, costoHora, altaCalidad) => {
    // 1. Cálculo base
    let total = horas * costoHora;

    // 2. Aplicar descuento por volumen (> 50 horas)
    if (horas > 50) {
        total -= total * 0.15;
    }

    // 3. Aplicar recargo por alta calidad
    if (altaCalidad) {
        total += total * 0.20;
    }

    // 4. Retorno del objeto con el presupuesto final
    return {
        presupuesto_final: total.toFixed(2),
        explicacion: `Cálculo aplicado con ${horas > 50 ? 'descuento de 15%' : 'tarifa estándar'} y ${altaCalidad ? 'recargo de alta calidad 20%' : 'calidad estándar'}.`
    };
};

```

### Salida Esperada

```text
{
  presupuesto_final: '6120.00',
  explicacion: 'Cálculo aplicado con descuento de 15% y recargo de alta calidad 20%.'
}
{
  presupuesto_final: '2000.00',
  explicacion: 'Cálculo aplicado con tarifa estándar y calidad estándar.'
}

```

**Estructura del Proyecto:**

```plaintext
campuslands-dev-logica/
└── logica-matematica/
    └── ejercicio-036/
        └── resoluciones/
            └── carlos-velasco/
                └── carlos-velasco.js

```

Hecho por:
Carlos Velasco