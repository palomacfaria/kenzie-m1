/* Exercício 1 - Pessoa Premiada
Você está trabalhando na loteria federal e um cliente se aproxima e fala que foi premiado.

Os dados do ganhador já estão no sistema e você agora só deve comparar se as informações prestadas pelo suposto ganhador são realmente verdadeiras. Pegue os documentos necessários e faça a consulta. 
- Crie uma função que irá receber o nome e cpf do suposto ganhador.
Dentro da função você deverá comparar os dados recebidos com os dados existentes.
A função deve retornar uma string: "É ganhador!" ou "Não é ganhador!".
Desenvolva uma lógica para que o nome sempre tenha a primeira letra maiúscula e as restantes minúsculas.*/
 
let ganhador = {
    nome: 'Adamastor',
    nascimento: '16/09/1986',
    cpf: '123.321.789-98',
    estadoCivil: 'Casado'
}

function eGanhador(nome, cpf){
  //Transformando nome
  let inicial = nome[0].toUpperCase();
  let restoDoNome = '';

  for(let i = 1; i < nome.length; i++){
    restoDoNome += nome[i].toLowerCase();
  }
  nome = inicial + restoDoNome;

  //Verificando se é ganhador
  if(ganhador.nome === nome && ganhador.cpf === cpf){
    return 'É ganhador!';
  }
  return 'Não é ganhador!';
}
console.log(eGanhador('adamastor', '123.321.789-98'));

//**************************************************************** */ */
/* Exercício 2- Quem veio atrás do prêmio?
O gerente da loteria, pediu para que você guarde as informações das pessoas que vieram atrás do prêmio.

Antes você recebia o objeto e fazia a comparação. Agora você precisa armazená-lo em uma variável e inseri-lo em uma lista, mediante a uma condição.

A lista deverá ter o nome que achar mais conveniente.

Crie uma variável para guardar o objeto recebido.
Com base no exercício anterior, insira todos que não ganharam o prêmio em um array.
Crie uma função que recebe um objeto.
Crie um array e insira o objeto passado.
Retorne uma string contendo o número de pessoas que vieram atrás do prêmio, mas não eram ganhadores. */

let naoGanhador = {
  nome: 'Francisco',
  nascimento: '20/02/1953',
  cpf: '056.879.456-12',
  estadoCivil: 'Viuvo'
}
let naoGanhador2 = {
  nome: 'Natalia',
  nascimento: '15/12/1995',
  cpf: '475.561.456-12',
  estadoCivil: 'Solteira'
}

let listaNaoGanhadores = [];

function quemVeioAtrasDoPremio(pessoa){

  if(eGanhador(pessoa.nome, pessoa.cpf) === 'Não é ganhador!'){
    listaNaoGanhadores.push(pessoa);
  }

  return `Vieram atrás do premio ${listaNaoGanhadores.length} pessoa(s).`;

}
console.log(quemVeioAtrasDoPremio(naoGanhador));
console.log(quemVeioAtrasDoPremio(naoGanhador2));
console.log(quemVeioAtrasDoPremio(ganhador));