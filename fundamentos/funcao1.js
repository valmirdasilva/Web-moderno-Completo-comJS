// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b) // ele tentou somar, mas como não encontrou nada retornou vazio 
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
// Funcao com retorno
function soma(a = 1, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))