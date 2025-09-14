function calcular() {
    const alturaDegrau = document.getElementById('alturaDegrau').value
    const alturaDesejada = document.getElementById('alturaDesejada').value

    if (alturaDegrau <= 0 || alturaDesejada <= 0) {
        alert("Digite um valor maior que zero.")
        return
    } else {
        const degraus = Math.floor(alturaDesejada / alturaDegrau)

        document.getElementById('mostrarValor').innerText = `Para alcançar a altura, terá que subir ${degraus} degraus`
    }
}
