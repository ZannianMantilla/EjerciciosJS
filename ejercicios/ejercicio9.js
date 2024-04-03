document.addEventListener("DOMContentLoaded", function() {
    const botonCalcular = document.getElementById("calcularPrecio");
    const inputEdad = document.getElementById("edad");
    const resultadoElemento = document.getElementById("resultado");

    botonCalcular.addEventListener("click", function() {
        // Obtener la edad del usuario
        let edad = parseInt(inputEdad.value);

        // Verificar si la edad es válida
        if (isNaN(edad) || edad < 0) {
            resultadoElemento.textContent = "Por favor, introduce una edad válida.";
            return;
        }

        // Calcular el precio de la entrada
        let precioEntrada;
        if (edad < 4) {
            precioEntrada = 0;
        } else if (edad >= 4 && edad <= 18) {
            precioEntrada = 5;
        } else {
            precioEntrada = 10;
        }

        // Mostrar el precio de la entrada
        resultadoElemento.textContent = "El precio de la entrada es: " + precioEntrada + "€";
    });
});
