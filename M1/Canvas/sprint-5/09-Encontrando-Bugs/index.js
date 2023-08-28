/* Exercício 1
Você foi contratado por uma empresa de software para corrigir alguns bugs. A empresa possui diversos produtos e precisa da sua ajuda para analisar e corrigir algumas funções.
A função calculaIMC deve receber dois parâmetros, o peso em quilogramas e a altura em metros. É necessário retornar o índice de massa corporal do usuário.
Dica: Fórmula para o cálculo é: IMC = peso / altura²

Ao receber 80 para o peso e 1.80 para altura, a função deve retornar 24.691358024691358 */
function calculaIMC(peso, altura) {
  let alturaAoQuadrado = altura * altura;
  let imc = peso / alturaAoQuadrado;
  return imc;
}

console.log(calculaIMC(80, 1.8));

/*   
Exercício 2
A função calculaIdade deve receber três parâmetros: um nome, anoFuturo, que representa um ano no futuro e anoNascimento, que representa o ano de nascimento. O objetivo dessa função é calcular a idade futura de uma pessoa tendo como base o ano de nascimento e o ano futuro. 

Ao receber os parâmetros: ("Pedro", 2002, 2030) a função deve retornar "Em 2030 Pedro terá 28 anos de idade".*/
function calculaIdade(nome, anoNascimento, anoFuturo) {
  let idade = anoFuturo - anoNascimento;
  return `Em ${anoFuturo} ${nome} terá ${idade} anos de idade`;
}
console.log(calculaIdade("Pedro", 2002, 2030));

/* Exercício 3
A função algarismosEmUmNumero deve receber como parâmetro um número inteiro ou com parte decimal e deve retornar a quantidade de algarismos que compõem esse numero.

Vale relembrar que ao realizarmos a conversão de um número para um texto, o ponto que divide a parte inteira da parte decimal é convertida junto, portanto, é necessário tratar caso o número apresente ponto flutuante. 

Ao receber 3.14159265 a função deve retornar 9.*/
function algarismosEmUmNumero(n) {
  let str = `${n}`;
  let contagem = str.length;

  if (n != parseInt(n)) {
    console.log(contagem);
    contagem = contagem - 1;
  }

  return contagem;
}

console.log(algarismosEmUmNumero(3.14159265));

/*Exercício 4
A função diaDaSemana deve receber por parâmetro um valor em formato de número ou texto, e retornar em texto o dia da semana que ele representa, seguindo a lista abaixo:

1-Domingo
2-Segunda-feira
3-Terça-feira
4-Quarta-feira
5-Quinta-feira
6-Sexta-feira
7-Sábado
Caso o número recebido por parâmetro for inválido, você deve retornar o texto: 'Valor Inválido'. 

Ao receber '1' a função deve retornar 'Domingo'
Ao receber 3 a função deve retornar 'Terça-feira'
Ao receber 0 a função deve retornar 'Valor Inválido'*/
function diaDaSemana(n) {
  let resultado = "";

  if (n == 1 || n === "Domingo") {
    resultado = "Domingo";
  } else if (n == 2 || n === "Segunda-feira") {
    resultado = "Segunda-feira";
  } else if (n == 3 || n === "Terça-feira") {
    resultado = "Terça-feira";
  } else if (n == 4 || n === "Quarta-feira") {
    resultado = "Quarta-feira";
  } else if (n == 5 || n === "Quinta-feira") {
    resultado = "Quinta-feira";
  } else if (n == 6 || n === "Sexta-feira") {
    resultado = "Sexta-feira";
  } else if (n == 7 || n === "Sábado") {
    resultado = "Sábado";
  } else if (n == 0 || n > 7) {
    resultado = "Valor Inválido";
  }

  return resultado;
}
//Ao receber '1' a função deve retornar 'Domingo'
//Ao receber 3 a função deve retornar 'Terça-feira'
//Ao receber 0 a função deve retornar 'Valor Inválido'

console.log(diaDaSemana("1"));
console.log(diaDaSemana(3));
console.log(diaDaSemana(0));
