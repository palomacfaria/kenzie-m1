function verificaSeEstaAcompanhado(){
    const nome = prompt('Digite seu nome:');
    const idade = prompt('Digite sua idade');
    let estaAcompanhado = prompt('Você está acompanhado? Digite "s" para sim e "n" para não.');

    if(estaAcompanhado == 'n'){
        estaAcompanhado = false;
    }else if(estaAcompanhado == 's'){
        estaAcompanhado = true;
    }

    if(idade < 18){
        alert(`Entrada não permitida para ${nome}, pois é menor de idade.`);
    }
    else if(estaAcompanhado){
        alert(`Entrada permitida para ${nome}, cumpom de desconto concedido!`);
    }
    else if(!estaAcompanhado){
        alert(`Entrada permitida para ${nome}. Valor integral.`);
    }
}
verificaSeEstaAcompanhado();