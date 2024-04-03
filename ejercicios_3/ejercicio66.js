// Archivo ejercicio66.js

// Función principal que realiza el cálculo del capital obtenido en la inversión cada año
let calcularInversion = (cantidad, interesAnual, numAnios) => {
    // Convertir el interés anual a porcentaje
    interesAnual /= 100;

    // Bucle para calcular el capital obtenido cada año
    for (let i = 1; i <= numAnios; i++) {
        let capital = cantidad * Math.pow((1 + interesAnual), i);
        console.log(`Capital obtenido en el año ${i}: ${capital.toFixed(2)}`);
    }
};

// Solicitar la cantidad a invertir, interés anual y número de años al usuario
let cantidad = parseFloat(prompt("Ingrese la cantidad a invertir:"));
let interesAnual = parseFloat(prompt("Ingrese el interés anual (%):"));
let numAnios = parseInt(prompt("Ingrese el número de años:"));

// Llamar a la función para calcular e imprimir el capital obtenido cada año
calcularInversion(cantidad, interesAnual, numAnios);
