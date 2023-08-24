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

const num1 = 1;
const num2 = 2;
const num3 = 3;

if(num1 > num2 && num2 > num3){
    alert(`${num1}, ${num2}, ${num3}`);
}
else if(num1 > num2 && num2 < num3){
    alert(`${num1}, ${num3}, ${num2}`);
}
else if(num2 > num1 && num1 > num3){
    alert(`${num2}, ${num1}, ${num3}`);
}
else if(num2 > num1 && num3 > num1){
    alert(`${num2}, ${num3}, ${num1}`);
}
else if(num3 > num2 && num2 > num1){
    alert(`${num3}, ${num2}, ${num1}`);
}
else if(num3 > num2 && num1 > num2){
    alert(`${num3}, ${num1}, ${num2}`);
}


// Exercício 5
// Escreva um algoritmo que receba dois números. ⁠Alerte em tela qual o maior valor recebido.
const num4 = 523;
const num5 = 16541;

if (num1 > num2){
    alert(`O maior valor recebido é ${num4}`);
}else if(num1 < num2){
    alert(`O maior valor recebido é ${num5}`);
}else{
    alert("Os números são iguais");
}