/* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array */

const newArray = array => {
    let arr = new Array;
    let firstElement = array[0];
    let lastElement = array[array.length - 1];
    
    arr.push(firstElement, lastElement);
    return arr;
};

console.log(newArray([7, 14, "olá"]), newArray([-100, "aplicativo", 16]));