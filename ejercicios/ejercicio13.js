document.getElementById("numerosForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores de los campos de entrada
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);
    let num4 = parseFloat(document.getElementById("num4").value);

    // Calcular la media
    let media = (num1 + num2 + num3 + num4) / 4;

    // Mostrar el resultado en el párrafo con id "resultado"
    document.getElementById("resultado").innerText = "La media de los números es: " + media;
});
