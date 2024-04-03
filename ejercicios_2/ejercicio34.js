// Definimos la función para calcular el tiempo estimado de llenado del depósito
function calcularTiempoLlenado(radio, altura, caudal) {
    // Calculamos el volumen del depósito
    let volumen = Math.PI * Math.pow(radio, 2) * altura;

    // Calculamos el tiempo en segundos
    let tiempoSegundos = volumen / caudal;

    // Convertimos el tiempo a minutos
    let tiempoMinutos = tiempoSegundos / 60;

    return tiempoMinutos;
}
