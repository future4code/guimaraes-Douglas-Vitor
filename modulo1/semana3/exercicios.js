// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    array = array.length
    return array
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  array.reverse()
  return array
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort(function(a,b){
        return a - b
    })
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
   array = array.filter(function(item){
       if(item %2 === 0) {
         return true
       }
   })
   return array
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let Pares = [];
    for (const par of array) {
        if (par % 2 === 0)
            Pares.push(par * par)
    }
    return Pares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    array = Math.max.apply(null, array)
    return array
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
        let maiorNumero = '';
        let menorNumero = '';
        let maiorDivisivelPorMenor = '';
        let diferenca = '';
    
        if (num1 > num2) {
            maiorNumero = num1;
            menorNumero = num2
        } else {
            maiorNumero = num2;
            menorNumero = num1
        }
    
        if (maiorNumero % menorNumero === 0) {
            maiorDivisivelPorMenor = true;
        } else {
            maiorDivisivelPorMenor = false;
        }
    
        diferenca = maiorNumero - menorNumero
    
        return {
            "maiorNumero": maiorNumero,
            "maiorDivisivelPorMenor": maiorDivisivelPorMenor,
            "diferenca": diferenca
        }
    
    }

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
        const arrPares= []
        for(let i = 0; arrPares.length < n; i++) {
            if(i % 2 === 0) {
                arrPares.push(i)
            }
        }
        return arrPares
    }
// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    function avaliarTri() {
        if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
          return 'Equilátero'
        } else if (ladoA === ladoB || ladoB === ladoC || ladoC === ladoA) {
          return 'Isósceles'
        } else {
          return 'Escaleno'
        }
      }
      return avaliarTri()    
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let arrayNum = []
    let max = Math.max.apply(null, array)
    let max2 = array.indexOf(max)
    array[max2] = - Infinity
    let segundoMaior = Math.max.apply(null, array)
    array[max2] = max
    arrayNum.push(segundoMaior)

    let min = Infinity,
    segundoMenor = Infinity
        for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
        segundoMenor = min
        min = array[i]
    } else if (array[i] < segundoMenor) {
      segundoMenor = array[i]
    }
  }
  arrayNum.push(segundoMenor)
  return arrayNum
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const oDiaboVestePrada = { 
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
        }
        return(`Venha assistir ao filme ${oDiaboVestePrada.nome}, de ${oDiaboVestePrada.ano}, dirigido por ${oDiaboVestePrada.diretor} e estrelado por ${oDiaboVestePrada.atores[0]}, ${oDiaboVestePrada.atores[1]}, ${oDiaboVestePrada.atores[2]}, ${oDiaboVestePrada.atores[3]}.`)
    }

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let pessoaAnonima = {...pessoa,  nome: "ANÔNIMO"}

   return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    var consultasOrdenadas = [];
      for (var i = 0; i < consultas.length; i++) {
          consultasOrdenadas.push(consultas[i].nome);
      }
      consultasOrdenadas.sort();
      var consultacomp = [];
      for (var i = 0; i < consultasOrdenadas.length; i++) {
          for (var j = 0; j < consultas.length; j++) {
              if (consultasOrdenadas[i] === consultas[j].nome) {
                  consultacomp.push(consultas[j]);
              }
          }
      }
      return consultacomp;
  
  }

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}