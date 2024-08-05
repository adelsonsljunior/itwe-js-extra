function mostrarResultado() {

    const numero1 = parseInt(document.getElementById("numero1").value);
    const resultado = positivoOuNegativo(numero1);

    if (resultado) {
        document.getElementById("resultado").textContent = "Positivo";
    } else {
        document.getElementById("resultado").textContent = "Negativo";

    }
}

function positivoOuNegativo(x) {

    if (x > 0) {
        return true;
    } else {
        return false;
    }
}