function calcularArea() {
    let lado1 = parseFloat(document.getElementById("lado1").value);
    let lado2 = parseFloat(document.getElementById("lado2").value);

    if (lado1 > 0 && lado2 > 0) {
        let area = lado1 * lado2;
        document.getElementById("resultado").innerText = "El área del rectángulo es: " + area;
    } else {
        document.getElementById("resultado").innerText = "Por favor ingrese valores positivos para los lados.";
    }
}
