//**************************************STRINGS**************************************
//replace -> Método para mudar uma informação
const frase = 'Estou estudando JavaScript, e estou gostando muito de JavaScript';
console.log(frase);

let novaFrase = frase.replace('JavaScript', 'HTML5');
console.log(novaFrase);

//*********************************************************************************** */
//replaceAll -> Método para mudar todas as informações passadas nos parametros
novaFrase = frase.replaceAll('JavaScript', 'HTML5');
console.log(novaFrase);

//*********************************************************************************** */
//StartsWith -> Verifica se a informação começa com as informações passadas
let comecaCom = frase.startsWith('est'); //false
console.log(comecaCom);

//Também é possível passar um índice
comecaCom = frase.startsWith('est', 6); //false
console.log(comecaCom);

//**************************************NUMBERS**************************************
//toFixed() -> Permite que eu mostre apenas a quantidade de números passados depois da virgula, dentro do parenteses caso o número seja muito grande.
let valor = 10.00329487;
let valorFormatado = valor.toFixed(3);
console.log(valorFormatado); //toFixed também transforma em string

//isInteger() -> Verifica se é inteiro (SEMPRE DEVE USAR O Number.isInteger)
console.log(Number.isInteger(valor));

//parseFloat() -> Transforma o valor em string em um tipo Number que tenha casas decimais
console.log(typeof valorFormatado); //string depois de aplicar o toFixed(2)
let valorSomado = parseFloat(valorFormatado) + 2; //convertendo o valor para número;
console.log(typeof valorSomado, valorSomado);

//parseInt() -> Transforma um valor em string em um Number do tipo inteiro
valorSomado = parseInt(valorFormatado) + 2;
console.log(typeof valorSomado, valorSomado);