function calcularImpuesto() {
    let rentaAnual = parseFloat(document.getElementById('rentaAnual').value);

    if (rentaAnual >= 10000 && rentaAnual < 20000) {
        alert("Su tipo de impuesto es del 5%");
    } else if (rentaAnual >= 20000 && rentaAnual < 35000) {
        alert("Su tipo de impuesto es del 10%");
    } else if (rentaAnual >= 35000 && rentaAnual < 60000) {
        alert("Su tipo de impuesto es del 20%");
    } else if (rentaAnual >= 60000) {
        alert("Su tipo de impuesto es del 45%");
    } else {
        alert("Su renta anual no alcanza el mínimo imponible.");
    }
}
