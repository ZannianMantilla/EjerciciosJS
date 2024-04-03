function convertirVelocidad() {
    // Obtener la velocidad en kilómetros por hora desde el input
    let velocidadKph = parseFloat(document.getElementById("velocidadKph").value);

    // Convertir la velocidad a metros por segundo (1 km/h = 0.277778 m/s)
    let velocidadMps = velocidadKph * 0.277778;

    // Mostrar la velocidad en metros por segundo en el elemento span
    document.getElementById("velocidadMps").textContent = velocidadMps.toFixed(2);
}
