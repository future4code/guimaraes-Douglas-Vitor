/*  (01)
    (A) Vai imprimir no console os 3 objetos e array com nome e apelodi de cada usuarios.
*/

/*  (02)
    (A) imprimira um array com nome dos usuarios contendo, indici 0,1,2
*/

/*  (03) 
    (A)  Ele imprimira os usuarios com o apelido diferente de chijo no caso no console so terá dois usuários.
*/

// Exercicio de Codificação///
 
 const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomeCachorros = pets.map((item, index, array) => {
            return item.nome
 })

 const returnCachorroSalsicha = pets.filter((item) => {
    return item.raca === "Salsicha"
})

const descontoTosa = pets.filter((item, index, array) => {
    return item.raca === "Poodle" 
})

const returnPoodlePromo = pets.filter((item) => {
    if (item.raca === "Poodle")
       return item.nome
 
 })
 
 const mensagem = returnPoodlePromo.map((item) => {
     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
 })
  console.log(mensagem) 
 
 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

const nomeProdutos = produtos.map((item, index, array) => {
    return item.nome
 })
 console.log(nomeProdutos)

 const descontoProdutos = (produtos) => {
    return produtos.map(produto => {
        return {
            nome: produto.nome,
            preco: (produto.preco*0.95).toFixed(2)
        }
    });
};
console.log(descontoProdutos(produtos)); */

