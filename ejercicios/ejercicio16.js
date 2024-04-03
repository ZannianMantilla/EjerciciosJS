// Definimos las constantes
const distanciaKm = 2; // Distancia en kilómetros
const tiempoMin = 5;   // Tiempo en minutos

// Convertimos la distancia de kilómetros a metros
const distanciaMetros = distanciaKm * 1000;

// Convertimos el tiempo de minutos a segundos
const tiempoSegundos = tiempoMin * 60;

// Calculamos la velocidad
const velocidadMetrosSegundo = distanciaMetros / tiempoSegundos;

// Mostramos el resultado en la consola
console.log("La velocidad del proyectil es:", velocidadMetrosSegundo, "metros/segundo");
