// Exercício 1
// Desenvolva uma função com apenas um parâmetro. A função deve retornar o valor de caractere P se o parâmetro for positivo, e N se o parâmetro for zero ou negativo.
function testeNumero(numero) {
  if (numero > 0) {
    return "P";
  } else if (numero <= 0) {
    return "N";
  }
}

let resultado;
resultado = testeNumero(20);
console.log(resultado);
resultado = testeNumero(-15);
console.log(resultado);

// Exercício 2
// Desenvolva uma função que informe a quantidade de dígitos de um determinado número inteiro informado por parâmetro.
function quantidadeDigitos(digitos) {
  return digitos.toString().length;
}

resultado = quantidadeDigitos(1564);
console.log(resultado);
resultado = quantidadeDigitos(1564564);
console.log(resultado);

// Exercício 3
// Desenvolva uma função que some dois números passados por parâmetro. A soma só deve acontecer se o primeiro número passado por parâmetro for maior que o segundo.
// Caso contrário você deverá retornar a seguinte frase: "O primeiro número não é maior que o segundo."
function soma(a, b) {
  if (a > b) {
    return a + b;
  }
  return "O primeiro número não é maior que o segundo.";
}

resultado = soma(158, 56);
console.log(resultado);

resultado = soma(18, 52);
console.log(resultado);

// Exercício 4
// Desenvolva uma função com 2 parâmetros. O primeiro deve se chamar palavra, e o segundo deve se chamar letra. Se a palavra passada no primeiro parâmetro começar com a letra passada como segundo parâmetro, retorne true. Se a palavra passada no primeiro parâmetro não começar com a letra passada no segundo parâmetro, retorne false.
function testaPalavra(palavra, letra) {
  if (palavra[0].toLowerCase() == letra[0].toLowerCase()) {
    return true;
  }
  return false;
}

resultado = testaPalavra("Texto", "t");
console.log(resultado);

resultado = testaPalavra("Palavra", "H");
console.log(resultado);

// Exercício 5
// Desenvolva uma função com o parâmetro horaAtendimento para saber se o horário corresponde com o funcionamento do /pergunta. Se o horário de inicio for maior ou igual a 11 e menor ou igual a 23, retorne "O /pergunta está em horário de funcionamento." Caso contrário retorne "O /pergunta não está em horário de funcionamento."

function verificaHoraAtendimento(horaAtendimento) {
  if (horaAtendimento >= 11 && horaAtendimento <= 23) {
    return "O /pergunta está em horário de funcionamento.";
  }
  return "O /pergunta não está em horário de funcionamento.";
}

resultado = verificaHoraAtendimento(15);
console.log(resultado);

resultado = verificaHoraAtendimento(5);
console.log(resultado);
