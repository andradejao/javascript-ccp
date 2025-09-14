function calcular() {
    const nome = document.getElementById('nome').value
    const anoNascimento = document.getElementById('anoNascimento').value
    const anoAtual = document.getElementById('anoAtual').value
    const idade = anoAtual - anoNascimento

    const mostrarValor = document.getElementById('mostrarValor')

    mostrarValor.innerHTML = `<div>O seu nome é ${nome} <br> e você tem ${idade} anos</div>`
}
