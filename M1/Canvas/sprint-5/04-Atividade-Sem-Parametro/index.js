// Exercício 1
// Desenvolva uma função que mostre no console a frase "Hello World!".
function mensagemHelloWorld(){
    console.log("Hello World!");
}
mensagemHelloWorld();

// Exercício 2
// Desenvolva uma função para saber se o(a) aluno(a) possui métricas para virar monitor(a).
// Requisitos:
// 100 de Entregas
// 100 de Entrevistas Técnicas
// 100 de Presença
// Se os requisitos forem atingidos, mostre no console "Possível monitor(a)." Se os requisitos não forem atingidos, mostre no console "Selecionar outro(a) aluno(a)."

function virarMonitor(){
    const entregas = 100;
    const entrevistas = 100;
    const presenca = 100;
    
    if(entregas === 100 && entrevistas === 100 && presenca === 100){
        console.log("Você pode ser um monitor na Kenzie!");
    }else{
        console.log("Você não atingiu a pintuação necessária para ser instrutor na Kenzie.");
    }
}
virarMonitor();

// Exercício 3
// Desenvolva uma função que recebe três variáveis com valores numéricos e identifica qual deles é o maior.

function maiorValor(){
    const a = 50;
    const b = 19;
    const c = 101;

    if(a > b && a > c){
        console.log(`${a} é o maior valor informado.`);
    }else if(b > a && b > c){
        console.log(`${b} é o maior valor informado.`);
    }else{
        console.log(`${c} é o maior valor informado.`);
    }
}
maiorValor();

// Exercício 4
// Desenvolva uma função para mostrar no console a seguinte frase: "Meu nome é -nome e sobrenome-, e tenho -idade- anos".
// Declare as seguintes variáveis dentro da função:
// nome
// sobrenome
// idade

function apresentacao(){
    const nome = "Paloma";
    const sobrenome = "Cristina Faria";
    const idade = 23;

    console.log(`Meu nome é ${nome} ${sobrenome}, e tenho a idade de ${idade} anos.`)
}
apresentacao();