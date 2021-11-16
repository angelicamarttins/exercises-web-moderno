/* Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas. */

const majorAverage = list => {
    let result, name;
    let average = 0;

    for (let i in list) {
        result = list[i].reduce((acc, atual) => acc + atual) / list[i].length;
        
        if (result > average){
            name = i;
            average = result;
        }
    }
    return {'nome': name, 'media': average.toFixed(2)}
};

console.log(majorAverage({
    João: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}));

console.log(majorAverage({
    Maria: [8, 6.6, 9.9, 5],
    Mayara: [10, 8.6, 5.9, 8],
    Milena: [5, 6, 7, 8],
    Angélica: [4, 8.8, 9.9, 0]
}));