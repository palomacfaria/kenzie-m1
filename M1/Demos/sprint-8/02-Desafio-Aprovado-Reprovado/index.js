let nome = prompt("Digite seu nome: ");
let presenca = prompt("Digite a nota de presença");
let materia1 = prompt("Digite a matéria");
let nota1 = parseFloat(prompt("Digite a nota:"));
let materia2 = prompt("Digite a matéria");
let nota2 = parseFloat(prompt("Digite a nota:"));
let materia3 = prompt("Digite a matéria");
let nota3 = parseFloat(prompt("Digite a nota:"));

if(nome.length < 5){
    alert("Nome inválido");
}

let somaNota = nota1 + nota2 + nota3;
let mediaNota = somaNota / 3;

if(mediaNota >= 8 && presenca >= 6){
    alert(`A nota do aluno ${nome} é de ${mediaNota} e sua presença é de ${presenca}: Aluno aprovado!`);
}else{
    alert(`A nota do aluno ${nome} é de ${mediaNota} e sua presença é de ${presenca}: Aluno reprovado!`);
}