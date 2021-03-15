// Este recurso foi atribuido no ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000,
        cep: 93800000
    }
}
// COM ESTE MODO, ESTÁ TIRANDO AS INFORMAÇÕES ESPECIFICA DO OBJETO
const { nome, idade} = pessoa
console.log(nome, idade)
// Criando variaveis para as atribuições que estão sendo buscadas
const {nome: n, idade: i} = pessoa
console.log(n,i)
// Você pode adicionar na exibição valores junto a outro objeto
const {sobrenome = 'silva', bemHumorada = 'sim'} = pessoa
console.log(nome,sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)