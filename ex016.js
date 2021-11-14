/* Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares. */

const onlyEven = array => array.filter((element, index) => element % 2 === 0 && index % 2 === 0);

console.log(onlyEven([1, 2, 3, 4]), onlyEven([10, 70, 22, 43]));