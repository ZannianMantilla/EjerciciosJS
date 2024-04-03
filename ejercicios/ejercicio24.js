function validarNumero() {
    // Expresión regular para reconocer números en punto flotante
    let regex = /[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/;
    
    // Obtener el valor del input
    let input = document.getElementById("inputNumber").value;
    
    // Verificar si el valor coincide con la expresión regular
    if (regex.test(input)) {
      alert("El número ingresado es válido.");
    } else {
      alert("El número ingresado no es válido.");
    }
  }
  