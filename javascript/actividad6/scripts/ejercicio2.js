// Ejercicios de condicionales
/*
2.) Calculadora de descuento:
Crea un programa que solicite al usuario el precio original de un producto y el porcentaje de descuento que se aplicará. Luego, calcula y muestra el precio final después del descuento.

    1. Descuento 20%
    2. Descuento 50%
    3. Descuento 75%
*/

/*
Paso a paso para resolver un problema en programación

    1. El problema
    2. Analizarlo
    3. Diseñar
    4. Codificar
*/

/* condicionales

if -> una condición particular
switch -> varias condiciones a evaluar, donde cada una me da un resultado diferente 

Switch
    case -> casos
*/

const precioOriginal = parseFloat(prompt('Ingrese el valor del producto'));

// \ -> salto de línea
// alert('ingrese el valor del descueto a aplicar: \n 1 -> Descuento de 20% \n 2 -> Descuento 50% \ 3 -> Descuento del 75%');

const descuento = prompt('ingrese el valor del descueto a aplicar: \n 1 -> Descuento de 20% \n 2 -> Descuento 50% \ 3 -> Descuento del 75%');

let precioFinal = 0;



switch (descuento) {
    case '1':
        precioOriginal - (precioOriginal * 0.2);
        alert('Descuento del 20% aplicado: ' + precioFinal);
        break;
    case '2':
        precioOriginal - (precioOriginal * 0.5);
        alert('Descuento del 50% aplicado: ' + precioFinal);
        break;
    case '3':
        precioOriginal - (precioOriginal * 0.75);
        alert('Descuento del 75% aplicado: ' + precioFinal);
        break;
    default:
        alert('Digite una opción valida.');
}


