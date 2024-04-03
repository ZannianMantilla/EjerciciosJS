// Función para asignar la calificación literal
function asignarCalificacion(calificacion) {
    let calificacionLiteral;

    if (calificacion >= 9.1 && calificacion <= 10) {
        calificacionLiteral = "A - Excelente";
    } else if (calificacion >= 8.1 && calificacion < 9) {
        calificacionLiteral = "A - Muy bien";
    } else if (calificacion >= 7.5 && calificacion < 8) {
        calificacionLiteral = "A - Bien";
    } else {
        calificacionLiteral = "NA - No Aprobado";
    }

    return calificacionLiteral;
}

// Ejemplo de uso
const calificacion = 8.3; // Puedes cambiar esta calificación para probar diferentes casos
const calificacionAsignada = asignarCalificacion(calificacion);

// Mostrando el resultado en el HTML
document.getElementById("resultado").innerHTML = `Para la calificación ${calificacion}, la calificación asignada es: ${calificacionAsignada}`;
