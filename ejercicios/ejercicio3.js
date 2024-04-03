function realizarDivision() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let resultadoElement = document.getElementById("resultado");

    try {
        if (numero2 === 0) {
            throw "No se puede dividir por cero. Por favor, ingrese otro divisor.";
        } else {
            let division = numero1 / numero2;
            resultadoElement.textContent = `La división de ${numero1} entre ${numero2} es ${division}.`;
        }
    } catch (error) {
        resultadoElement.textContent = `Error: ${error}`;
    }
}
