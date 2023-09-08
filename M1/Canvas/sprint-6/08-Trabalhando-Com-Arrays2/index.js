const listaDeElementos = [1,5,7,9,3, "10", "11", "15"];
/*1- Escreva uma função chamada retornaTodosElementos que não recebe nenhum parâmetro. Sempre que chamada, a função deverá alertar a lista listaDeElementos em tela. */
function retornaTodosElementos(){
    return listaDeElementos;
}
console.log(retornaTodosElementos());

/*2- Escreva uma função chamada retornaValorEpecifico. A função deve receber um valor inteiro como parâmetro. Use o valor recebido para acessar a posição na lista e retorne o valor contido na posição.
Desta forma:
⁠"O valor contido nesta posição é: x". */
function retornaValorEpecifico(inteiro){
    if(inteiro <= listaDeElementos.length -1){
        return(`O valor contido nesta posição é ${listaDeElementos[inteiro]}`);
    }else{
        return(`Posição não encontrada!`)
    }
}
console.log(retornaValorEpecifico(3));
console.log(retornaValorEpecifico(12));

/*3- Escreva uma função chamada retornarTipoElemento. A função deve receber um valor inteiro como parâmetro.
Use o valor recebido para acessar a posição na lista. Alerte qual o tipo do elemento contido na posição (use o typeof para isso).
Se for do tipo texto alerte: "O elemento x é um elemento do tipo texto",
Se for número alerte: "O elemento x é um elemento do tipo número" */
function retornarTipoElemento(inteiro){
    elemento = listaDeElementos[inteiro];

    if(elemento <= listaDeElementos.length -1){
        if(typeof elemento === "string"){
            return `O elemento ${elemento} é um elemento do tipo texto.`
        }else if(typeof elemento === "number"){
            return `O elemento ${elemento} é um elemento do tipo number.`
        }
    }
}
console.log(retornarTipoElemento(1));
console.log(retornarTipoElemento(6));

/*4- Escreva uma função removeUltimoElementoString. A função não recebe parâmetros.
Quando chamada, a função deverá remover o último elemento da lista, mas somente se for uma string.
Caso a remoção seja realizada, retorne: "Elemento deletado com sucesso".
Caso contrário: "Falha ao remover o elemento da lista". */
function removeUltimoElementoString(){
    let ultimaString = "";

    for(let i = 0; i <= listaDeElementos.length -1; i++){
        if(typeof listaDeElementos[i] === "string"){
            ultimaString = listaDeElementos[i];
        }
    }
    return ultimaString;
}
console.log(removeUltimoElementoString());


/*5- Escreva uma função chamada consultaPosição. A função deve receber um valor como parâmetro. Identifique na lista qual a posição do elemento.
Caso consiga identificar o elemento na lista: "O valor procurado está na posição: x ".
⁠Caso não: "Valor não encontrado". */
function consultaPosição(posicao){
    if(posicao <= listaDeElementos.length -1){
        return `O valor procurado está na posição: ${listaDeElementos[posicao]}`;
    }
    else{
        return "Valor não encontrado";
    }
}
console.log(consultaPosição(7));
console.log(consultaPosição(8));

/*6- Escreva uma função chamada removerElementoEspecifico. A função deve receber um valor como parâmetro.
O valor recebido representa o elemento a ser deletado. ⁠Busque a posição do elemento na lista (use o indexOf()). Use a posição encontrada para realizar a remoção.
Caso a remoção seja realizada, retorne: "Elemento x deletado com sucesso".
Caso contrário, retorne: "Elemento não encontrado". */
function removerElementoEspecifico(valor){
    let posicao = listaDeElementos[valor];

    if(valor <= listaDeElementos.length -1){
        listaDeElementos.splice(valor, 1);
        return `Elemento ${posicao} deletado com sucesso`;
    }
    else{
        return "Elemento não encontrado";
    }
}
console.log(removerElementoEspecifico(0));

/*7- Escreva uma função chamada inserirNaPosicaoCorreta. A função pode receber um valor de 0 a 10 ou uma string.
Caso o valor recebido seja do tipo número, a função deve conseguir inserir o elemento na primeira posição da lista, caso seja um texto a inserção deve ser feita na última posição.
Retorne: "Lista atualizada com sucesso". */
function inserirNaPosicaoCorreta(valor){
    if(typeof valor === "number"){
        listaDeElementos.unshift(valor);
        return listaDeElementos;
    }
    else if (typeof valor === "string"){
        listaDeElementos.push(valor);
        return listaDeElementos;
    }
}
console.log(inserirNaPosicaoCorreta(100));
console.log(inserirNaPosicaoCorreta('teste'));