// let isAtivo = false
// console.log(isAtivo)

// isAtivo = true
// console.log(isAtivo)

// COM "!! exclamação força o resutado ser verdadeiro ou falso"
isAtivo = 1
console.log(!!isAtivo)
isAtivo = 1
console.log(!isAtivo)

console.log('booleanos verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('curiosidade')
console.log('' || null || 0 || 'epa')

// SEMPRE VAI BUSCAR PELO TRUE, SE NADA FOR TRUE ELE RETORNA VAZIO
let nome = ''
console.log(nome || 'perdido')
