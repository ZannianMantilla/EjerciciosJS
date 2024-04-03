// Pedir al usuario un número entero
let numero = parseInt(prompt("Por favor, ingresa un número entero:"));

// Función para imprimir un triángulo rectángulo
const imprimirTrianguloRectangulo = (altura) => {
    // Iterar sobre cada fila del triángulo
    for (let i = 1; i <= altura; i++) {
        // Crear una cadena para representar la fila actual del triángulo
        let fila = '';
        // Agregar asteriscos a la fila según el número de la fila
        for (let j = 1; j <= i; j++) {
            fila += '*';
        }
        // Imprimir la fila en la consola
        console.log(fila);
    }
}

// Llamar a la función con el número ingresado por el usuario
imprimirTrianguloRectangulo(numero);
