/* Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação. */

const multiple = (num1, num2) => {
    let result = 0;
    num1 >= num2 ? [major, minor] = [num1, num2] : [major, minor] = [num2, num1];

    if (num1 == 0 || num2 == 0) return 0;
    
    for (let i = 0; i < major; i++) {
        result += minor
    };
    return result;
};

console.log(multiple(5, 5), multiple(0, 7), multiple(3, 5), multiple(7, 7));