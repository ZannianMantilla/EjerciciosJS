// Función para calcular el sueldo del empleado
function calcularSueldo(nombre, horasTrabajo, pagoHora) {
    let sueldo = horasTrabajo * pagoHora;
    return sueldo;
}

// Datos de entrada
let nombreEmpleado = prompt("Ingrese el nombre del empleado:");
let horasTrabajo = parseFloat(prompt("Ingrese las horas trabajadas por el empleado:"));
let pagoHora = parseFloat(prompt("Ingrese el pago por hora del empleado:"));

// Calcular sueldo
let sueldoEmpleado = calcularSueldo(nombreEmpleado, horasTrabajo, pagoHora);

// Mostrar resultado
console.log(`El sueldo de ${nombreEmpleado} es: $${sueldoEmpleado}`);
