/* Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela. */

const wordsCounter = string => string.split(' ').length;

console.log(wordsCounter("Sou uma frase"), wordsCounter("Me divirto aprendendo a programar"))