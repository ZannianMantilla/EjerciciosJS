
let contraseñaGuardada = "Contraseña123";
function esAlfanumerico(cadena) {
    return /^[a-zA-Z0-9]+$/.test(cadena);
}
function compararContraseñas(contraseñaIntroducida, contraseñaGuardada) {
    return contraseñaIntroducida.toLowerCase() === contraseñaGuardada.toLowerCase();
}
let contraseñaIntroducida = prompt("Introduce la contraseña:");
if (!esAlfanumerico(contraseñaIntroducida)) {
    console.log("La contraseña debe contener solo caracteres alfanuméricos.");
} else {
    if (compararContraseñas(contraseñaIntroducida, contraseñaGuardada)) {
        console.log("¡La contraseña es correcta!");
    } else {
        console.log("La contraseña es incorrecta.");
    }
}
