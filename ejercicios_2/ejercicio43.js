// Definimos la expresión regular para reconocer cadenas de doble comillas
let regex = /"((?:\\.|[^"\\])*)"/g;

// Cadena de ejemplo para probar la expresión regular
let cadenaEjemplo = 'Esta es una cadena "con comillas" y con caracteres escapados: \\"texto entre comillas\\".';

// Buscamos todas las coincidencias en la cadena de ejemplo
let coincidencias = cadenaEjemplo.match(regex);

// Mostramos las coincidencias encontradas
console.log("Cadenas de doble comillas encontradas:");
for (let i = 0; i < coincidencias.length; i++) {
    console.log(coincidencias[i]);
}
