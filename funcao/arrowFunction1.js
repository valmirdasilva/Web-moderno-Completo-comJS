//TROCANDO FUNCTION POR ARROW FUNCTION
let dobro = (a) => {
    return 2 * a
}
console.log(dobro(10))

// RETORNO IMPLICITO 
dobro = a => 2 * a //SOMENTE FUNCIONA COM UM PARAMETRO
console.log(dobro(Math.PI))

let ola = () => 'Olá'
console.log(ola())