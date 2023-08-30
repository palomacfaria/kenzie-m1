//Verificando se o número é inteiro
function isInteger(n){
    if(n === parseInt(n)){
        return true;
    }
    return false;
}

console.log(isInteger(12));
console.log(isInteger(2015.46546));