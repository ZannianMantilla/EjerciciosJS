let precioLlave = 11500;
let precioBomba = 1168000;
let precioCajaPernos = 87000;
let sobranteDespuesPago = 91000;

// Calculando el total gastado en llaves
let totalLlaves = 5 * precioLlave;

// Calculando el total gastado en cajas de pernos
let totalCajasPernos = 3 * precioCajaPernos;

// Calculando el total gastado en la bomba
let totalBomba = precioBomba;

// Calculando el total gastado en total
let totalGastado = totalLlaves + totalCajasPernos + totalBomba;

// Calculando el dinero inicial
let dineroInicial = totalGastado + sobranteDespuesPago;

// Imprimiendo el resultado
console.log("El jefe de obra inicialmente tenía: $" + dineroInicial);
