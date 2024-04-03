// Definir el saldo del cliente
let saldo = 120000; // Puedes cambiar este valor para probar diferentes saldos

// Definir la tasa de interés según el saldo
let tasaInteres;

if (saldo < 100000) {
    tasaInteres = 0.03; // 3% de interés para saldos menores a $100,000
} else {
    tasaInteres = 0.04; // 4% de interés para saldos mayores o iguales a $100,000
}

// Calcular el interés pagado
let interesPagado = saldo * tasaInteres;

// Calcular el saldo final
let saldoFinal = saldo + interesPagado;

// Mostrar resultados en la consola
console.log("Saldo final: $" + saldoFinal.toFixed(2));
console.log("Interés pagado: $" + interesPagado.toFixed(2));
