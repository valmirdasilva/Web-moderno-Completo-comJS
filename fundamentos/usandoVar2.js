var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora=', numero)

// Como VAR não diferencia blocos ela trabalha globalmente nesta situação, assim substituindo 1 pelo valor 2 e exibindo fora / dentro o valor = 2