document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('calculoPromedio');
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const parcial1 = parseFloat(document.getElementById('parcial1').value);
        const parcial2 = parseFloat(document.getElementById('parcial2').value);
        const parcial3 = parseFloat(document.getElementById('parcial3').value);
        const examenFinal = parseFloat(document.getElementById('examenFinal').value);
        const trabajoFinal = parseFloat(document.getElementById('trabajoFinal').value);

        const promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
        const promedioFinal = (promedioParciales * 0.55) + (examenFinal * 0.3) + (trabajoFinal * 0.15);

        const resultadoElemento = document.getElementById('resultado');
        resultadoElemento.textContent = `El promedio final es: ${promedioFinal.toFixed(2)}`;
    });
});
