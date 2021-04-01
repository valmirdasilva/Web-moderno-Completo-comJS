function getrandom(min, max) {
    const valor = Math.random() * (max - min) + min
        return Math.floor(valor)    
}
let opcao = 1

while (opcao != -1) {
    opcao = getrandom(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}
console.log('até a proxima!')