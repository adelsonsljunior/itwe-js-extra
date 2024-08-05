function mostrarResultado() {

    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.getElementById("numero2").value);
    const numero3 = parseInt(document.getElementById("numero3").value);

    const resultado = ordem(numero1, numero2, numero3);

    document.getElementById("resultado").textContent = `Números ordenados: ${resultado.join(', ')}`;

}

function ordem(a, b, c) {

    numeros = [a, b, c];
    return numeros.sort((a, b) => a - b);
}