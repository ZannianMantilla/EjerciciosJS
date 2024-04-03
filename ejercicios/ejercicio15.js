// ejercicio15.js

// Definimos la constante PI
const PI = Math.PI;

// Pedimos al usuario que ingrese el radio de la circunferencia
let radio = parseFloat(prompt("Ingrese el radio de la circunferencia:"));

// Calculamos la longitud de la circunferencia
let longitud = 2 * PI * radio;

// Calculamos el área de la circunferencia
let area = PI * radio * radio;

// Mostramos los resultados
console.log("La longitud de la circunferencia es: " + longitud.toFixed(2));
console.log("El área de la circunferencia es: " + area.toFixed(2));
