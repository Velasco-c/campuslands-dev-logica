# Plantilla de solución

## Analisis

* **Entrada**: `horas` (número), `costoHora` (número) y `altaCalidad` (booleano).
* **Proceso**: Cálculo del costo base, aplicación de un descuento del 15% si las horas superan 50, y un recargo del 20% si la calidad es alta.
* **Salida**: Un objeto que contiene el `presupuesto_final` (string formateado a 2 decimales) y una `explicacion` textual de las condiciones aplicadas.

## Reglas identificadas

1. Si las `horas` son superiores a 50, se aplica un descuento del 15% sobre el total.
2. Si `altaCalidad` es `true`, se suma un 20% al presupuesto total.
3. El cálculo debe procesar primero el descuento y luego aplicar el recargo de calidad sobre el monto resultante.

## Pruebas

### Caso normal

* **Entrada**: `horas: 60, costoHora: 100, altaCalidad: true`
* **Resultado esperado**: `{ presupuesto_final: "6120.00", explicacion: "Cálculo aplicado con descuento de 15% y recargo de alta calidad 20%." }`

### Caso borde

* **Entrada**: `horas: 20, costoHora: 100, altaCalidad: false`
* **Resultado esperado**: `{ presupuesto_final: "2000.00", explicacion: "Cálculo aplicado con tarifa estándar y calidad estándar." }`

## Explicacion final

La solución funciona aplicando una secuencia lógica de pasos financieros. Al evaluar primero el volumen de trabajo (descuento) y posteriormente el estándar requerido (recargo), el código ajusta el presupuesto de manera proporcional. El uso de operadores ternarios en la explicación asegura que la justificación del costo sea precisa y transparente para el usuario.

## Sugerencia

Verifica cada operación con cálculos manuales antes de confiar en el código:

* **Ejemplo manual** (`horas: 60, costoHora: 100, altaCalidad: true`):
* Base: $60 \times 100 = 6000$.
* Descuento: $6000 - (6000 \times 0.15) = 5100$.
* Recargo: $5100 + (5100 \times 0.20) = 6120.00$.