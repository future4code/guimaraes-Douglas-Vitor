//(01)Exercício

//(A) O codigo esta testando se o Numero digitado pelo USUÁRIO é par ou  Impar.
//(B) Os numeros pares com ressto 0 passa no teste.
//(C) Os numero impares com resto 1 não passa no teste.

//(02)Exercício

//(A) O codigo acima é uma estrutura de escolha onde o usuário escolherá alguma furta e dessa fruta sera exibido!
//(B) Caso o Usuário escolha a maçã o valor impresso sera o valor da fruta Maçã é 2.25
//(C) Caso o Usuário queira a pêra e esquecemos o Break ele caira no default onde o valor padrão a ser mostrado é o nome da fruta e o valor padrão de 5 reais.

//(03)Exercício

//(A) A primeira linha esta sendo cria a variavel const numero e sendo convertida para um numero e pegando um numero do usuário.
//(B) Se o Usuario digitar o numero 10 a sera exibido o console a mensagem passou no teste e  essa mensagem é secreta. mas se for -10  nada mostrará por que n foi definido para ele fazer nada caso a função não seja verdadeira.
//(C) Sim tem um erro pois o  console esta sendo chamado fora do escopo para ser  chamado la fora deveria ter um return ou algo do tipo.

//Exercício de Codificalção// 

 let idade = Number(prompt("Digite sua idade"))
if(idade >= 18){
    console.log("Você já está na idade de retirar sua carteira dde Habilitação para  poder dirigir!")
} else{
    console.log("Voê ainda não tem a idade minima para poder Dirigir!")
} 


let horaDeEstudar = prompt("Digite em que periodo você estuda? M, V, N")
    if(horaDeEstudar === 'm' || horaDeEstudar === 'M') {
        console.log("Bom dia! Voce estuda na parte da manhã.")
    }if(horaDeEstudar === 'v' || horaDeEstudar === 'V') {
        console.log("Boa Tarde! Você estuda na parte da Tarde!")
    }if(horaDeEstudar === 'n' || horaDeEstudar === 'N'){
        console.log("Boa Noite! Você estuda na parte da Noite!")
    }else{
        console.log("Periodo inexistente!")
    } 

 let horaDeEstudos = prompt("Digite em que periodo você estuda? M, V, N")

 switch(horaDeEstudos) {
     case 'M':
     case 'm':
         console.log("Bom dia! Voce estuda na parte da manhã.")
    break;
    case 'V':
    case 'v':
        console.log("Boa Tarde! Você estuda na parte da Tarde!")
    break;
    case 'N':
    case 'n':
        console.log("Boa Noite! Você estuda na parte da Noite!")
    break;
    default:
        console.log("Periodo inexistente!")
    break;
 }
 let generoFilme = prompt("Qual gênero do Filme que deseja assistir?")
 let precoIngresso = Number(prompt("Quanto custa o ingresso do Filme?"))
    if(generoFilme ==='fantasia' && precoIngresso <15) {
        console.log("Bom Filme!")
    }else{
        console.log("Escolha outro filme :(")
    } 