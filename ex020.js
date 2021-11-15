/* Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento, pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário. Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade indeterminada de números e retorne a média simples desses números. */

const average = array => array.reduce((acc, curr) => acc + curr) / array.length;

console.log(average([0, 10]), average([1, 2, 3, 4, 5]));