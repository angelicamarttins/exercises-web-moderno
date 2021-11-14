/* Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. */

const objectToArray = obj => Object.entries(obj);

console.log(objectToArray({nome: 'Maria', profissao: 'Desenvolvedora de Software'}), objectToArray({codigo: 11111, preco: 12000}));