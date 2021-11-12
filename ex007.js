/* Crie uma função que receba quatro números como parâmetro(numero, minimo, maximo, inclusivo) e retorne se o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha "entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero é igual a minimo ou a maximo. */

const between = (num, min, max, inclusive = false) => {
    if (min > max) [min, max] = [max, min]; 
    return inclusive  
        ? num >= min && num <= max
        : num > min && num < max
};

console.log(between(60, 100, 50), between(16, 100, 160), between(16, 100, 160), between(3, 150, 3), between(3, 150, 3, true));