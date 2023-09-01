/* 1. Faça um script que verifique se uma letra digitada é vogal ou consoante. */
function vogalOuConsoante(letra){
    letra = letra.toLowerCase();
    if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
        return "A letra informada é uma VOGAL";
    }
    return "A letra informada é uma CONSOANTE";
}
console.log(vogalOuConsoante('a'));
console.log(vogalOuConsoante('y'));

/*2- Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:

A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Reprovado", se a média for menor do que sete;
A mensagem "Aprovado com Distinção", se a média for igual a dez. */

function calculaMedia(nota1, nota2){
    const media = (parseFloat(nota1) + parseFloat(nota2)) / 2;
    if(media < 7){
        return `Reprovado com a média de ${media}`;
    }else if(media >= 7 && media < 10){
        return `Aprovado com a média de ${media}`;
    }else if(media === 10){
        return "Aprovado com Distinção";
    }
}
console.log(calculaMedia(4, 5));
console.log(calculaMedia(7.65, 8));
console.log(calculaMedia(10, 10));

/* 3. Faça um script que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso. */
function turnoDeEstudo(turno){
    turno = turno.toUpperCase();
    if(turno === "M"){
        return "Bom dia!"
    }else if(turno === "V"){
        return "Boa tarde!"
    }else if(turno === "N"){
        return "Boa noite!"
    }
    return "Valor inválido!"
}
console.log(turnoDeEstudo('M'));
console.log(turnoDeEstudo('v'));
console.log(turnoDeEstudo('N'));

/*4. As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver um script que calculará os reajustes.

Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

    salários até R$ 280,00 (incluindo) : aumento de 20%
    salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
    salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
    salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento. */

function aumentoSlario(salario){
    salario = parseFloat(salario);
    let reajuste = 0;
    let aumento = 0;
    if(salario < 280.00){
        reajuste = (salario * 0.2) + salario;
        aumento = reajuste - salario;
        return `O salário antes do reajuste era de ${salario} o percentual de aumento aplicado foi de 20%, o valor do aumento foi de ${aumento} e o novo salário é ${reajuste}`;
    }
    else if(salario >= 280.00 && salario < 700.00){
        reajuste = (salario * 0.15) + salario;
        aumento = reajuste - salario;
        return `O salário antes do reajuste era de ${salario} o percentual de aumento aplicado foi de 15%, o valor do aumento foi de ${aumento} e o novo salário é ${reajuste}`;
    }
    else if(salario >= 700.00 && salario < 1500.00){
        reajuste = (salario * 0.10) + salario;
        aumento = reajuste - salario;
        return `O salário antes do reajuste era de ${salario} o percentual de aumento aplicado foi de 10%, o valor do aumento foi de ${aumento} e o novo salário é ${reajuste}`;
    }
    else{
        reajuste = (salario * 0.5) + salario;
        aumento = reajuste - salario;
        return `O salário antes do reajuste era de ${salario} o percentual de aumento aplicado foi de 5%, o valor do aumento foi de ${aumento} e o novo salário é ${reajuste}`;
    }
}
console.log(aumentoSlario(170.00));
console.log(aumentoSlario(350.00));
console.log(aumentoSlario(720.00));
console.log(aumentoSlario(1600.00));
