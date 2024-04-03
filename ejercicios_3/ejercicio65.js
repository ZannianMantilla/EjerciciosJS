function iniciarCuentaAtras() {
    const numero = parseInt(document.getElementById("numeroInput").value);
    let countdownArray = [];

    // Verifica si el número ingresado es válido
    if (isNaN(numero) || numero < 0) {
        alert("Por favor, introduce un número entero positivo.");
        return;
    }

    // Construye el array countdownArray con los números de la cuenta atrás
    for (let i = numero; i >= 0; i--) {
        countdownArray.push(i);
    }

    // Convierte el array en una cadena separada por comas y la muestra en el elemento con id "resultado"
    document.getElementById("resultado").textContent = countdownArray.join(", ");
}
