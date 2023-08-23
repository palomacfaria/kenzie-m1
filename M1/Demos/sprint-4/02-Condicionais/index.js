//String
console.log("teste 1");
console.log('teste "2"');
const num = 3;
console.log(`teste ${num}`);

//Prompt - Entrada de dados
const idadeUsuario = prompt("Insira a sua idade: ");
console.log(idadeUsuario);

//Alert - Saída de dados
const mensagemIdade = `A sua idade é ${idadeUsuario}.`;
alert(mensagemIdade);

//Operadores de Comparação
const a = 10;
const b = 5;
const c = "10";

//a é maior que b?
console.log(a > b);//true
//b é menor que a?
console.log(b < a);//true
//a é igual a c?
console.log(a == c);//true
//a é estritamente igual a c? (levando em consideração o tipo do dado)
console.log(a === c); //false
//a é diferente de b?
console.log(a != b); //true
//a é estritamente diferente de c? (leva também em consideração o tipo e não apenas o valor)
console.log(a !== c); //true
//a é maior ou igual a b?
console.log(a >= b); //true (pois é maior)
//a é menor ou igual a b?
console.log(a <= b); //false (pois as duas afirmações são falsas)

//Condições
const entradaNome = prompt('Qual é o seu nome?');

if(entradaNome === 'Crsitian'){
    alert("Seja muito bem vindo Cristian!");
}else{
    alert(`Seja muito be vindo(a) ${entradaNome}!`);
}