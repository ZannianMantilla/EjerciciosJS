let contraseña = "contraseña";
let contraseñaIngresada = prompt("Por favor, ingresa la contraseña:");

while (contraseñaIngresada !== contraseña) {
    contraseñaIngresada = prompt("Contraseña incorrecta. Por favor, inténtalo de nuevo:");
}

alert("¡Contraseña correcta! Bienvenido.");
