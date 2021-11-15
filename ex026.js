/* A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro. */

const similarWords = (substring, string) => string.filter(word => word.includes(substring));

console.log(similarWords("pro", ["programação", "mobile", "profissional"]), similarWords("python", ["javascript", "java", "c++"]), similarWords('java', ['python', 'c#', 'java', 'c++', 'visual basic', 'javascript', 'javalovers']));