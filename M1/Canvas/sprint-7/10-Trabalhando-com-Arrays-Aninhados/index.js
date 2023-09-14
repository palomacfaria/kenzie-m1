/* 1- Escreva uma função que receba uma lista a de dimensão 30 composta apenas por números inteiros. A função deve retornar a quantidade de valores pares e ímpares existentes na lista recebida.
Exemplos de saída: ⁠A lista recebida possui x elementos pares e y elementos ímpares. */
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

function parImpar(lista){
    let pares = 0;
    let impares = 0;

    for(let i = 0; i < lista.length; i++){
        if(lista[i] % 2 === 0){
            pares++;
        }else{
            impares++;
        }
    }
    return `A lista recebida possui ${pares} elementos pares e ${impares} elementos ímpares.`
}
console.log(parImpar(a));

/* 2- Escreva uma função que recebe uma lista b de tamanho 10, composta por números inteiros.⁠
Retorne o total de elementos ímpares existentes na matriz e também o percentual do valor total de números ímpares em relação à quantidade total de elementos armazenados na matriz.
Retorne o seguinte texto: "O total de valores ímpares é x e corresponde a y% da lista" */
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function imparesExistentes(lista){
    let impares = 0;
    let percentual = 0;
    
    for(let i = 0; i < lista.length; i++){
        if(lista[i] % 2 === 1){
            impares++;
        }
    }

    percentual = (impares / lista.length) * 100 ;
    return `O total de valores ímpares é ${impares.length} e corresponde a ${percentual}% da lista`;
}
console.log(imparesExistentes(b));
/* 3- Escreva uma função que receba como parâmetro duas listas c e d, cada uma com dez elementos. ⁠A função deve realizar a validação do tamanho da lista. Caso sejam maiores ou menores que 10, retorne: "Lista fora dos padrões necessários". 

A lista a deve ser composta por valores divisíveis por 2 e 3, enquanto a lista b deve ser composta apenar por valores múltiplos de 5. ⁠A composição das listas deve ser validada pela função. Caso a composição não esteja correta, retorne: "Valores não permitidos encontrados".*/

const c = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
const d = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

function operacaoComListas(listaC, listaD){
    if(listaC.length !== 10 && listaD.length !== 10){
        return "Lista fora dos padrões necessários";
    }
    for(let i = 0; i < listaC.length; i++){
        if(listaC[i] % 2 === 0 && listaC[i] % 3 === 0 || listaD % 5 === 0){
            return "Lista validada";
        }
    }
    return "Valores não permitidos encontrados";
}
console.log(operacaoComListas(c, d));