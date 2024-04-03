// Solicitamos al usuario que ingrese una palabra
let palabra = prompt("Ingrese una palabra:");

// Verificamos que se haya ingresado una palabra
if (palabra !== null && palabra !== "") {
    // Iteramos sobre cada letra de la palabra comenzando desde la última
    for (let i = palabra.length - 1; i >= 0; i--) {
        // Mostramos la letra actual
        console.log(palabra[i]);
    }
} else {
    // Si no se ingresó una palabra válida, mostramos un mensaje de error
    console.log("No se ingresó una palabra válida.");
}
