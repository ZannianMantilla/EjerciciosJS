function verificarParImpar() {
    let numero = parseInt(document.getElementById('numero').value);

    if (isNaN(numero)) {
        alert('Por favor, ingrese un número válido.');
        return;
    }

    let mensaje = '';

    if (numero % 2 === 0) {
        mensaje = 'El número ingresado es par.';
    } else {
        mensaje = 'El número ingresado es impar.';
    }

    document.getElementById('resultado').innerText = mensaje;
}
