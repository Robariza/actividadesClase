//1. Verificar vinculación correcta mandando un mensaje a la consola, usando -> console.log('estoy conectado a mi html');
/* Ejercicio 1

Verificación de elegibilidad para votar:

Escribe un programa que solicite la edad de un usuario y verifique si es elegible para votar en las elecciones. Debe ser mayor de 18 años y ser ciudadano colombiano.
*/

/*
Paso a paso para resolver un problema en programación

    1. El problema
    2. Analizarlo
    3. Diseñar
    4. Codificar
*/

/* 
Solicitar información 

1. Hmtl -> formulario
2. Prompt

"Por favor ingrese su edad"
prompt -> parseInt (convierte la info a un No. entero)

"¿Es usted colombiano?"
prompt -> booleano (true or false)
confirm -> booleano 

condicional (if) -> verifica si las condiciones anteriores son verdaderas o falsas

**OPERADORES LÓGICOS**
and -> y -> &&
o -> or -> ||
not -> negación -> !

if( es mayor de edad AND es colombiano)

*/

/*  Declaración de variables

    let -> Puede variar
    const -> Siempre es el mismo valor
*/

let edad = parseInt(prompt('Por favor ingrese su edad'));
let esCiudadano = confirm('¿Eres ciudadano Colombiano?');

console.log(edad, esCiudadano)

// Condicional -> if
// && -> se cumple para todas la condiciones 
if(edad >= 18 && esCiudadano == true){
    alert('Es apto para votar')
}

// else -> else incluye todos los casos que no cumplen la condición

else{
    alert('No eres apto para votar')
}
