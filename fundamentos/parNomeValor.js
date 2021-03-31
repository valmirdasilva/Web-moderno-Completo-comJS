/*/ par = const | nome = saudacao | valor = 'Opa'
const saudacao = 'Opa'

function exec() {
    const saudacao = 'Falaaa'
    return saudacao
} 
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito legal',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente) */

const teste = {
    nome: 'Junior',
    idade: 15
}
const{ nome, idade} = teste
console.log(nome, idade)