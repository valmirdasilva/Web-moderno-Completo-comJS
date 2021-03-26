/*const recebe = function(converte) {
    switch (converte) {
        case true:
            console.log('false')
            break
        case false:
            console.log('true')
            break
        case recebe:
            console.log(`Math.abs(recebe)`)
            break

        default:
            console.log('Nota inválida')
    }
}
recebe(2) */
/*
const recebe = function (valor) {
    if (valor == true) {
        console.log(false)
    } else if (valor == false) {
        console.log(true)
    } else if (valor == parseFloat(valor)){
        console.log(-valor)
    } else {
        console.log(!!valor)
    }
        
}
recebe(1)
*/


function recebe(filtro) {
    if (filtro == parseInt(filtro)) {
        console.log(-filtro)
    } else {
        console.log(!filtro)
    }
}
recebe('teste')