/* // Lança o arrendondamento do número para cima
console.log(Math.ceil(6.1)) // = 7
// Lança o arrendondamento do número para baixo
console.log(Math.floor(6.1)) // = 6

*/

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2' // DESTE MODO É MAIS FLEXIVEL, MAS NÃO RECOMENDADO
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function(){
        console.log('exec...')
    }
}
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()