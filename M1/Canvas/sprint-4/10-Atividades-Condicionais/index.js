// Exercício 1
// Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor
// que C.

const a = 10;
const b = 15;
const c = 5;
const soma = a + b;

if(soma > c){
    alert("A soma é maior que C");
}else if(soma === c){
    alert("a soma é igual a C");
}else{
    alert("A soma é menor que C")
}

// Exercício 2
// Faça um algoritmo para receber um número qualquer e informar na tela se é par ou ímpar.

const numero = 2049;
if(numero % 2 === 0){
    alert("O número é PAR")
}else{
    alert("O número é IMPAR");
}

// Exercício 3
// Escreva um algoritmo que lê dois valores booleanos (lógicos) e então determina se ambos são VERDADEIROS ou FALSOS.
const gostoDeChocolate = true;
const gostoDeChuchu = false;

if(gostoDeChocolate === true && gostoDeChuchu === true){
    alert("As afirmações são VERDADEIRAS!");
}else{
    alert("As afirmações são FALSAS!");
}

// Exercício 4
// Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem
// decrescente.

const valor1 = 3;
const valor2 = 2;
const valor3 = 1;

if(valor1 < valor2 && valor1 < valor3 && valor2 < valor3){
    alert(`${valor1}, ${valor2}, ${valor3}`);
}
if(valor1 < valor2 && valor1 < valor3 && valor3 < valor2){
    alert(`${valor1}, ${valor3}, ${valor2}`);
}
else if(valor2 < valor1 && valor2 < valor3 && valor1 < valor3){
    alert(`${valor2}, ${valor1}, ${valor3}`);
}
if(valor2 < valor1 && valor2 < valor3 && valor3 < valor1){
    alert(`${valor2}, ${valor3}, ${valor1}`);
}
else if(valor3 < valor2 && valor2 < valor1 && valor2 < valor1){
    alert(`${valor3}, ${valor2}, ${valor1}`)
}
if(valor3 < valor2 && valor3 < valor1 && valor1 < valor2){
    alert(`${valor3}, ${valor1}, ${valor2}`);
}else{
    alert("Todos os números precisam ser diferentes");
}


// Exercício 5
// Escreva um algoritmo que receba dois números. ⁠Alerte em tela qual o maior valor recebido.
const num1 = 523;
const num2 = 16541;

if (num1 > num2){
    alert(`O maior valor recebido é ${num1}`);
}else{
    alert(`O maior valor recebido é ${num2}`);
}