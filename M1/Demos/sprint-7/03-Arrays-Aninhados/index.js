const lista = [12, 13, 14, 15, 16, 17, 18];
const lista2 = [12, "Thiago", [12, 15], {nome: "Thiago", cargo: "Instrutor"}];

const arrayNotas = [
    //[Matemática, Português, Química, História]
    [100, 60, 80, 70], // Aluno 1
    [55, 45, 22, 65], //Aluno 2
    [65, 98, 55, 85], //Aluno 3
    [100, 95, 98, 100] //Aluno 4
];
//console.log(arrayNotas[0][0]);

function mediaAlunos(alunos){
    for(let i = 0; i < arrayNotas.length; i++){
        const aluno = alunos[i];
        let soma = 0;

        for(let j = 0; j < aluno.length; j++){
            soma += aluno[j];
        }
        const media = soma / aluno.length;
        if(media >= 70){
            console.log(`O aluno ${i + 1} fechou com a média de ${media} e foi aprovado!`);
        }else{
            console.log(`O aluno ${i + 1} fechou com a média de ${media} e foi reprovado!`);
        }
    }
}
mediaAlunos(arrayNotas);

const arrayAlunos = [
    {
        id: 1,
        nome: 'Ricardo',
        matematica: 100,
        portugues: 60,
        quimica: 80,
        historia: 70
    },
    {
        id: 2,
        nome: 'João',
        matematica: 55,
        portugues: 45,
        quimica: 22,
        historia: 65
    },
    {
        id: 3,
        nome: 'Maria',
        matematica: 65,
        portugues: 98,
        quimica: 55,
        historia: 85
    },
    {
        id: 4,
        nome: 'Laura',
        matematica: 100,
        portugues: 95,
        quimica: 98,
        historia: 100
    }
]

function mediaAlunosObjeto(lista){
    for(let i = 0; i < lista.length; i++){
        const aluno = lista[i];
        
        const soma = aluno.matematica + aluno.portugues + aluno.quimica + aluno.historia;

        const media = soma / 4;
        
        if(media >= 70){
            console.log(`O(a) aluno(a) ${aluno.nome} ficou com a média ${media} e foi aprovado!`);
        }else{
            console.log(`O(a) alunoa(a) ${aluno.nome} ficou com a média ${media} e foi reprovado!`);
        }
    }
}
mediaAlunosObjeto(arrayAlunos);