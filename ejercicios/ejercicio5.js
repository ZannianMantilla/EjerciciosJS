function verificarImpuesto() {
    let edad = parseInt(document.getElementById("edad").value);
    let ingresos = parseFloat(document.getElementById("ingresos").value);

    // Verificar si la edad es mayor de 16 y los ingresos son iguales o superiores a 1000
    if (edad > 16 && ingresos >= 1000) {
        document.getElementById("resultado").innerText = "Usted debe tributar.";
    } else {
        document.getElementById("resultado").innerText = "Usted no debe tributar.";
    }
}
