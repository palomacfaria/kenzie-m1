function format2Decimal(n){
    const str = `${n}`;
    if(str.length < 2){
        return '0' + str;
    }
    return str;
}

const dia = prompt("dia");
const mes = prompt("mes");
const ano = prompt("ano");

const formatado = `${format2Decimal(dia)}/${format2Decimal(mes)}/${format2Decimal(ano)}`;
console.log(formatado);

//Função para verificar se é par
function isPair(n){
    if(n % 2 == 0){
        return true;
    }
    return false;
}

const numero = parseInt( prompt("Digite um número: "));
console.log(isPair(numero));

//Verificação de número multiplo
function isMultiple(n, div){
    if(n % div == 0){
        return `${n} é divisivel por ${div}`;
    }
    return `O resto da divisão de ${n} por ${div} é ${n % div}`;
}

const num = parseInt(prompt("Digite um número:"));
const divisor = parseInt(prompt("Digite um divisor:"));

console.log(isMultiple(num, divisor));

//Verificando se o número é inteiro
function isInteger(n){
    if(n === parseInt(n)){
        return true;
    }
    return false;
}

console.log(isInteger(12));
console.log(isInteger(2015.46546));

//Verifica se os caracteres são do mesmo tamanho
function isAllSameCase(str){
    if(str == str.toLowerCase() || str == str.toUpperCase()){
        return true;
    }
    return false;
}

console.log(isAllSameCase('PaLoMa'));
console.log(isAllSameCase('Paloma'));
console.log(isAllSameCase('paloma'));
console.log(isAllSameCase('PALOMA'));