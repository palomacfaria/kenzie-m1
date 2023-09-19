let nome = prompt("Digite seu nome: ");
let presenca = prompt("Digite a nota de presença");
let materia1 = prompt("Digite a matéria");
let nota1 = prompt("Digite a nota:");
let materia2 = prompt("Digite a matéria");
let nota2 = prompt("Digite a nota:");
let materia3 = prompt("Digite a matéria");
let nota3 = prompt("Digite a nota:");

if(nome.length < 5){
    alert("Nome inválido");
}

let somaNota = nota1 + nota2 + nota3;