//Formatando datas = DD/MM/AAAA
function format2Char(str) {
  if (str.length < 2) {
    return (str = "0" + str);
  } else {
    return str;
  }
}
//Formatando Ano
function formatYear(ano){
    if(ano.length == 2){
        if(parseInt(ano) > 23){
            return '19'+ano;
        }else{
            return '20'+ano;
        }
    }
}

const dia = format2Char(prompt("Digite o dia: "));
const mes = format2Char(prompt("Digite o mes: "));
const ano = formatYear(prompt("Digite o ano: "));

let dataFormatada = `${dia}/${mes}/${ano}`;
alert(dataFormatada);

/************************************************************************* */
//Escopos()

const testeGlobal = 'Global'; //Escopo Global

if(true){
    const testeBloco = 'Bloco'; //Escopo de Bloco
    console.log(testeGlobal);
}

function escopo(){
    let testeFuncao = 'Função';  //Escopo de Função
    console.log(testeGlobal);

    if(true){
        let testeBloco2 = 'Bloco 2';
        console.log(testeFuncao); //Filho acessa os valores do pai
    }

    //console.log(teste2); ERRO Pai não acessa os valores do filho
}
escopo();

//console.log(testeBloco, testeFuncao); NÂO É POSSÍVEL ACESSAR
//Tipo de variável VAR só respeita o escopo de função
