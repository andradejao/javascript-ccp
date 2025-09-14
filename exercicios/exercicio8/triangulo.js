function mostrarValor(){
    const base = Number(document.getElementById('base').value)
    const altura = Number(document.getElementById('altura').value)

    const area = calcularAreaTriangulo(base, altura)

    document.getElementById('mostrarValor').innerText = `A área do retângulo é: ${area}`
}

function calcularAreaTriangulo(base, altura){
    return (base * altura) /2
}
