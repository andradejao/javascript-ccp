function calcularMostrar() {
    const valor1 = Number(document.getElementById('valor1').value)
    const valor2 = Number(document.getElementById('valor2').value)
    const valor3 = Number(document.getElementById('valor3').value)

    const valorSomado = somarValores(valor1, valor2, valor3)

    document.getElementById('mostrarValor').innerText = `A soma dos valores é: ${valorSomado}`
}

function somarValores(valor1, valor2, valor3) {
    return valor1 + valor2 + valor3
}
