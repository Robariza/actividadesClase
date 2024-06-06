function verificarParidad() {
    // Solicita al usuario que ingrese un número y convierte la entrada a un número entero en base 10
    let numero = parseInt(prompt("Por favor, ingresa un número:"), 10);

    // Verifica si la conversión a número fue exitosa (numero no es NaN)
    if (isNaN(numero)) {
        alert("Eso no es un número válido.");
    } else {
        // Verifica si el número es par o impar usando el operador de módulo (algoritmo de la división)
        if (numero % 2 === 0) {
            alert("El número " + numero + " es par.");
        } else {
            alert("El número " + numero + " es impar.");
        }
    }
}

function sumarNumeros() {
    // Solicita al usuario que ingrese el primer número y convierte la entrada a un número de punto flotante
    let numero1 = parseFloat(prompt("Por favor, ingresa el primer número:"));

    // Verifica si la conversión a número fue exitosa (numero1 no es NaN)
    if (isNaN(numero1)) {
        alert("El primer valor no es un número válido.");
        return; // Termina la función si el primer número no es válido
    }

    // Solicita al usuario que ingrese el segundo número y convierte la entrada a un número de punto flotante
    let numero2 = parseFloat(prompt("Por favor, ingresa el segundo número:"));

    // Verifica si la conversión a número fue exitosa (numero2 no es NaN)
    if (isNaN(numero2)) {
        alert("El segundo valor no es un número válido.");
        return; // Termina la función si el segundo número no es válido
    }

    // Calcula la suma de los dos números
    let suma = numero1 + numero2;

    // Muestra el resultado de la suma en un cuadro de alerta
    alert("La suma de " + numero1 + " y " + numero2 + " es " + suma + ".");
}
