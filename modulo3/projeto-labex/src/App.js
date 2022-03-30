import React, { useState, banana } from 'react';
import { TelaProdutos } from './TelaProdutos';
import styled from 'styled-components';
import { HarryPotterCharacters } from './HarryPotterCharacters';

function App() {
  // const pessoa = {
  //   nome: "iago",
  //   email: "iago@email.com"
  // }
  // const datas = ["2022", "1789"];

  // const retornoDoUseState = useState(0);
  // const contador = retornoDoUseState[0];
  // const setContador = retornoDoUseState[1];

  // const [language, setLanguage] = useState("pt");

  // const [esteAno, revolucao] = datas;

  // console.log("O ano atual é", esteAno)
  // console.log("A revolução francesa foi em", revolucao)
  // const email = pessoa.email;
  // const nome = pessoa.nome;

  // const { email } = pessoa;

  // console.log("O nome é",nome);
  // console.log("O email do iago é",email);
  // console.log("A profissao é",profissao)
  
  // const exercicio1 = () => {
  //   return {
  //     idade: 28,
  //     nome: "iago",
  //     profissao: "instrutor"
  //   }
  // }

  // console.log(exercicio1());

  // const { profissao } = exercicio1()

  // console.log("nome:",nome)
  // console.log("idade",idade)
  // console.log("profissao",profissao)

  const exercicio2 = () => {
    return ["chá", "frutas", "pão", "ovo"]
  }

  const [maisImportante, segundoMaisImportante] = exercicio2();

  // console.log("O item mais importante é",maisImportante)
  // console.log("O segundo item mais importante é", segundoMaisImportante)
  return (
    <div>
      <h1>Custom Hooks - Guimarães</h1>
      <HarryPotterCharacters />
    </div>
  );
}

export default App;
