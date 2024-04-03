// Definición de los precios de los productos
const precioProductos = [100, 200, 150, 250, 180];

// Aplicar descuento a los productos
const descuento1 = 0.05; // 5%
const descuento2 = 0.02; // 2%

// Calcular el valor a pagar por cada producto
const valorAPagar = precioProductos.map((precio, index) => {
    if (index < 2) {
        return precio * (1 - descuento1);
    } else {
        return precio * (1 - descuento2);
    }
});

// Calcular el total de la compra
const totalCompra = valorAPagar.reduce((total, valor) => total + valor, 0);

// Mostrar los resultados
console.log("Valor a pagar por cada producto:");
valorAPagar.forEach((valor, index) => {
    console.log(`Producto ${index + 1}: $${valor.toFixed(2)}`);
});
console.log(`Total de la compra: $${totalCompra.toFixed(2)}`);
