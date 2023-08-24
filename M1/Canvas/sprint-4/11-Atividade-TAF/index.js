// Não altere o nome das variavéis ou o texto do prompt! 
// Modifique apenas o tipo da variavel!            
const gender = prompt('Genero');
const height = prompt('Altura');
const barReps = prompt('Repetições com barra');
const barSeconds = prompt('Tempo das repetições com barra');
const abs = prompt('Abdominais');
const runDistance = prompt('Distância da corrida');
const runTime = prompt('Tempo da corrida');
const swimDistance = prompt('Distância da natação');
const swimTime = prompt('Tempo da natação');
const diveTime = prompt(' Tempo de mergulho');

let result = false;

//Desenvolva seu código aqui:
if(gender == "male"){
    if(height >= 1.7 && (barReps >= 6 || barSeconds >= 15) && abs >= 41 &&
        ((runDistance >= 3000 && runTime <= 720) || (runDistance >= 5000 && runTime <= 1200)) &&
        (swimDistance >= 100 && (swimTime >= 60 || diveTime <= 30))) {
        result = true;
        console.log("Parabéns, você foi aprovado na TAF");
    }
    else{
        result = false;
        console.log("Sinto muito, quem sabe na próxima vez...");
    }
} else if(gender == "female"){
    if(height >= 1.6 && (barReps >= 5 || barSeconds >= 12) && abs >= 41 &&
        ((runDistance >= 4000 && runTime <= 900) || (runDistance >= 6000 && runTime <= 1320)) &&
        (swimDistance >= 100 && (swimTime >= 60 || diveTime <= 30))) {
        result = true;
        console.log("Parabéns, você foi aprovado na TAF");
    }
    else{
        result = false;
        console.log("Sinto muito, quem sabe na próxima vez...");
    }
}
        