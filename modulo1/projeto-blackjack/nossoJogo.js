
let meuNome = "Douglas Vitor"
console.log(`Olá ${meuNome}, Bem vindas ao jogo de Blackjack!`)
   if(confirm("Quer jogar o nosso jogo?")) {  
      console.log("Iniciando")
   } else { 
      console.log("O Jogo acabou :(")
   }
   let cartaUsuario = comprarCarta();
   console.log(`${meuNome}: cartas ${cartaUsuario.texto} pontuação: ${cartaUsuario.valor}`)

   let cartaComputador = comprarCarta();
   console.log(`Computador: cartas ${cartaComputador.valor} pontuação: ${cartaComputador.valor}`)
   
   if (cartaUsuario.valor > cartaComputador.valor) {
      console.log(`${meuNome} Parabéns você Ganhou!`)
   }else if(cartaUsuario.valor < cartaComputador.valor) {
      console.log(`O Computador Ganhou!`)
   }else{
      console.log('Empate!')
   }

   
   
  