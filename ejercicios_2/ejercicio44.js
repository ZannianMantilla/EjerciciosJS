function convertir() {
    const valorDolar = 0.050; // Valor de un dólar en pesos
    const valorEuro = 0.042;  // Valor de un euro en pesos

    let montoPesos = parseFloat(document.getElementById('montoPesos').value);

    let montoDolares = montoPesos * valorDolar;
    let montoEuros = montoPesos * valorEuro;

    // Mostramos los resultados
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <p>Monto en Dólares: $${montoDolares.toFixed(2)}</p>
        <p>Monto en Euros: €${montoEuros.toFixed(2)}</p>
    `;
}
