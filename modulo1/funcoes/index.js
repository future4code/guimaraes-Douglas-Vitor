/* // Exercicio: 1
/* function minhaFuncao(variavel) {   Aqui Criamos a funcçao com o  nome de minhaFuncao e passamos o parametro variavel
	return variavel * 5               Aqui demos um return no parametro mutiplicando por 5
} */

// console.log(minhaFuncao(2))     Aqui imprimimos no console os valores de minhaFuncao recebendo o paramtro 2 * 5 = 10
// console.log(minhaFuncao(10))    Aqui imprimimos no console os valores de minhaFuncao recebendo o paramtro 10 * 5 = 50

//Exercicio 2

//let textoDoUsuario = prompt("Insira um texto"); Criando uma variavel e pedindo para o usuario inserir um texto

/* const outraFuncao = function(texto) {            Criando uma const fazendo receber o valor da função texto
	return texto.toLowerCase().includes("cenoura")   e retornando o texto em caixa baixa e usando o Includes para ver se tem Cenoura no texto.
} */

//const resposta = outraFuncao(textoDoUsuario)  cosnt resposta recebendo a autraFuncao com o parametro a variavel textoDoUsuario 
//console.log(resposta) Aresposta no console sera True  ou False.


/* b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura` = True
     ii.  `CENOURA é bom pra vista` True
     iii. `Cenouras crescem na terra` True */

    
 // EXERCÍCIO DE ESCRITA DE CÓDIGO//

// 1° Exercicio//

/* function minhasInfo() {
    let nome = "Douglas Vitor"
    let idade = "25"
    let cidade = "Ariquemes-RO"
    let ocupacao = "estudante"

    console.log(`Eu sou ${nome},tenho ${idade}anos, moro em ${cidade} e sou ${ocupacao}.`)
}
minhasInfo() */

/* function infoPessoais(nome, idade, endereco, proficao) {
    nome = "Laís"
    idade = Number("23")
    endereco = "em Rua Guarapari 190 - São Paulo"
    proficao = "Instrutora"

    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro ${endereco} e sou ${proficao}`)
}
infoPessoais() */

// 2° EXERCÍCIO //

 function somarDoisNumeros(N1 , N2) {
 N1 = 8
 N2 = 10
 somar = N1 + N2
 console.log(somar)
}
somarDoisNumeros() 

 function comparacao(N1, N2) {
 return N1 >= N2
}
console.log(comparacao(11,11)) 

 function parOuImpar() {
    N1 = Number(prompt("Digite um Numero!"))
    return N1 %2 == 0
}
console.log(parOuImpar(5)) 

 function mensagem(text) {
    text = "Olá Mundo!"

    console.log(text.length)
    console.log(text.toUpperCase())
}
mensagem() 


function matematica(N1, N2) {
    N1 = Number(prompt("Digite um Numero!"))
    N2 = Number(prompt("Digite outro Numero!"))

 somar = N1 + N2
 diminuir = N1 - N2
 multiplicar = N1 * N2
 divisao = N1 / N2

 console.log("A soma de  N1 + N2 = ",somar)
 console.log("A subtração de  N1 - N2 = ",diminuir)
 console.log("A multiplicação de  N1 * N2 = ",multiplicar)
 console.log("A divisão de  N1 / N2 = ",divisao)
}
matematica()