function calcularArea() {
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);

    // Verificar que los valores sean números válidos
    if (isNaN(base) || isNaN(altura)) {
        alert("Por favor, ingrese valores válidos para la base y la altura.");
        return;
    }

    // Calcular el área del rectángulo
    let area = base * altura;

    // Mostrar el resultado
    document.getElementById("resultado").textContent = `El área del rectángulo es: ${area}`;
}
