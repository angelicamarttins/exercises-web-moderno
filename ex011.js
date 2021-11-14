/* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array */

const newArray = array => {
    let arr = new Array;
    arr.push(array[0], array[array.length - 1]);
    return arr;
};

console.log(newArray([7, 14, "olá"]), newArray([-100, "aplicativo", 16]));