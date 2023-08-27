// Exercício 1
// Desenvolva uma função com apenas um parâmetro. A função deve retornar o valor de caractere P se o parâmetro for positivo, e N se o parâmetro for zero ou negativo.

function positivoOuNegativo(valor){
    let positivo = "P";
    let negativo = "N"
    if(valor === "Positivo"){
        return positivo;
    }else if(valor === "Negativo" || valor == 0){
        return negativo;
    }
}

let resultado;
resultado = positivoOuNegativo("Positivo");
console.log(resultado);
resultado = positivoOuNegativo("Negativo");
console.log(resultado);

// Exercício 2
// Desenvolva uma função que informe a quantidade de dígitos de um determinado número inteiro informado por parâmetro.
function quantidadeDigitos(digitos){
    if(typeof digitos !== 'number'){
        return console.log("Digite um número inteiro!");
    }else{
        return digitos.length;
    }
}

resultado = quantidadeDigitos(1564);
console.log(resultado);
resultado = quantidadeDigitos(1564564);
console.log(resultado);
resultado = quantidadeDigitos("Texto");
console.log(resultado);
// Exercício 3
// Desenvolva uma função que some dois números passados por parâmetro. A soma só deve acontecer se o primeiro número passado por parâmetro for maior que o segundo.
// Caso contrário você deverá retornar a seguinte frase: "O primeiro número não é maior que o segundo."
function soma(a, b){
    if(a > b){
        return a + b;
    }else{
        const mensagem = console.log("O primeiro número não é maior que o segundo.");
        return mensagem;
    }
}

resultado = soma(158, 56);
console.log(resultado);

resultado = soma (18, 52);
console.log(resultado);
// Exercício 4
// Desenvolva uma função com 2 parâmetros. O primeiro deve se chamar palavra, e o segundo deve se chamar letra. Se a palavra passada no primeiro parâmetro começar com a letra passada como segundo parâmetro, retorne true. Se a palavra passada no primeiro parâmetro não começar com a letra passada no segundo parâmetro, retorne false.
function palavraLetra(palavra, letra){
    if(palavra[0] === letra[0]){
        return true;
    }else{
        return false;
    }
}

resultado = palavraLetra("Texto", "T");
console.log(resultado);

resultado = palavraLetra("Palavra", "H");
console.log(resultado);

// Exercício 5
// Desenvolva uma função com o parâmetro horaAtendimento para saber se o horário corresponde com o funcionamento do /pergunta. Se o horário de inicio for maior ou igual a 11 e menor ou igual a 23, retorne "O /pergunta está em horário de funcionamento." Caso contrário retorne "O /pergunta não está em horário de funcionamento."

function barraPergunta(horaAtendimento){
    if(horaAtendimento >= 11 && horaAtendimento <= 23){
        let resposta = console.log("O /pergunta está em horário de funcionamento.");
        return resposta;
    }else{
        resposta = console.log("O /pergunta não está em horário de funcionamento.");
        return resposta;
    }
}

resultado = barraPergunta(15);
console.log(resultado);

resultado = barraPergunta(5);
console.log(resultado);