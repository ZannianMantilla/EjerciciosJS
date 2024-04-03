let altura = parseInt(prompt("Ingrese la altura del triángulo:"));

// Validar que la entrada sea un número entero
if (isNaN(altura) || altura <= 0 || !Number.isInteger(altura)) {
    console.log("Debe ingresar un número entero positivo.");
} else {
    // Iterar sobre cada fila del triángulo
    for (let i = 1; i <= altura; i++) {
        // Imprimir '*' en cada columna hasta llegar a la fila actual
        let linea = '';
        for (let j = 1; j <= i; j++) {
            linea += '*';
        }
        console.log(linea);
    }
}
