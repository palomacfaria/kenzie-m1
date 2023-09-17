function aprovadoOuReprovado(){
    let nome = prompt("Qual o nome do aluno?");
    let materiaPortugues = 'Português';
    let materiaMatematica = 'Matemática';
    let materiaGeografia = 'Geografia';
    let materiaFisica = 'Física';
    let notaPortugues = prompt("Digite a nota de Português");
    let notaMatematica = prompt("Digite a nota de Matemática");
    let notaGeografia = prompt("Digite a nota de Geografia");
    let notaFisica = prompt("Digite a nota de Física");
    let presenca = prompt("Digite a nota de Presença");
    let somaNota = parseFloat(notaPortugues) + parseFloat(notaMatematica) + parseFloat(notaGeografia) + parseFloat(notaFisica);
    let media = somaNota / 4;

    if(nome.length < 5){
        alert("O nome precisa ter mais de 5 caracteres");
    }

    if(notaPortugues == 0 || notaMatematica == 0 || notaGeografia == 0 || notaFisica == 0 || presenca == 0){ 
        alert('As notas das matérias e de presença não podem ser iguais a "0"');
    }

    if(media >= 8 && presenca >= 6){
        alert(`O aluno(a) ${nome} recebeu a nota ${notaPortugues} para a matéria ${materiaPortugues}, a nota ${notaMatematica} para a matéria ${materiaMatematica}, a nota ${notaGeografia} para a matéria ${materiaGeografia}, a nota ${notaFisica} para a matéria ${materiaFisica} e a nota ${presenca} para a presença, e foi aprovado com a média ${media}.`);
    }else{
        alert(`O aluno(a) ${nome} recebeu a nota ${notaPortugues} para a matéria ${materiaPortugues}, a nota ${notaMatematica} para a matéria ${materiaMatematica}, a nota ${notaGeografia} para a matéria ${materiaGeografia}, a nota ${notaFisica} para a matéria ${materiaFisica} e a nota ${presenca} para a presença, e foi reprovado com a média ${media}.`);
    }
}
aprovadoOuReprovado();