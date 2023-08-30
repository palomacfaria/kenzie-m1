//Função para verificar se é par
function isImpar(n){
    if(n % 2 == 1){
        return true;
    }
    return false;
}

const numero = parseInt( prompt("Digite um número: "));
console.log(isImpar(numero));