document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se recargue la página al enviar el formulario

    // Obtener el costo ingresado por el usuario
    let costo = parseFloat(document.getElementById('costo').value);

    // Calcular el descuento (10% del costo)
    let descuento = costo * 0.1;

    // Calcular el precio final (costo - descuento)
    let precioFinal = costo - descuento;

    // Mostrar el resultado
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>Costo de los medicamentos: $${costo.toFixed(2)}</p>
        <p>Descuento (10%): $${descuento.toFixed(2)}</p>
        <p>Precio final después del descuento: $${precioFinal.toFixed(2)}</p>
    `;
});
