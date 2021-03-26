const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // vau vir undefined
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // AQUI PEGOU O VALOR POR QUE O BIND ESTÁ PUXANDO O THIS DA CONST PESSOA