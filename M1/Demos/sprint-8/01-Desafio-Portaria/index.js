//S8-01 | Desafio - JavaScript: Desafio Portaria
let nome = prompt("Digite seu nome: ");
let idade = prompt("Digite sua idade: ");
let estaAcompanhado = prompt("Está acompahado? (S) ou (N)");

if(estaAcompanhado.toLocaleLowerCase() === "s"){
    estaAcompanhado = true;
}else if(estaAcompanhado.toLocaleLowerCase() == "n"){
    estaAcompanhado = false;
}else{
    alert('ERRO: Não foi possível identificar sua resposta');
}

if(idade < 18){
    alert(`Entrada não permitida para ${nome}: Menor de idade!`);
}else if(estaAcompanhado){
    alert(`Entrada permitida para ${nome}: Conceder desconto.`);
}else{
    alert(`Entrada permitida para ${nome}: Valor integral`);
}


