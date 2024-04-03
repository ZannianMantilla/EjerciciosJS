// Solicitar al usuario un número entero positivo
let numero = parseInt(prompt("Por favor, ingresa un número entero positivo:"));

// Validar si el número es válido
if (numero > 0 && Number.isInteger(numero)) {
    // Inicializar una cadena vacía para almacenar los números impares
    let impares = "";

    // Iterar desde 1 hasta el número ingresado por el usuario
    for (let i = 1; i <= numero; i++) {
        // Verificar si el número actual es impar
        if (i % 2 !== 0) {
            // Agregar el número impar a la cadena
            impares += i;

            // Si no es el último número impar, agregar una coma y un espacio
            if (i !== numero) {
                impares += ", ";
            }
        }
    }

    // Mostrar los números impares por pantalla
    console.log("Números impares hasta " + numero + ": " + impares);
} else {
    // En caso de que el usuario ingrese un número inválido
    console.log("Por favor, ingresa un número entero positivo válido.");
}
