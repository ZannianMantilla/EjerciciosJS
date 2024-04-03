function evaluarEmpleado() {
    const puntuacion = parseFloat(document.getElementById("puntuacion").value);

    let nivel;
    let cantidadDinero;

    if (puntuacion === 0.0) {
        nivel = "Inaceptable";
    } else if (puntuacion === 0.4) {
        nivel = "Aceptable";
    } else if (puntuacion >= 0.6) {
        nivel = "Meritorio";
    } else {
        nivel = "Puntuación no válida";
    }

    cantidadDinero = 2400 * puntuacion;

    const resultado = `Nivel de rendimiento: ${nivel}<br>Cantidad de dinero recibida: ${cantidadDinero}€`;
    document.getElementById("resultado").innerHTML = resultado;
}
