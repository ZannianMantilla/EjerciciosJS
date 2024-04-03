function validarDatos() {
    // Obtener los valores del formulario
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);
    let estatura = parseInt(document.getElementById("estatura").value);
    let peso = parseInt(document.getElementById("peso").value);

    // Validar si cumple con los requisitos para formar parte del equipo de baloncesto
    if (edad <= 19 && estatura > 175 && peso >= 75 && peso <= 80) {
        alert(nombre + " cumple con los requisitos para formar parte del equipo de baloncesto del colegio.");
    } else {
        alert(nombre + " no cumple con los requisitos para formar parte del equipo de baloncesto del colegio.");
    }
}
