function somar() {
    const valor1 = Number(document.getElementById('valor1').value)
    const valor2 = Number(document.getElementById('valor2').value)
    const valorSomado = valor1 + valor2

    document.getElementById('mostrarValor').innerText = "A soma dos dois valores é: " + valorSomado
}
