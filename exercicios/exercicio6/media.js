function calcularMedia() {
    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const nota3 = Number(document.getElementById('nota3').value)
    const notaMedia = (nota1 + nota2 + nota3) / 3

    document.getElementById('mostrarValor').innerText = `A média é: ${notaMedia}`
}
