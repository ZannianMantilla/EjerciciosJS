// ejercicio6.js

// Pedimos al usuario su nombre y sexo
let nombre = prompt("Por favor, ingresa tu nombre:");
let sexo = prompt("Por favor, ingresa tu sexo (M para mujer, H para hombre):").toUpperCase();

let grupo;

// Verificamos el sexo y el nombre para determinar el grupo
if ((sexo === 'M' && nombre < 'M') || (sexo === 'H' && nombre > 'N')) {
    grupo = 'A';
} else {
    grupo = 'B';
}

// Mostramos el grupo al que corresponde
alert("Tu grupo es el grupo " + grupo);
