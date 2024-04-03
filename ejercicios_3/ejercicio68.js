// Definir una función para imprimir la tabla de multiplicar de un número dado
const imprimirTablaMultiplicar = (numero) => {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
    console.log(""); // Agregar una línea en blanco para separar las tablas
};

// Iterar sobre los números del 1 al 10 y llamar a la función para imprimir la tabla de multiplicar
for (let i = 1; i <= 10; i++) {
    imprimirTablaMultiplicar(i);
}
