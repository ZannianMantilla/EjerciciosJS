document.addEventListener('DOMContentLoaded', function() {
    const celsiusInput = document.getElementById('celsiusInput');
    const convertirBtn = document.getElementById('convertirBtn');
    const resultado = document.getElementById('resultado');

    convertirBtn.addEventListener('click', function() {
        // Obtener el valor en grados Celsius desde el input
        const celsius = parseFloat(celsiusInput.value);

        // Convertir Celsius a Fahrenheit
        const fahrenheit = (celsius * 9/5) + 32;

        // Mostrar el resultado
        resultado.textContent = `${celsius} grados Celsius son ${fahrenheit.toFixed(2)} grados Fahrenheit.`;
    });
});
