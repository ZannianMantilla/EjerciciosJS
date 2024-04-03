function calcularPago() {
    let cantidadCursos = parseInt(document.getElementById('cantidadCursos').value);
    let pagoTotal;

    if (cantidadCursos < 6) {
        pagoTotal = cantidadCursos * 2000000; // $2.000.000 por curso
    } else {
        pagoTotal = cantidadCursos * 1200000; // $1.200.000 por curso
    }

    mostrarResultado(pagoTotal);
}

function mostrarResultado(pago) {
    let resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `El pago total es de $${pago.toLocaleString('es-CO')}`;
}
