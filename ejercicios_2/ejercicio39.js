// Supongamos que el total del trabajo es de 100 unidades monetarias (pueden ser dólares, euros, etc.)
const totalTrabajo = 100;

// Martín toma 2/3 del total
const parteMartin = totalTrabajo * (2/3);

// Jairo toma un cuarto del total
const parteJairo = totalTrabajo * (1/4);

// Lorena se queda con el resto
const parteLorena = totalTrabajo - parteMartin - parteJairo;

console.log("La parte que le corresponde a Lorena es: " + parteLorena + " unidades monetarias.");
