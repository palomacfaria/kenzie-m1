/* 1- Escrever uma função chamada fibonacciNumbers(). A função quando chamada deve apresentar os valores da sequência numérica de Fibonacci até o décimo quinto termo.
A sequência de Fibonacci é formada por:

⁠O, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, ... etc.

Obtendo-se o termo seguinte a partir da soma do termo atual com o termo anterior, e assim sucessivamente.

Utilize para este exercício as variáveis

ATUAL -> Representa o valor atual do contador do laço.
ANTERIOR -> Representa o valor anterior do contador.
PRÓXIMO -> Representa o valor seguinte do contador. */
function fibonacciNumbers(){
    let anterior = 0;
    let atual = 1;
    let proximo = 0;
    let fibonacci = " ";

    fibonacci += anterior + " " + atual;
    for(let i = 1; i <= 13; i++){ //i <= 13 pois eu já defini os 2 primeitos números antes de entrar no FOR
        proximo = anterior + atual;
        fibonacci += " " + proximo;
        anterior = atual;
        atual = proximo;
    }
    console.log(fibonacci);
}
fibonacciNumbers();
/* 2- Escrever um programa que calcule e apresente o somatório do número de grãos de trigo que se pode obter num tabuleiro de xadrez, obedecendo à seguinte regra:

Colocar um grão de trigo no primeiro quadro e nos quadros seguintes o dobro do quadro anterior.

Ou seja, no primeiro quadro coloca-se um grão, no segundo quadro colocam-se dois grãos (neste momento, tem-se três grãos), no terceiro quadro colocam-se quatro grãos (tendo neste momento sete grãos), no quarto quadro colocam-se oito grãos (tendo-se então 15 grãos) até o limite de casas que é 64. A quantidade de grãos adicionados é sempre o dobro da quantidade anterior.
Resultado esperado: 18.446.744.073.709.552.000 grãos no tabuleiro. */
function somaGraos(){
    let quadroAtual = 1;
    let quadroSeguinte = 0;
    let totalGraos = 0;
    for(let i = 1; i <= 64; i++){ //64 é o total de quadros em um tabulero de xadrez.
        quadroSeguinte = quadroAtual * 2;
        totalGraos = quadroAtual + quadroSeguinte;
        quadroAtual = quadroSeguinte;
    }
    console.log(totalGraos);
}
somaGraos();