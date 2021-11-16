/* Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que têm a quantidade de dígitos indicada pelo segundo parâmetro. */
let res;
const numDigits = (array, digits) => array.filter(num => res = String(num).length === digits);

console.log(numDigits([38, 2, 365, 10, 125, 11], 2), numDigits([5, 9, 1, 125, 11], 1), numDigits([5, 9, 1, 125, 11], 0), numDigits([5, 9, 1, 125, 11], 3));