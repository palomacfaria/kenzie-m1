//Métodos Primitivos
const numero1 = 12;
const numero2 = 3.1415;
const string1 = 'Kenzie Academy Brasil';
const string2 = 'Brasil';
const string3 = '12.1522';

/***************************Métodos de Number***************************/
//tofixed() 
console.log(numero2.toFixed()); //Removeu as casas decimais (transforma texto em string)
console.log(numero2.toFixed(2)); //Definiu apenas 2 casas decimais (transforma texto em string)

//isInteger()
console.log(Number.isInteger(numero1)); //true (pois é um número inteiro)
console.log(Number.isInteger(numero2)); //false (pois possui casas decimais)

function isInteger(n){
    if(n === parseInt(n)){
        return true;
    }
    return false;
}
console.log(isInteger(numero1)); //true 12
console.log(isInteger(numero2)); //false 3.1415

//parseInt()
console.log(parseInt(numero2)); //pega a parte inteira do número

//parseFloat()
console.log(parseFloat(string3));
console.log(typeof parseFloat(string3));

//toString()
console.log(numero2.toString());
console.log(typeof numero2.toString());

/***************************Métodos de Strings***************************/

console.log(string1); //Kenzie Academy Brasil
console.log(string1.replace('Academy', 'Escola'));
console.log(string1.replaceAll('e', '3'));

//startsWith
console.log(string1.startsWith('Kenzie')); //True -> Verifica se começa com a palavra ou frase
console.log(string1.startsWith('Academy')); //false
console.log(string1[0] == 'K'); //True

//includes -> Verifica se a palavra está incluida na frase
console.log(string1.includes('EUA')); //false
console.log(string1.includes('Brasil'));//true

//toUpperCase()
console.log(string1.toUpperCase());

//toLowerCase()
console.log(string1.toLowerCase());

/***************************Funções dentro de funções***************************/

function calculadora(a, b, op){
    function soma(n1, n2){
        return n1 + n2;
    }
    
    function mult(n1, n2){
        return n1 * n2;
    }

    if(op == '+'){
        return soma(a,b);
    }
    else if(op == '*'){
        return mult(a,b)
    }
}

console.log(calculadora(3,4,'+'));
console.log(calculadora(12,15,'*'));

/***************************Armazenando função dentro da variável***************************/

function vaca(){
    console.log("muuuuu");
}
vaca();

const mimosa = vaca;
vaca();
mimosa();