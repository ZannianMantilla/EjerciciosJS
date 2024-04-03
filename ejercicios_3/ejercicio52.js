function calcularPago() {
    const tipoEmpleado = document.getElementById('tipoEmpleado').value;
    const horasTrabajadas = parseFloat(document.getElementById('horasTrabajadas').value);
    let pagoPorHora;

    if (tipoEmpleado === 'planta') {
        pagoPorHora = 20000;
    } else if (tipoEmpleado === 'administrativo') {
        pagoPorHora = 10000;
    } else {
        document.getElementById('resultado').innerText = 'Tipo de empleado no válido';
        return;
    }

    const pagoTotal = horasTrabajadas * pagoPorHora;
    document.getElementById('resultado').innerText = `El pago total es: $${pagoTotal}`;
}
