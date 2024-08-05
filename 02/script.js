function mostarResultado() {

    const letra = document.getElementById("letra").value;

    const resultado = vogal(letra);
    if (resultado == 1) {
        document.getElementById("resultado").textContent = "Vogal";
    } else {
        document.getElementById("resultado").textContent = "Consoante";
    }
}

function vogal(c) {
    if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u") {
        return 1;
    } else {
        return 0;
    }
}