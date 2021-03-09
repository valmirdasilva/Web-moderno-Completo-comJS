const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores [0], valores[3])
console.log(valores[4])

// Ele preenche o indice 4 com o valor 10. CASO PROCURE OUTRO INDICE ELE MOSTRA OS CAMPOS VAZIOS E O QUE SERA PREENCHIDO
valores[4] = 10
console.log(valores)
//valores[10] = 20
//console.log(valores)

//EXIBE A QUANTIDADE DE ELEMENTOS DENTRO DO ARRAY
console.log(valores.length)

//ADICIONA NOVOS ELEMENTOS NO ARRAY
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//ESTE COMANDO PEGA O ULTIMO VALOR DO ARRAY E RETIRA
console.log(valores.pop())
console.log(valores)

delete valores[0]
console.log(valores)

// MOSTRA QUE UM ARRAY É DIFINIDO COMO OBJETO
console.log(typeof valores)
