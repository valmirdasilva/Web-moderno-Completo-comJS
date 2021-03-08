const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
// Lê o valor da variavel vendo se é number e retorna em boolean "TRUE OR FALSE"
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
// Aplica a formatação nos números podendo escolher as casas para exibir
console.log(media.toFixed(2))

//Converte um número inteiro em String == utilizando o (2) converte em valores binarios
console.log(media.toString(2))

//Mostra que tipo é o resultado ex: Number, string etc...
console.log(typeof media)