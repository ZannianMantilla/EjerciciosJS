function determinarMayorMenorIgual() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let numero3 = parseFloat(document.getElementById("numero3").value);
    let resultadoElement = document.getElementById("resultado");

    if (numero1 === numero2 && numero2 === numero3) {
        resultadoElement.textContent = "Los tres números son iguales.";
    } else {
        let mayor = Math.max(numero1, numero2, numero3);
        let menor = Math.min(numero1, numero2, numero3);

        if (mayor === menor) {
            resultadoElement.textContent = "Los tres números son iguales.";
        } else {
            resultadoElement.textContent = "El mayor número es: " + mayor + ", y el menor número es: " + menor + ".";
        }
    }
}
