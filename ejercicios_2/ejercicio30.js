// Obtener la contraseña ingresada por el usuario
const password = prompt("Ingrese su contraseña:");

// Función para verificar la fortaleza de la contraseña
function verificarFortalezaContraseña(password) {
    // Verificar la longitud de la contraseña
    if (password.length < 8 || password.length > 12) {
        return false; // La longitud no cumple con los requisitos
    }

    // Verificar si hay al menos una mayúscula, una minúscula y un dígito
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneDigito = /[0-9]/.test(password);

    return tieneMayuscula && tieneMinuscula && tieneDigito;
}

// Verificar y mostrar el resultado
if (verificarFortalezaContraseña(password)) {
    console.log("La contraseña es fuerte.");
} else {
    console.log("La contraseña no cumple con los requisitos de fortaleza.");
}
