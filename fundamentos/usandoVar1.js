{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}
console.log(sera)
// Dentro do bloco VAR pode ser exibido fora do bloco com console.log

function teste() {
    var local = 123
    console.log(local)
}
// Em uma function var só funciona dentro do escopo.
teste()
console.log(local)
// Na hora que tentar executar fora vai dar erro como "local não defino"
