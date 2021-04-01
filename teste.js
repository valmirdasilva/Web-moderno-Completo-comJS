//1 ou 3 da um resultado
// 2 ele da outro 
// se for outro da outro resultado

let valor = 5
switch (valor) {
    case 1: 
    case 3:
        console.log('1 ou 3')
        break;
    case 2:
        console.log('valor 2')
        break;
    default:
        console.log('Este valor e invalido')
        break;
}