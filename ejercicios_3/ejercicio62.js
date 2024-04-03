// Solicitar al usuario una palabra
let palabra = prompt("Ingrese una palabra:");

// Mostrar la palabra 10 veces
const mostrarPalabra = (palabra) => {
    for (let i = 0; i < 10; i++) {
        console.log(`${i + 1}: ${palabra}`);
    }
};

mostrarPalabra(palabra);
