const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número Secreto:', numeroSecreto )

const elementoMenosValor = document.getElementById ('menor-valor')
elementoMenosValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById ('maior-valor')
elementoMaiorValor.innerHTML = maiorValor