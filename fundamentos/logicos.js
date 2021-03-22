function compras(trab1, trab2) {
    const comprarSorvete = trab1 || trab2
    const comprarTv50 = trab1 && trab2
//    const comprarTv32 = !!(trab1 ^ trab2) bitwise xor
    const comprarTv32 = trab1 != trab2
    const manterSaudavel = !comprarSorvete // operador unário

    return{ comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}
console.log(compras(true, false)) // true e false estão sendo representadas como trab1 e trab2 | trab1 = true trab2 = false
console.log(compras(false, true))
console.log(compras(true, true))
console.log(compras(false, false))
// DESTE MODO PODEM SER TESTADAS TODAS AS POSSIBILIDADES E VALIDANDO
