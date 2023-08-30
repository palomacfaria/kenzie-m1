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