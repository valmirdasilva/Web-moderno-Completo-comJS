let contador = 1
/* while (contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++   
}*/

/* for(contador; contador <= 10; contador++) {
    console.log(`contador= ${contador}`)
}
console.log('Saiu do laço = ' + contador) */

const notas = [1, 2, 1.1, 21, 31, 1.5]
for(let i = 0; i < notas.length; i++) {
    console.log(`Contador ${notas.sort()[i]}`)
}