function calcularDescuento() {
    const tipoMembresia = document.getElementById("tipoMembresia").value;
    const montoCompra = parseFloat(document.getElementById("montoCompra").value);

    let porcentajeDescuento;

    switch (tipoMembresia) {
        case "A":
            porcentajeDescuento = 0.10;
            break;
        case "B":
            porcentajeDescuento = 0.15;
            break;
        case "C":
            porcentajeDescuento = 0.20;
            break;
        default:
            porcentajeDescuento = 0;
            break;
    }

    const descuento = montoCompra * porcentajeDescuento;
    const totalPagar = montoCompra - descuento;

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Descuento:
