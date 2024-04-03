// Solicitamos al usuario que ingrese una frase y una letra
let frase = prompt("Por favor, ingresa una frase:");
let letra = prompt("Ingresa una letra para contar su frecuencia en la frase:");

// Convertimos la letra ingresada a minúscula para hacer la comparación insensible a mayúsculas y minúsculas
letra = letra.toLowerCase();

// Inicializamos un contador para almacenar el número de veces que aparece la letra en la frase
let contador = 0;

// Recorremos la frase para contar cuántas veces aparece la letra
for (let i = 0; i < frase.length; i++) {
    // Convertimos cada letra de la frase a minúscula para hacer la comparación insensible a mayúsculas y minúsculas
    let letraFrase = frase[i].toLowerCase();
    // Si la letra actual es igual a la letra ingresada por el usuario, incrementamos el contador
    if (letraFrase === letra) {
        contador++;
    }
}

// Mostramos el resultado al usuario
alert("La letra '" + letra + "' aparece " + contador + " veces en la frase: '" + frase + "'");
