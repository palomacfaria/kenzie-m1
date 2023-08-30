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