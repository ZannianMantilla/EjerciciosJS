// Capturar el consumo ingresado por el usuario desde el HTML
let consumo = parseFloat(prompt("Ingrese el monto total del consumo:"));

// Verificar si el consumo excede los $130.000 para aplicar el descuento
if (consumo > 130000) {
    // Calcular el descuento del 15% si el consumo es mayor a $130.000
    let descuento = consumo * 0.15;
    
    // Calcular el total a pagar con descuento
    let totalPagar = consumo - descuento;
    
    // Mostrar el resultado al usuario
    console.log("Se aplicó un descuento del 15%.");
    console.log("Monto del descuento: $" + descuento.toFixed(2));
    console.log("Total a pagar con descuento: $" + totalPagar.toFixed(2));
} else {
    // Si el consumo no excede los $130.000, no hay descuento
    // El total a pagar es igual al consumo
    console.log("No se aplicó ningún descuento.");
    console.log("Total a pagar: $" + consumo.toFixed(2));
}
