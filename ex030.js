/* Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array. */

const secondBiggestNum = array => array.sort((a, b) => b - a)[1];

console.log(secondBiggestNum([12, 16, 1, 5]), secondBiggestNum([8, 4, 5, 6]));