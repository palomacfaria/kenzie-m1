//OPERADORES LÓGICOS
// NOT (!) -> Negação
const verdadeiro = true;
const falso = false;

console.log(!verdadeiro);
console.log(!falso);

const nome = prompt("Insira seu nome:");
/* const eIgual = nome === "Paloma";

console.log(eIgual);
if(!eIgual){
    console.log("Você não tem permissão!");
} */

if(!nome === "Paloma"){
    console.log("Você não tem permissão!");
}
//**************************************************
//Operador OUR (||)

//O nome tem o mesmo valor e tipo de "Thiago" ou a variável tem o memso valor e tipo que Cristian

if(nome === "Thiago" || nome === "Cristian"){
    console.log(`Seja muito bem vindo ${nome}`)
}else{
    console.log("Sinto muito, você não tem permissão!")
}

//**************************************************
//Operador AND (&&)

const username = prompt("Insira seu nome de usuário");
const password = prompt("Insira sua senha");

if(username === "palomacfaria" && password === "batatinha123"){
    console.log(`Seja bem vindo(a) ${username}`);
}else{
    console.log("Nome de usuário ou senha incorretos!");
}

//Verificando comparações
console.log(username === "palomacfaria" && password === "batatinha123");
//**************************************************
//Exemplo de operadores lógicos
/*Teste modelo: Um homem só pode ser aprovado se tiver pelo menos 1.75 de altura e pelo menos 70kg. Uma mulher só pode ser aporvada se tiver pelo menos 1.60 de altura e pesar no máximo 70kg*/
const altura = 1.62;
const genero = "female";
const peso = 60;

if(altura >= 1.75 && genero === "male" && peso >= 70 || altura >=1.60 && genero === "female" && peso <= 70){
    console.log("Parabéns, você foi aprovado(a)!");
}else{
    console.log("Que pena, infelizmente você não se encaixa no nosso perfil!");
}

//OPERADORES DE INCREMENTO E DECREMENTO
//Incremento
let soma = 0;
soma = soma +5; //5
soma = soma -2; //3
//soma = soma + 1
soma++; //4

console.log(soma);
//soma = soma - 1
soma--;
console.log(soma);

