function obtenerSignoZodiacal() {
    const mesInput = document.getElementById("mesInput").value.toLowerCase();
    let signo = "";

    if (mesInput === "enero") {
        signo = "Capricornio o Acuario";
    } else if (mesInput === "febrero") {
        signo = "Acuario o Piscis";
    } else if (mesInput === "marzo") {
        signo = "Piscis o Aries";
    } else if (mesInput === "abril") {
        signo = "Aries o Tauro";
    } else if (mesInput === "mayo") {
        signo = "Tauro o Géminis";
    } else if (mesInput === "junio") {
        signo = "Géminis o Cáncer";
    } else if (mesInput === "julio") {
        signo = "Cáncer o Leo";
    } else if (mesInput === "agosto") {
        signo = "Leo o Virgo";
    } else if (mesInput === "septiembre") {
        signo = "Virgo o Libra";
    } else if (mesInput === "octubre") {
        signo = "Libra o Escorpio";
    } else if (mesInput === "noviembre") {
        signo = "Escorpio o Sagitario";
    } else if (mesInput === "diciembre") {
        signo = "Sagitario o Capricornio";
    } else {
        signo = "Mes no válido";
    }

    document.getElementById("resultado").innerText = `El signo zodiacal para ${mesInput} es ${signo}.`;
}
