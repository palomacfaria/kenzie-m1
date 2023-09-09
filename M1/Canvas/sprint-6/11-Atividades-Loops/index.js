/* 1- Desenvolva uma função chamada verticalText, que receberá uma string como parâmetro. A função deverá imprimir a palavra de forma vertical usando o console.log. */
function verticalText(str){
    for(let i = 0; i <= str.length -1; i++){
        console.log(str[i]);
    }
}
verticalText("proparoxitona");

/* 2- Desenvolva uma função chamada incrementText, que receberá uma string como parâmetro. A função deverá imprimir a palavra usando o console.log de forma que ela vai se incrementando, começando somente pela primeira letra, depois a primeira e a segunda e assim sucessivamente conforme exemplo. */
function incrementText(str){
    let palavra = "";
    for(let i = 0; i <= str.length -1; i++){
        palavra = palavra + str[i];
        console.log(palavra);
    }
}
incrementText("teste");

/* 3-Desenvolva uma função chamada incrementTextBackwards, que receberá uma string como parâmetro. A função deverá imprimir a palavra usando o console.log de forma que ela vai se incrementando ao contrário, começando somente pela última letra, depois a última e a penúltimo e assim sucessivamente conforme exemplo. */
function incrementTextBackwards(str){
    let palavra = "";
    
    for(let i = str.length - 1; i >= 0; i--){
        palavra = palavra + str[i];
        console.log(palavra);
    }
}
incrementTextBackwards("teste");

/* 4-Desenvolva uma função chamada padEnd, que receberá três parâmetros: uma palavra (string), a quantidade de repetição do caractere (number) e o caractere de repetição (string).

Sua função deverá retornar a string preenchida com o caractere de acordo com o comprimento passado por parâmetro. */
function padEnd(palavra, quantidade, caractere){

    for(let i = 0; i <= quantidade; i++){
        palavra += caractere;
    }
    console.log(palavra);
}
padEnd("teste", 5, "*");

/* 5-Desenvolva uma função chamada subString, que receberá três parâmetros: uma palavra (string), a posição inicial (number) e a posição final (number). Sua função deverá retornar a parte da string **entre** o início e o fim dos índices passados por parâmetro (não incluindo os caracteres dos próprios índices). */
function subString(palavra, inicio, fim){
    let parteString = "";
    for(let i = inicio; i <= fim; i++){
        parteString += palavra[i];
    }
    console.log(parteString);
}
subString("palavra", 2, 6);