/* Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas. */

 const characterCounter = (letter, string) => {
    let total = 0;
    [...string].map(element => {
        if (element === letter) total++
    });
    return total; 
};

 console.log(characterCounter("r", "A sorte favorece os audazes"), characterCounter("c", "Conhece-te a ti mesmo"), characterCounter('a', "angélica cristiane martins"));