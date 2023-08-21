/*1- Declare uma variável chamada num1 e atribua a ela o valor 5. Em seguida, declare uma variável chamada num2 e atribua a ela o valor 10. Some as duas variáveis e imprima o resultado no console. */

const num1 = 5;
const num2 = 10;
console.log(num1+num2);

/*2- Declare uma variável chamada pi e atribua a ela o valor de 3.14. Em seguida, declare uma variável chamada raio e atribua a ela o valor 5. Calcule o comprimento da circunferência com base no raio e imprima o resultado no console. (dica: multiplique o raio pelo valor de pi e pelo número dois) */

const pi = 3.14;
const raio = 5;
let circunferencia = (raio * pi) * 2;
console.log(`O valor da circunferência é: ${circunferencia}`);

/*3- Declare uma variável chamada temperatura e atribua a ela o valor 30. Em seguida, converta a temperatura de Celsius para Fahrenheit e imprima o resultado no console. (dica: para converter de Celsius para Fahrenheit, basta multiplicar a temperatura por nove, após isso dividir o valor por cinco e somar trinta e dois) */

const temperatura = 30;
const fahrenheit = ((temperatura * 9) / 5) + 32;
console.log(fahrenheit);

/*4- Declare uma variável chamada nota1 e atribua a ela o valor 7. Em seguida, declare uma variável chamada nota2 e atribua a ela o valor 9. Calcule a média das duas notas e imprima o resultado no console.*/

const nota1 = 7;
const nota2 = 9;
const media = (nota1 + nota2) / 2;
console.log(media);

/*5- Declare uma variável chamada largura e atribua a ela o valor 10. Em seguida, declare uma variável chamada comprimento e atribua a ela o valor 20. Calcule a área do retângulo e imprima o resultado no console */
const largura = 10;
const comprimento = 20;
const areaRetangulo = largura * comprimento;
console.log(areaRetangulo);

/*6- Declare uma variável chamada salarioBruto e atribua a ela o valor 5000. Em seguida, calcule e imprima o salário líquido, considerando um desconto de 10% para impostos. */

const salarioBruto = 5000;
const desconto = (10/100) * salarioBruto;
const salarioLiquido = salarioBruto - desconto;
console.log(salarioLiquido);

/*7- Declare uma variável chamada horasTrabalhadas e atribua a ela o valor 40. Em seguida, declare uma variável chamada valorHora e atribua a ela o valor 50. Calcule o salário bruto de uma pessoa e imprima o resultado no console. */

const horasTrabalhadas = 40;
const valorHora = 50;
const salario = horasTrabalhadas * valorHora;
console.log(salario);