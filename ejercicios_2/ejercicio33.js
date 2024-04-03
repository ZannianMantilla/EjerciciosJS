// Pedir al usuario que ingrese su año de nacimiento y el año de nacimiento de su hijo
let yearOfBirth = prompt("Ingresa tu año de nacimiento:");
let yearOfChildBirth = prompt("Ingresa el año de nacimiento de tu hijo:");

// Convertir los valores ingresados a números enteros
yearOfBirth = parseInt(yearOfBirth);
yearOfChildBirth = parseInt(yearOfChildBirth);

// Calcular la edad de la madre en el momento del nacimiento del hijo
let motherAgeAtChildBirth = yearOfChildBirth - yearOfBirth;

// Mostrar el resultado
console.log("La madre tenía " + motherAgeAtChildBirth + " años cuando dio a luz a su hijo.");
