// Calcula la parte que le corresponde a Lorena en la recolección de tapas de gaseosas

// Cantidad total de tapas recolectadas
let totalTapas = 120; // Por ejemplo, supongamos que se recolectaron 120 tapas en total

// Calcula cuántas tapas corresponden a Martín (2/3 del total)
let tapasMartin = (2/3) * totalTapas;

// Calcula cuántas tapas corresponden a Jairo (1/4 del total)
let tapasJairo = (1/4) * totalTapas;

// Calcula cuántas tapas corresponden a Lorena (el resto)
let tapasLorena = totalTapas - tapasMartin - tapasJairo;

// Muestra el resultado
console.log("Martín tiene:", tapasMartin, "tapas.");
console.log("Jairo tiene:", tapasJairo, "tapas.");
console.log("Lorena tiene:", tapasLorena, "tapas.");
