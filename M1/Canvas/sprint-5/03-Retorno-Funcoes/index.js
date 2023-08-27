//Função COM retorno
//Funções COM retorno retornam valores. Esse valor pode ser qualquer tipo de dado
function opMath(){
    let a = 2;
    let b = 5;
    let result = 0;

    result = a + b;

    return result;
}
let retorno = opMath();
retorno = retorno + 3; // 7 + 3 = 10
console.log(retorno);

//Função COM retorno -> Calculando a área de um círculo de raio 4
function calculaAreaCirculo(){
    const pi = 3.14;
    const areaCirculoDeRaioQuatro = pi * 4 * 4;

    return areaCirculoDeRaioQuatro;
}
const resultado = calculaAreaCirculo();
console.log(resultado);

//***************************************************************************************** */
//Função SEM retorno
/*Funções SEM retorno não retornam um valor. Em vez disso, ela executa um conjunto de instruões e pode ter um efeito colateral, como exibir informações na tela ou alterar variáveis globais.*/
function semRetorno(){
    const a = 12;
    const b = 15;

    console.log(a + b);
}

let resultadoSemRetorno = semRetorno();
console.log(resultadoSemRetorno); //Undefined (pois não foi retornado nada dentro da função)