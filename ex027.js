/* Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as consoantes, ou seja, sem as vogais. */

const onlyConsonants = string => String(string.match(/[^aeiou]/gi).join(''));

console.log(onlyConsonants('Cod3r'), onlyConsonants('Fundamentos'))