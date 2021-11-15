/* Escreva uma função que receba um array de números e retornará a soma de todos os números desse array. */

const sum = array => array.reduce((acc, current) => acc + current);

console.log(sum([10, 10, 10]), sum([15, 15, 15, 15]));