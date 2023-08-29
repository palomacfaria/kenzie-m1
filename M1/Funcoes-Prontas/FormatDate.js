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