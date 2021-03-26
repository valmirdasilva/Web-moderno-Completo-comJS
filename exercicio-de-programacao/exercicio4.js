//EXIBIR DIA DO MÊS COM NÚMERO
/*let numero = 2
if (numero == 1) {
    console.log('Janeiro')
} else if (numero == 2) {
    console.log('Fevereiro')
} else if (numero == 3) {
    console.log('Março')
} else if (numero == 4) {
    console.log('Abril')
} else if (numero == 5) {
    console.log('Maio')
} else if (numero == 6) {
    console.log('Junho')
} else if (numero == 7) {
    console.log('Julho')
} else if (numero == 8) {
    console.log('Agosto')
} else if (numero == 9) {
    console.log('Setembro')
} else if (numero == 10) {
    console.log('Outubro')
} else if (numero == 11) {
    console.log('Novembro')
} else if (numero == 12) {
    console.log('Dezembro')
} else {
    console.log('Valor invalido')
} */

const imprimirResultado = function(mes) {
    switch (mes) {
        case 1:
            console.log('Janeiro')
            break
        case 2:
            console.log('Fevereiro')
            break
        case 3:
            console.log('Março')
            break
        case 4:
            console.log('Abril')
            break
        case 5:
            console.log('Maio')
            break
        case 6:
            console.log('Junho')
            break
        case 7:
            console.log('Julho')
            break
        case 8:
            console.log('Agosto')
            break
        case 9:
            console.log('Setembro')
            break
        case 10:
            console.log('Outubro')
            break
        case 11:
            console.log('Novembro')
            break
        case 12:
            console.log('Dezembro')
            break
        default:
            console.log('DIA DO MÊS INVALIDO')
    }
}
imprimirResultado(12)