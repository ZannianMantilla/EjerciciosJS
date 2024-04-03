function invertirFrase() {
    // Obtener la frase ingresada por el usuario
    let frase = document.getElementById("fraseInput").value;
    
    // Invertir la frase
    let fraseInvertida = "";
    for (let i = frase.length - 1; i >= 0; i--) {
        fraseInvertida += frase[i];
    }

    // Mostrar la frase invertida
    document.getElementById("fraseInvertida").innerText = "Frase invertida: " + fraseInvertida;
}
