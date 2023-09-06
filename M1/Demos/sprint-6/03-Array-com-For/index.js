const instrutores = ["Alex", "Chrystian", "Lorena", "Thiago", "Vilson"];

//Adicionar um instrutor na lista caso não esteja nela
function adicionaInstrutor(nome){
    for(let i = 0; i <= instrutores.length; i++){
        if(nome === instrutores[i]){
            return `O instrutor ${nome} já está na lista.`
        }
    }
    instrutores.push(nome);
    return `O instrutor ${nome} foi adicionado na lista.`
}

console.log(adicionaInstrutor("Thiago"));
console.log(adicionaInstrutor("Paloma"));
console.log(instrutores);

//Adicionar um instrutor na lista caso não esteja nela
function removeInstrutor(nome){
    for(let i = 0; i <= instrutores.length; i++){
        if(nome === instrutores[i]){
            instrutores.splice(i, 1);
            return `O instrutor ${nome} foi removido da lista.`
        }
    }
    return `O instrutor ${nome} não está na lista.`
}

console.log(removeInstrutor("Paloma"));
console.log(removeInstrutor("Maria"));
console.log(instrutores);

//Alterar nome do instrutor
function alterarNomeDoInstrutor(nome, novoNome){
    for(let i = 0; i <= instrutores.length; i++){
        if(nome === instrutores[i]){
            instrutores[i] = novoNome;
            return `Nome do ${nome} alterado para ${novoNome} com sucesso.`
        }
    }
    return `O instrutor ${nome} não está na lista.`
}

console.log(alterarNomeDoInstrutor("Vilson", "Gilson"));
console.log(instrutores);
console.log(alterarNomeDoInstrutor("Gilson", "Vilson"));
console.log(instrutores);
console.log(alterarNomeDoInstrutor("TK", "Thiago"));

//*********************DESAFIO CODWARS*********************
//Pegue o primeiro número do array que não seja consecutivo

function firstNumConsecutive(arr){
    let numeroAnterior = arr[0];

    for(let i = 1; i <= arr.length; i++){
        let numeroAtual = arr[i];
        if(numeroAtual - 1 !== numeroAnterior){
            return numeroAtual;
        }
        return numeroAnterior = numeroAtual;
    }
    return null;
}

console.log(firstNumConsecutive([10,11,12,4,6,7,8]));
