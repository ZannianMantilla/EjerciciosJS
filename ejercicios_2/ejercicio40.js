function calcularEdad() {
    let anioNacimiento = parseInt(document.getElementById('inputAnioNacimiento').value);
    let anioActual = new Date().getFullYear();
    let edad = anioActual - anioNacimiento;

    if (edad >= 0) {
        document.getElementById('resultado').innerText = "La edad aproximada es: " + edad + " años.";
    } else {
        document.getElementById('resultado').innerText = "Por favor ingrese un año de nacimiento válido.";
    }
}
