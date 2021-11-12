/* Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado. */

const repeat = (element, repeat) => {
    let array = new Array;
    
    for (let i = 0; i < repeat; i++) {
        array.push(element);
    }

    return array;
};

console.log(repeat('code', 2), repeat(7, 3), repeat(true, 5));