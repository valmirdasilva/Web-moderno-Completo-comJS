/*const funcs = []
for (let i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[8]() */

const func = []
for(let i = 0; i < 10; i++) {
    func.push(function() {
        console.log(i)
    })
}
func[3]()