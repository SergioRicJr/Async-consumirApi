// console.log("1")
// function escreve(){
//     console.log("2")
//     console.log("3")
//     console.log("4")
// } // func escreve ta sendo chamada como parametro do setTimeOut ou seja, funcionando como callback
// setTimeout(escreve, 5000) // assincrono pois td acontece e depois essa função
// console.log("5")
// //cal

// console.log("\n1") //sincrono tudo indo pra callstack direto
// function escreve(){
//     console.log("2")
//     console.log("3")
//     console.log("4")
// }
// escreve() 
// console.log("5\n")
// anatomia da promise --> normalmente é gerada por uma funcao assincrona como o fetch
const entrega = new Promise((resolve, reject)=>{ 
    if (recebeu == true){
        resolve('Você recebeu a encomenda')
    } else {
        reject('Não foi possivel completar a encomenda')
    }
})