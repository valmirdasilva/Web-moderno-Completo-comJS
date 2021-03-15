let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
// LET possui um funcionamento diferente em blocos, que limita por escopo. Assim numero = 1 responde como fora e numero = 2 como dentro.