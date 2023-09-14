/*1- Escreva uma função que consiga inserir novos elementos em uma lista. A lista pode armazenar no máximo 10 elementos. ⁠Elementos do tipo string com mais de 7 caracteres não são permitidos.

Em caso de sucesso, retorne: "Elemento inserido com sucesso, a lista agora é: x"
sendo x lista atualizada.

Em caso de falha, retorne: "Não foi possível inserir este valor" */
let lista = [];

function inserirElementosNaLista(elemento){
    if(lista.length >= 10 || elemento.length > 7){
        return "Não foi possível inserir este valor";
    }
    lista.push(elemento);
    return `Elemento inserido com sucesso, a lista agora é: ${lista}`;
}
console.log(inserirElementosNaLista('Melão'));
console.log(inserirElementosNaLista('Limão'));
console.log(inserirElementosNaLista('Melancia'));
console.log(inserirElementosNaLista('Jatobá'));
console.log(inserirElementosNaLista('Banana'));
console.log(inserirElementosNaLista('Jaboticaba'));
console.log(inserirElementosNaLista('Caqui'));
console.log(inserirElementosNaLista('Abacaxi'));
console.log(inserirElementosNaLista('Cereja'));
console.log(inserirElementosNaLista(12345678));
console.log(inserirElementosNaLista('Amora'));
console.log(inserirElementosNaLista('156'));
console.log(inserirElementosNaLista(395));


/* 2- Escreva uma função que recebe uma lista a como parâmetro. A lista a deve ter exatamente 15 elementos inteiros. ⁠Crie também uma lista b de mesmo tipo, observando a seguinte lei de formação:

"Todo elemento da matriz b deve ser o quadrado do elemento da matriz a correspondente".

Retorne a lista b resultante. */
let listaA = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function numerosAoQuadrado(lista){
    let listaB = [];
    for(let i = 0; i < lista.length; i++){
        listaB.push(listaA[i] ** 2);
    }
    return listaB;
}
console.log(numerosAoQuadrado(listaA));