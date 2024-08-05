function monstarResultado() {

    const letra = document.getElementById("letra").value;

    const resultado = vogal(letra);
    if (resultado == 1) {
        document.getElementById("resultado").textContent = "Vogal";
    } else {
        document.getElementById("resultado").textContent = "Consoante";
    }

}

function vogal(letra) {
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        return 1;
    } else {
        return 0;
    }
}