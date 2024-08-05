function mostrarResultado() {

    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;
    const numero3 = document.getElementById("numero3").value;
    const numero4 = document.getElementById("numero4").value;
    const numero5 = document.getElementById("numero5").value;

    const resultado = maiorMenor(numero1, numero2, numero3, numero4, numero5);
    document.getElementById("resultado").textContent = `O maior valor é ${resultado.maior} e o menor valor é ${resultado.menor}`;
}

function maiorMenor(a, b, c, d, e) {

    const valores = [a, b, c, d, e];
    const maior = Math.max(...valores);
    const menor = Math.min(...valores);

    return { maior, menor };
}