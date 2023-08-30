function isPositive(number){
    if(number > 0){
        return true;
    }
    return false;
}

console.log(isPositive(8));

function verifyNumber(number){
    if (number > 0){
        return 'Positivo'
    }
    else if(number == 0){
        return 'Zero';
    }
    return 'Negativo';
}

console.log(verifyNumber(-2));
console.log(verifyNumber(0));