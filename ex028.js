/* Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas */

const inverteObject = obj => {
    let newObj = new Object;
    for (let i in obj) {
        newObj[obj[i]] = i;
    };
    return newObj;
};

console.log(inverteObject({a: 1, b: 2, c: 3}), inverteObject({1: 'a', 2: 'b', 3: 'c'}));