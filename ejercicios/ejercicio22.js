function calcularCosto() {
    const costoPorMinuto = 355; // costo por minuto en pesos
    const iva = 0.20; // 20% de IVA

    // Obtener el número de minutos ingresados por el usuario
    const minutos = parseInt(document.getElementById('minutos').value);

    // Calcular el costo total de la llamada sin incluir el IVA
    const costoTotalSinIVA = minutos * costoPorMinuto;

    // Calcular el monto del IVA
    const montoIVA = costoTotalSinIVA * iva;

    // Calcular el costo total de la llamada incluyendo el IVA
    const costoTotalConIVA = costoTotalSinIVA + montoIVA;

    // Mostrar el resultado al usuario
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = `El costo total de la llamada es: $${costoTotalConIVA.toFixed(2)} pesos (IVA incluido)`;
}
