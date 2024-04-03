function calcular() {
    // Obtener los valores del radio y la altura del cilindro desde los inputs
    let radio = parseFloat(document.getElementById("radio").value);
    let altura = parseFloat(document.getElementById("altura").value);

    // Calcular el área del cilindro (A = 2πr(r + h))
    let area = 2 * Math.PI * radio * (radio + altura);

    // Calcular el volumen del cilindro (V = πr^2h)
    let volumen = Math.PI * Math.pow(radio, 2) * altura;

    // Mostrar los resultados en el elemento con id "resultado"
    document.getElementById("resultado").innerHTML = `
        <p>Área del cilindro: ${area.toFixed(2)} unidades cuadradas</p>
        <p>Volumen del cilindro: ${volumen.toFixed(2)} unidades cúbicas</p>
    `;
}
