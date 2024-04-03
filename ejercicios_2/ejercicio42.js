// Definir los precios de los productos
let precioLibro = 10000;
let precioCuaderno = 7550;
let precioLapicero = 5550;

// Solicitar la cantidad de cada producto
let cantidadLibros = parseInt(prompt("Ingrese la cantidad de libros vendidos:"));
let cantidadCuadernos = parseInt(prompt("Ingrese la cantidad de cuadernos vendidos:"));
let cantidadLapiceros = parseInt(prompt("Ingrese la cantidad de lapiceros vendidos:"));

// Calcular el monto total de la venta
let montoTotal = (precioLibro * cantidadLibros) + (precioCuaderno * cantidadCuadernos) + (precioLapicero * cantidadLapiceros);

// Mostrar el resultado
alert(`El monto total de la venta es: $${montoTotal}`);
