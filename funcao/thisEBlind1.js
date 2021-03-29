const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar() 

const f = pessoa.falar.bind(pessoa)
f() // vai vir funcionar por causa do bind
/*
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // AQUI PEGOU O VALOR POR QUE O BIND ESTÁ PUXANDO O THIS DA CONST PESSOA */