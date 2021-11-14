/* Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro. */

const numsFiltered = num => typeof num === 'number';
const filterNums = array => array.filter(numsFiltered);

console.log(filterNums(["Javascript", 1, "3", "Web", 20]), filterNums(["a", "b", "c"]));