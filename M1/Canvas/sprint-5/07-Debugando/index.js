// Seu depurador de código misteriosamente parou de funcionar, e agora você precisa descobrir o que deve ser retornado no console.log.

function verificaNumero(num) { //num = -12
    let str = '';
    
    if (num % 2 == 0) { //12 % 2 == 0
      str = 'par';
    } else {
      str = 'impar';
    }// str = par

  
    str += ', '; //str = 'par, '
  
    if (num > 0) { //-12 > 0 -> false
      str += 'positivo';
    } else {
      str += 'negativo';
    }//str = 'par, negativo'
  
    str += ' e '; //str = 'par, negativo e '
  
    if (num === parseInt(num)) { //-12 === -12 -> true
      str += 'não possui casas decimais';
    } else {
      str += 'possui casas decimais';
    }//str = 'par, negativo e não possui casas decimais'
  
    str = 'O numero ' + num + ' é ' + str; ////str = 'O número -12 é par, negativo e não possui casas decimais'
  
    return str;
  }
  
  console.log(verificaNumero(-12));

  /**************************************************************************************** */
//Exercício 2
//O trecho de código abaixo está realizando algumas operações matemáticas, e para se certificar de que todas elas estão funcionando como deveriam, o desenvolvedor adicionou alguns logs em seu código.

let valor = 18;
let result = valor / 2; // 18/2 = 9
console.log(result); //9

result = result / 3; // 9 / 3 = 3
console.log(result); //3

let isPair = ( result == 3 ); //3 == 3 -> true
console.log(isPair); //true

if (isPair) {
  result = result * 6; //3 * 6 = 18
} else {
  result = result * 12;
}

console.log(result); //18

/**************************************************************************************** */
//Exercíco 3
// A função abaixo recebe um número qualquer e retorna a quantidade de algarismo que o compõem. Tente descobrir o valor que será retornado em cada console.log() sem rodar o código no terminal.
function algarismosEmUmNumero(n){ // n=3.141517
    let str = `${n}`; //"3.141517"
    let contagem = str.length; //8
    console.log(contagem);//7
  
    if (n != parseInt(n)) { //3.141517 != parseInt(3.141517) -> 3 (true)
      console.log("Entrou aqui"); //entrou
      contagem = contagem - 1; //8 - 1 = 7 
    }
  
    console.log(contagem); //7 
  
    return contagem; //7
  }
  algarismosEmUmNumero(3.141517); //7