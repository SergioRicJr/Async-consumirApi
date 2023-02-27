var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
    .then(response => response.json()) //da pra colocar tudo depois da primeira linha
    .then(r=> { //se colocar error vai dar erro = true
        if (r.erro) { // forma de tratar erro definida pela viacep, se co
            console.log('O cep não existe')
        } else {
            console.log(r)
        }
       
    }) //esse then se refere ao ultimo then()
    .catch(error => console.log(error.message)) //tratamento de erro, caso de erro no resto
    .finally(mensagem => console.log("Processamento concluído")) // ao final da promise, aparece dando errado ou certo, o finalmente
// then == então
// nao da pra converter diretamente, so com then()
// then() -- entao transforma
// necessario colocar http:// p funcionar
//fetch está fazendo uma requisicao pro servidor 
// fetch é um metodo assincrono, recebe url da API e devolve promise, mas nao para o codigo pra isso
// promise pode ter status diferentes, reject, pending
// para acessar os resultados usaremos os metodos de promises
console.log(consultaCEP)