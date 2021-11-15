/* Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas. */

const totalExpenses = array => array.map(element => element.preco).reduce((acc, current) => acc + current);

console.log(totalExpenses([{nome: "Jornal online", categoria: "Informação", preco: 89.99}, {nome: "Cinema", categoria: "Entretenimento", preco: 150}]));
console.log(totalExpenses([{nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99}, {nome: "MacBook Pro", categoria: "Eletrônicos", preco: 30999.90}]))