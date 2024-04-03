function calcularTotal() {
    let precioProducto1 = parseFloat(document.getElementById("producto1").value);
    let precioProducto2 = parseFloat(document.getElementById("producto2").value);
    let precioProducto3 = parseFloat(document.getElementById("producto3").value);
    let precioProducto4 = parseFloat(document.getElementById("producto4").value);
    let precioProducto5 = parseFloat(document.getElementById("producto5").value);

    let subtotal = precioProducto1 + precioProducto2 + precioProducto3 + precioProducto4 + precioProducto5;
    let iva = subtotal * 0.16;
    let total = subtotal + iva;

    document.getElementById("subtotal").innerText = "Subtotal: $" + subtotal.toFixed(2);
    document.getElementById("iva").innerText = "IVA (16%): $" + iva.toFixed(2);
    document.getElementById("total").innerText = "Total: $" + total.toFixed(2);
}
