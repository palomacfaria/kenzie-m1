const alunoCurso = {
    nome: "João",
    idade: 31,
    curso: "FullStack",
    instituicao: "Kenzie Br",
    materias: ["Html", "Css", "JavaScript", "Python"],
    situacaoMatricula: true,
};
  
let opcao = parseInt(prompt('Digite o número: "1" Curso | "2" Matéria | "3" Situação de Matricula | "4" Gerar Carteira'));

function getTheCurse(aluno){
    alert(`O curso do aluno ${aluno.nome} é ${aluno.curso}`);
}

function getTheSubjects(aluno){
    let materia = aluno.materias ;

    alert(`As matérias do aluno ${aluno.nome} são: ${materia} correspondente ao curso ${aluno.curso}`);
}

function resgistrationStatus(aluno){
    let situacaoDaMatricula = aluno.situacaoMatricula;

    if(situacaoDaMatricula === true){
        alert('Ativo');
    }else{
        alert("Inativo");
    }
}

function generateStudentCard(aluno){
    cardInformation = `Nome: ${aluno.nome}, idade: ${aluno.idade}, curso: ${aluno.curso}, instituição: ${aluno.instituicao}`;

    alert(cardInformation);
}

if(opcao == 1){
    console.log(getTheCurse(alunoCurso));
}else if(opcao == 2){
    console.log(getTheSubjects(alunoCurso));
}else if(opcao == 3){
    console.log(resgistrationStatus(alunoCurso));
}else if(opcao == 4){
    console.log(generateStudentCard(alunoCurso));
}else{
    alert("Valor inválido!");
}