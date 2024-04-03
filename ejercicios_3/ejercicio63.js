let edad = prompt("Ingrese su edad:");
edad = parseInt(edad); // Convertir la entrada a un número entero

// Verificar si la entrada es un número válido
if (isNaN(edad) || edad <= 0) {
    console.log("Por favor, ingrese una edad válida.");
} else {
    // Mostrar los años cumplidos
    console.log("Años cumplidos:");
    for (let i = 1; i <= edad; i++) {
        console.log(i);
    }
}
