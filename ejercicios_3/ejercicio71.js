// Obtener el número entero del usuario
let numero = parseInt(prompt("Ingrese un número entero positivo mayor que 1:"));

// Función para verificar si un número es primo
const esPrimo = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

// Verificar si el número ingresado es primo o no
if (esPrimo(numero)) {
    console.log(`${numero} es un número primo.`);
    alert(`${numero} es un número primo.`);
} else {
    console.log(`${numero} no es un número primo.`);
    alert(`${numero} no es un número primo.`);
}
