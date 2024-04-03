function verificarNumero() {
    let numero = parseFloat(document.getElementById('numeroInput').value);

    if (!isNaN(numero)) {
        if (numero > 0 && numero < 100) {
            alert("El número ingresado es positivo y menor que 100.");
        } else if (numero <= 0) {
            alert("El número ingresado no es positivo.");
        } else {
            alert("El número ingresado es mayor o igual que 100.");
        }
    } else {
        alert("Por favor, ingrese un número válido.");
    }
}
