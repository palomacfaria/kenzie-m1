//Função para verificar se é par
function isPair(n){
    if(n % 2 == 0){
        return true;
    }
    return false;
}

const numero = parseInt( prompt("Digite um número: "));
console.log(isPair(numero));