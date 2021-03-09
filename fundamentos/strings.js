const escola = 'Cod3r'
console.log(`Escola ${escola}!`)
console.log('Escola '+ escola +'!')
// PEGA UM DETERMINADO CARACTERE DENTRO DA STRING
console.log(escola.charAt(4))
// PEGA O CÓDIGO DO CARACTERE
console.log(escola.charCodeAt(3))
// indexOf pega a posição em que o caractere está dentro da variável seu indice
console.log(escola.indexOf('3'))
// PODE SUBSTITUIR UMA LETRA ou NOME ESPECIFICO DENTRO DA VARIÁVEL
console.log(escola.replace(3, 'aa'))
// ESCOLHE EM QUAL INDICE VAI SE INICIAR A LEITURA E ONDE PODE TERMINAR
console.log(escola.substring(1))
console.log(escola.substring(0, 3))
// CONVERTE AS STRINGS A BAIXO EM UM ARRAY, DENTR DO SPLIT VOCÊ DEFINE O QUE USAR COMO SEPARADOR
console.log('Ana, Maria, Pedro'.split(','))
