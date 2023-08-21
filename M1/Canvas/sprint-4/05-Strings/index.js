/*Crie um programa que concatene dois nomes e retorne uma frase de saudação.
Entrada: nome1 = "João", nome2 = "Silva" Saída: "Olá João Silva!"*/

const nome = "João";
const sobrenome = "Silva";
console.log(`Olá ${nome} ${sobrenome}!`);

/*Crie um programa que adicione uma string ao final de outra string e retorne a string resultante.
Entrada: string1 = "hello", string2 = "world" Saída: "helloworld"*/

const string1 = "hello";
const string2 = "word";
console.log(string1 + string2);

/*Crie um programa que receba uma string em formato de número decimal e retorne o número inteiro equivalente.
Entrada: "12.5" Saída: 12*/
const decimal = 12.5;
console.log(parseInt(decimal));

/*Crie um programa que converta uma string em formato de número inteiro para um número inteiro.
Entrada: "12" Saída: 12*/
const inteiro = "12";
console.log(parseInt(inteiro));

/*Crie um programa que converta duas strings em formato de número inteiro para um número inteiro, faça uma soma desses números e apresente o resultado
Entrada 1: "12" Entrada 2: "3" Saída: 15*/
const num1 = "12";
const num2 = "3";
console.log(parseInt(num1) + parseInt(num2));