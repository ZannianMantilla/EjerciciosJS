function calcularDistancia() {
    let x1 = parseFloat(document.getElementById('x1').value);
    let y1 = parseFloat(document.getElementById('y1').value);
    let x2 = parseFloat(document.getElementById('x2').value);
    let y2 = parseFloat(document.getElementById('y2').value);

    let distancia = calcularDistanciaEntrePuntos(x1, y1, x2, y2);

    document.getElementById('resultado').innerText = `La distancia entre los dos puntos es: ${distancia}`;
}

function calcularDistanciaEntrePuntos(x1, y1, x2, y2) {
    let distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    return distancia;
}
