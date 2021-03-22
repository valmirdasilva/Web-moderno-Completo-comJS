let a = 3 // não é uma variável global

global.b = 123
console.log(b) // Está variável está no escopo global

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//Criando variavel maluca: sem ver e let!
abr = 3 // não faça isso em casa!!
console.log(global.abr)

//module.exports = { e: 456, f: false, g: 'teste' }