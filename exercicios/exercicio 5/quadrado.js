function calcular() {
    const valorLado = Number(document.getElementById('valor').value)
    const valorArea = valorLado * valorLado
    document.getElementById('mostrarValor').innerText = `A área do quadrado é ${valorArea}`
}
