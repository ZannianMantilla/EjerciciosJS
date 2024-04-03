// Función para obtener la entrada del usuario
function obtenerEntradaUsuario() {
    return prompt("Introduce algo (o escribe 'salir' para terminar):");
}

// Función principal
function main() {
    let entrada = obtenerEntradaUsuario();

    // Mientras la entrada no sea 'salir', mostrar el eco
    while (entrada.toLowerCase() !== 'salir') {
        console.log("Eco:", entrada);
        entrada = obtenerEntradaUsuario();
    }

    console.log("¡Hasta luego!");
}

// Llamada a la función principal
main();
