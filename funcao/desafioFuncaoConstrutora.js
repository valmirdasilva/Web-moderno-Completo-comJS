 let criaPessoa = nome => {
     return {
        falar: () => console.log(`Meu nome é ${nome}`)
     }
  
}
const p2 = criaPessoa('joão')
p2.falar()

/*
const CriarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = CriarPessoa('João')
p2.falar() */