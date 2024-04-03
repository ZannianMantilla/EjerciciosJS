// Definir una función para obtener estadísticas de notas
function obtenerEstadisticasNotas(notas) {
    // Inicializar variables para la nota alta, baja y contadores de categorías
    let notaAlta = -Infinity;
    let notaBaja = Infinity;
    let alumnosMaximaNota = 0;
    let aCount = 0;
    let bCount = 0;
    let cCount = 0;
    let dCount = 0;

    // Iterar sobre las notas
    for (let i = 0; i < notas.length; i++) {
        let nota = notas[i];
        // Encontrar nota alta
        if (nota > notaAlta) {
            notaAlta = nota;
        }
        // Encontrar nota baja
        if (nota < notaBaja) {
            notaBaja = nota;
        }
        // Contar alumnos con nota máxima
        if (nota === 100) {
            alumnosMaximaNota++;
        }
        // Contar las categorías de notas
        if (nota < 100 && nota >= 90) {
            aCount++;
        } else if (nota < 90 && nota >= 80) {
            bCount++;
        } else if (nota < 80 && nota >= 70) {
            cCount++;
        } else if (nota < 70 && nota >= 60) {
            dCount++;
        }
    }

    // Imprimir resultados
    console.log("La nota más alta es: " + notaAlta);
    console.log("La nota más baja es: " + notaBaja);
    console.log("Cantidad de alumnos con nota máxima (100): " + alumnosMaximaNota);
    console.log("Cantidad de alumnos con calificación 'a': " + aCount);
    console.log("Cantidad de alumnos con calificación 'b': " + bCount);
    console.log("Cantidad de alumnos con calificación 'c': " + cCount);
    console.log("Cantidad de alumnos con calificación 'd': " + dCount);
}

// Obtener el número de notas del usuario
let cantidadNotas = parseInt(prompt("Ingrese el número de notas de los alumnos:"));

// Verificar que la cantidad de notas sea válida
if (cantidadNotas >= 1 && cantidadNotas <= 100) {
    let notas = [];
    // Pedir al usuario que ingrese cada nota
    for (let i = 0; i < cantidadNotas; i++) {
        let nota = parseInt(prompt("Ingrese la nota del alumno " + (i + 1) + ":"));
        // Verificar que la nota esté dentro del rango
        if (nota >= 0 && nota <= 100) {
            notas.push(nota);
        } else {
            alert("La nota ingresada no es válida. Ingrese una nota entre 0 y 100.");
            // Disminuir el índice para que el usuario vuelva a ingresar la nota actual
            i--;
        }
    }
    // Calcular y mostrar estadísticas de notas
    obtenerEstadisticasNotas(notas);
} else {
    alert("La cantidad de notas ingresada no es válida. Ingrese un número entre 1 y 100.");
}
