/* Criar uma função que receba um array de números e retorne o menor número desse array. */

const smallerNum = array => Math.min(...array);

console.log(smallerNum([10, 5, 35, 65]), smallerNum([5, -15, 50, 3]));
