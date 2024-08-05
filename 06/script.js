function mostrarResultado() {

    const numero1 = parseInt(document.getElementById("numero1").value);
    const resultado = parOuImpar(numero1);

    if (resultado) {
        document.getElementById("resultado").textContent = "Par";
    } else {
        document.getElementById("resultado").textContent = "Ímpar";

    }
}

function parOuImpar(x) {

    if (x % 2 == 0) {
        return true;
    } else {
        return false;
    }
}