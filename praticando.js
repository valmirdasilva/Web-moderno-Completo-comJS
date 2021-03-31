//ARMAZENANDO UMA FUNÇÃO EM UMA VARIAVEL
/* const teste = function (a, b) {
    return a + b
}
console.log(10 + 2) 

let info = {
    nome: 'Valmir',
    idade: 22,
    nascimento: '12/02/1999',
    endereco: {
        rua: 'rua teste',
        numero: 444
    }
}

let{nome, idade, nascimento, endereco:{rua, numero}} = info
console.log(nome, idade, nascimento, rua, numero) 

const valores = [1,2,3,4,5,6,8,7,9]
console.log(valores.length, valores[2]) */

/*
let i = 0
while (i < 20) {
    console.log('The number is ' + i)
    i++
} */
/*
let n = 0;
let x = 0;

while (n < 3) {
    n++
    console.log(x += n)

} 

const teste = [10,20,50,49,75,88,100]
let aprovado = 0
let reprovado = 0

for( dados of teste) {
    60 < dados ? aprovado++:reprovado++
}
console.log(aprovado)
console.log(reprovado)

const teste1 = {
    nome: 'pedro',
    idade: 22,
    cidade: 'Sapiranga'
}

for(obj in teste1) {
    console.log('Valores ' + teste1[obj])
}

function valor(filtro) {
    return (filtro ? '10.00':'20.00')
}
console.log(valor(true))

let valor = (filtro) => filtro ? '10.00':'20:00'
console.log(valor(true)) 

const prova = [100,80,65,49,32,77,79]
let passou = 0
let ficou = 0

for( let resultado of prova) {
    60 < resultado ? passou++: ficou++ 
}
console.log(passou)
console.log(ficou)*/

const teste = {
    nome:'pedro',
    cidade:'Sapiranga',
    idade: 5
}
for(let filtro in teste) {
    console.log(teste[filtro])
}



