function validarEdad() {
    let inputEdad = document.getElementById("edad").value;
    let edad = parseInt(inputEdad);

    if (isNaN(edad) || edad <= 0) {
        document.getElementById("resultado").textContent = "Por favor, ingrese una edad válida.";
    } else {
        if (edad >= 18) {
            document.getElementById("resultado").textContent = "Usted es mayor de edad.";
        } else {
            document.getElementById("resultado").textContent = "Usted es menor de edad.";
        }
    }
}
