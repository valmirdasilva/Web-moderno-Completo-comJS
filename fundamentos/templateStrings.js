const nome = 'teste'
// QUANDO SE ATRIBUI O COMENTÁRIO COM CRASE PODE SER FEITA A QUEBRA DE LINHA
const template = `Olá 
${nome}
 !`

console.log(template)
//esxpressoes
console.log(`1 + 1 = ${1+1}`)
// Atribuindo com a arrow function
const up = s => s.toUpperCase()

console.log(`teste ${up('cuidado')}!`)