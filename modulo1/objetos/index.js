//Exercicio de Hoje 23/11/2021 Começa daqui para baixo!


//const filme = {           Criando o Objeto Filme
	//nome: "Auto da Compadecida", adicionando o nome do filme
	//ano: 2000,            Adicionando o Ano do filme
	//elenco: [             Criando um Array do elenco
	//	"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
	//	"Virginia Cavendish"
	//	], 
	//transmissoesHoje: [    Criando um array de transmissões do filme 
	//	{canal: "Telecine", horario: "21h"}, 
	//	{canal: "Canal Brasil", horario: "19h"}, 
	//	{canal: "Globo", horario: "14h"}        Canais e horários que passará
	//	]
//}

//console.log(filme.elenco[0])   Chamando no console o objetos filme dentro de elenco a posição 0 = Matheus Nachtergaele
//console.log(filme.elenco[filme.elenco.length - 1])    Chamando do console filmes dentro de elenco o ultimo item do array = Virginia Cavendish
//console.log(filme.transmissoesHoje[2])        Chamando no console objeto filme dentro de transmisões a posição 2 Globo, Horarioa 14H

// (A) O console ira imprimir os valores. Matheus Nachtergaele, Virginia Cavendish e {canal: 'Globo', horario: '14h'}



//(02)
/* const cachorro = {  Criando o objeto Cachorro e atribuindo seus elementos.
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
} */

//const gato = {...cachorro, nome: "Juba"}  Criando objeto gato e recebendo os mesmo elementos nome, raça, idade 
//const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")} Criando objeto tartaruga e recebendo os mesmo elementos nome, raça, idade  e trocando a letra a por o no nome.

//(A) No console sera impresso os objetos gato, cachorro e tartaruca com os elementos nome,raça e idade com nome de juba,juca e jubo.

//(B) os Três pontos copia os mesmo elemento no objeto anterior.


//(03)

//(A) No console aparecerá false e undefined

//(B)  No console está buscando o valor atribuido a backender que é false e a altura não foi definina então ela vai aparacer indefinida no console.


// Exercício de Codificação! ////

   const pessoa = {
    nome: "Amanda",
    apelidos: [ "Amandinha","Mandinha","Mandi"]

}
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de:${pessoa.apelidos}`) 

const cliente = {...pessoa, apelidos: ["Zequiha", "Diogrinho", "Bidin"]}
console.log(`Eu sou ${cliente.nome}, mas pode me chamar de:${cliente.apelidos}`)  

// Exercicío 02 de codificação //

 function PessosClientesFuncionarios() {

    const funcionario = {
        nome:"Lucas",
        idade: 23,
        profissao: "Advogado"
    }

    const clietes = {
        nome: "Mauro",
        idade: 55,
        profissao: "Carteiro"
    }

    const result = `${funcionario.nome} ${funcionario.nome.length} ${funcionario.idade} ${funcionario.profissao} ${funcionario.profissao.length}`

    return result
}
console.log( PessosClientesFuncionarios()) 


//(03) Exercicio de Codificação!//

var carrinho = []

const fruta1 = {
    nome:"Banana",
    disponivel:true
}
const fruta2 = {
    nome:"Uva",
    disponivel:true
}
const fruta3 = {
    nome:"Laranja",
    disponivel:true
}
function fruta(){
     carrinho.push(fruta1)
     carrinho.push(fruta2)
     carrinho.push(fruta3)
     return carrinho
}
    console.log(fruta())