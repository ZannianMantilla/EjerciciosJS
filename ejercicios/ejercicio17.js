function calcularVolumen() {
    // Obtener el valor del radio desde el input
    let radio = document.getElementById("radio").value;

    // Convertir el valor del radio a un número
    radio = parseFloat(radio);

    // Verificar si el valor del radio es válido
    if (isNaN(radio) || radio <= 0) {
        alert("Por favor, ingresa un radio válido.");
        return;
    }

    // Calcular el volumen de la esfera
    let volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);

    // Mostrar el resultado
    document.getElementById("resultado").innerText = "El volumen de la esfera es: " + volumen.toFixed(2);
}
