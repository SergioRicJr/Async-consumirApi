// var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
//     .then(response => response.json()) //da pra colocar tudo depois da primeira linha
//     .then(r=> { //se colocar error vai dar erro = true
//         if (r.erro) {            // forma de tratar erro definida pela viacep, se co
//             console.log('O cep não existe')
//         } else {
//             console.log(r)
//         }
       
//     }) //esse then se refere ao ultimo then()
//     .catch(error => console.log(error.message)) //tratamento de erro, caso de erro no resto
//     .finally(mensagem => console.log("Processamento concluído")) // ao final da promise, aparece dando errado ou certo, o finalmente
                //         // then == então
                //         // nao da pra converter diretamente, so com then()
                //         // then() -- entao transforma
                //         // necessario colocar http:// p funcionar
                //         //fetch está fazendo uma requisicao pro servidor 
                //         // fetch é um metodo assincrono, recebe url da API e devolve promise, mas nao para o codigo pra isso
                //         // promise pode ter status diferentes, reject, pending
                //         // para acessar os resultados usaremos os metodos de promises
// console.log(consultaCEP)

//maneira melhor de codigo assincrono 

async function buscaEndereco(cep) { //so da pra usar await em funcoes assincronas
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCepConvert = await consultaCEP.json()
        if (consultaCepConvert.erro) {
            throw Error("CEP inexistente")
        }
        var cidade = document.getElementById("cidade")
        var logradouro = document.getElementById("endereco")
        var estado = document.getElementById("estado")

        cidade.value = consultaCepConvert.localidade
        logradouro.value = consultaCepConvert.logradouro
        estado.value = consultaCepConvert.uf

        console.log(consultaCepConvert)
        return consultaCepConvert //não é necessário usar await na linha de retorno
    } catch(error) {
        console.log(error.message)
    }
}

var cep= document.getElementById('cep')
cep.addEventListener('blur', ()=>{buscaEndereco(cep.value)})




// let ceps = ['01001000', '01001001']
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores))
// // console.log(conjuntoCeps) // retorna array com as promises
// Promise.all(conjuntoCeps).then(respostas=> console.log(respostas)) //then retorna so depois de resolver a promise
// console.log(lista)
// console.log(Promise.all(conjuntoCeps)) //Promise.all retorna uma unica promise, que resolve quando todas quie estiverem dentro dela forem resolvidas
// buscaEndereco()