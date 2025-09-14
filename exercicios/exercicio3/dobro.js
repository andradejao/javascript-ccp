function calcularDobro() {
    let valor = document.getElementById('valor').value
    let valorDobrado = valor * 2
    const mostrarValor = document.getElementById('mostrarValor').innerText = `O dobro de ${valor} é ${valorDobrado}`
}
