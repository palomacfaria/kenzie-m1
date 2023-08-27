function somaNumeros(a, b){
    let resultadoSoma = a + b;

    return resultadoSoma;
}

let resultado = somaNumeros(5, 8);
let resultado2 = somaNumeros(2, 3);
let resultado3 = somaNumeros (129, 157);

console.log(resultado, resultado2, resultado3);

//********************************************************* */
function subtraiNumeros(a, b){
    let resultadoSubtracao = a - b;

    return resultadoSubtracao;
}

//Sem utilizar variáveis
console.log(subtraiNumeros(12, 19));
console.log(subtraiNumeros(5, 3));

//********************************************************* */
function calculaAreaCirculo(raio){
    const pi = 3.14;
    const areaCirculo = pi * raio * raio;

    return areaCirculo;
}

let retorno = calculaAreaCirculo(5);
console.log(retorno);

retorno = calculaAreaCirculo(13);
console.log(retorno);

// Função que recebe 2 parametros: base e altura
function calculaAreaTriangulo(base, altura) {
    console.log(`base é igual a: ${base}`);
    console.log(`altura é igual a: ${altura}`);
  
    const areaTriangulo = (base * altura) / 2;
  
    return areaTriangulo;
  }
  
  retorno = calculaAreaTriangulo(5, 10);
  console.log(retorno);