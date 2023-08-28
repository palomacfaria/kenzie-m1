let contador = 0;

function nomeDaFuncao(){
    contador++;
    if(contador % 2 == 0){
        return 'par';
    }else{
        return 'impar'
    }
}
nomeDaFuncao();
nomeDaFuncao();
let retorno = nomeDaFuncao();
console.log(`O valor ${contador} é ${retorno}`);

//************************************************************ */

function calculaImc(peso, altura){
    const imc = peso / (altura**2);
    return imc.toFixed(2);
}

resultadoImc = calculaImc(60.5, 1.62);
console.log(resultadoImc);

//************************************************************ */
function classificaImc(imc){

    if(imc < 18.5){
        return "Abaixo do peso";
    }else if(imc < 24.9){
        return "Peso ideal";
    }else if(imc < 29.9){
        return "Sobrepeso";
    }else{
        return "Obeso";
    }
}

console.log(classificaImc(resultadoImc));