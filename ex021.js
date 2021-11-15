/* Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão deverá ser de duas casas decimais, arredondando se necessário. */

const triangleArea = (base, height) => ((base * height) / 2).toFixed(2);

console.log(triangleArea(10, 15), triangleArea(7, 9), triangleArea(9.25, 13.1));