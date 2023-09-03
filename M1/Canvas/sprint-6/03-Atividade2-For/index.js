/* Escreva uma função que apresente como resultado os quadrados dos números inteiros existentes na faixa de valores de 15 a 200.

Exemplo:
chamada da função: nome_da_sua_funcao()
Saída: 225, 256, 289 ...40000 */
function inteirosAoQuadrado(){
    for(let i = 15; i <= 200; i++){
        console.log(i * i);
    }
}
inteirosAoQuadrado();

/* Escreva uma função que apresente a soma dos cem primeiros números naturais.
(1+2+3+...+98+99+100).

Exemplo:
chamada da função: nome_da_sua_funcao()
Saída: 5.050 */
function somaDosCemPrimeirosNumeros(){
    let soma = 0;
    for(let i = 1; i <= 100; i++){
        soma = soma + i;
    }
    console.log(soma);
}
somaDosCemPrimeirosNumeros();
/* Escreva uma função que apresente todos os valores numéricos menores que 200 que são divisíveis por 4.

Exemplo:
chamada da função: nome_da_sua_funcao()
Saída: 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40 ...196 */
function divisivelPorQuatro(){
    for(let i = 0; i < 200; i++){
        if(i % 4 === 0){
            console.log(i);
        }
    }
}
divisivelPorQuatro();


/* Escreva uma função que calcule o resultado da soma e da média aritmética dos valores pares situados na faixa numérica de 50 até 70.

soma = 50+52+54...+70
média_aritmética = soma / qtd_numeros_pares_no_intervalo⁠⁠ Exemplo:
chamada da função: funcao_o_nome_da_sua_funcao()
Saída: A soma é 660 e a média é 60. */
function somaEMediaPares(){
    let soma = 0;
    let qtdNumerosPares = 0;
    let media = 0;
    
    for(let i = 50; i <= 70; i++){
        if(i % 2 === 0){
            soma = soma + i;
            qtdNumerosPares++;
        }
    }
    media = soma / qtdNumerosPares;
    console.log(`A soma dos números entre 50 e 70 é de ${soma} e a média aritimética dos números é de ${media}`);
}
somaEMediaPares();