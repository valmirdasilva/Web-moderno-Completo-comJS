
function imprimirG(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErroElancar(e)
    }
}

const obj = { name: 'Junior'}
imprimirG(obj)