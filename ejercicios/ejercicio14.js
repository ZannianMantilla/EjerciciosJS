function calcularArea() {
    let base = parseFloat(document.getElementById('base').value);
    let altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(base) || isNaN(altura)) {
        document.getElementById('resultado').textContent = 'Por favor, ingresa valores numéricos válidos.';
    } else {
        let area = (base * altura) / 2;
        document.getElementById('resultado').textContent = 'El área del triángulo es: ' + area;
    }
}
