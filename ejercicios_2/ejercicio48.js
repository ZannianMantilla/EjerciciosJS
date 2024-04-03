function calcularArea() {
    let figura = document.getElementById('figuraInput').value.toUpperCase();
    let area;

    if (figura === 'T') {
        let base = parseFloat(prompt('Ingrese la base del triángulo:'));
        let altura = parseFloat(prompt('Ingrese la altura del triángulo:'));

        if (!isNaN(base) && !isNaN(altura)) {
            area = (base * altura) / 2;
            alert('El área del triángulo es: ' + area);
        } else {
            alert('Por favor, ingrese valores numéricos válidos.');
        }
    } else if (figura === 'C') {
        let radio = parseFloat(prompt('Ingrese el radio del círculo:'));

        if (!isNaN(radio)) {
            const PI = Math.PI;
            area = PI * radio * radio;
            alert('El área del círculo es: ' + area);
        } else {
            alert('Por favor, ingrese un valor numérico válido.');
        }
    } else {
        alert('Por favor, ingrese "T" para Triángulo o "C" para Círculo.');
    }
}
