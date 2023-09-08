function isPalindrome(str){
    str = str.toLowerCase().replace(/\s/g, '');
    let inicioDaString = 0;
    let finalDaString = str.length -1;
    let metadeDaString = str.length / 2;

    for(let i = 0; i <= metadeDaString; i++){
        if(str[inicioDaString] !== str[finalDaString]){
            return false;
        }
        inicioDaString++;
        finalDaString--;
    }
    return true;
}

function arrayMaxMin(arr){
    let maiorNumero = 0;
    let menorNumero = 0;
    let novoArray = [];

    for(let i = 0; i <= arr.length -1; i++){
        if(i === 0){ //Pegando o primeiro valor contido no Array antes de fazer as verificações
            maiorNumero = arr[i];
            menorNumero = arr[i];
        }
        else{
            if(maiorNumero < arr[i]){
                maiorNumero = arr[i];
            }
            else if(menorNumero > arr[i]){
                menorNumero = arr[i];
            }
        }
    }
    return novoArray = [menorNumero, maiorNumero];
}