function mostrarResultado() {

    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.getElementById("numero2").value);

    const resultado = limites(numero1, numero2);
    const soma = somarElementos(resultado);

    document.getElementById("resultado").textContent = `Números pares: ${resultado.join(', ')}`;
    document.getElementById("soma").textContent = `Soma: ${soma}`;

}

function limites(li, ls) {

    let pares = [];

    for (let i = li + 1; i < ls; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }

    }

    return pares;
}

function somarElementos(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}