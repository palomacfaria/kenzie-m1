let numbers = [1, 2, 3];
let frutas = ['banana', 'maça', 'laranja', 'pera'];
let numerosEFrutas = ['banana', 1, 5, 'maça'];

console.log(numbers);
console.log(frutas);
console.log(numerosEFrutas);

let predio = ['terreo', 'primeiroAndar', 'segundoAndar', 'terceiroAndar', 'quartoAndar'];
console.log(predio);

//Utilizando indice com arrary
console.log(predio[3]); //Terceiro Andar
console.log(predio[0]); //Terreo

//Adicionando um item no final array
predio.push('quintoAndar');
console.log(predio);

//Adicionando um item no inicio do array
predio.unshift('subsolo');
console.log(predio);

//Removendo o ultimo item do array
predio.pop();
console.log(predio);

//Removendo o primeiro item do array
predio.shift();
console.log(predio);