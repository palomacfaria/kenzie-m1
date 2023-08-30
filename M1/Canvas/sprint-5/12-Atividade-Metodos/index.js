/* Exercício 1
Crie uma função que recebe três parâmetros: uma frase, uma palavra antiga e uma palavra nova. A função deve buscar por todas as ocorrências da palavra antiga na frase e substituí-las pela palavra nova. Então, a função deve retornar a nova frase com o resultado da substituição.  */
function SubistituirPalavras(frase, palavraAntiga, palavraNova) {
  const novaFrase = frase.replaceAll(palavraAntiga, palavraNova);
  return novaFrase;
}
let resultado = SubistituirPalavras(
  "Estou estudando JavaScript. JavaScript é muito legal!",
  "JavaScript",
  "CSS"
);
console.log(resultado);

/* Exercício 2
Escreva uma função em JavaScript que recebe três parâmetros numéricos: nota1, nota2 e nota3, que representam as notas de um aluno em três avaliações. A função deve calcular a média aritmética das notas e arredondar o resultado para uma casa decimal.

A função deve retornar a média arredondada em uma mensagem no seguinte formato: "A média do aluno é (media)." */
function media(nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3;
  const mediaArredondada = media.toFixed(1);

  return `A média do aluno é: ${mediaArredondada}.`;
}

resultado = media(8.75, 9.333, 10);
console.log(resultado);

/* Exercício 3
Escreva uma função em JavaScript que recebe dois parâmetros numéricos: valorUnitario e quantidade, que representam o valor unitário de um produto e a quantidade comprada, respectivamente. A função deve calcular o valor total da compra, aplicando um desconto progressivo no valor unitário e formatando o resultado com duas casas decimais.

O desconto será aplicado de acordo com a quantidade comprada:

10% de desconto se a quantidade comprada for maior ou igual a 5;
20% de desconto se a quantidade comprada for maior ou igual a 10.
Em seguida, a função deve substituir o ponto por vírgula na string do valor total, e deve retornar uma mensagem no seguinte formato: "O valor total da compra é R$ <valorTotal>." */
function calculaCompra(valorUnitario, quantidade) {
  let menosDezPorcento = valorUnitario * 0.1;
  let menosVintePorcento = valorUnitario * 0.2;
  let valorFormatado = 0;

  if (quantidade >= 5) {
    valorUnitario = valorUnitario * quantidade - menosDezPorcento;
    valorFormatado = valorUnitario.toFixed(2);
    valorFormatado = valorFormatado.replace(".", ",");
    return `O valor total da compra é R$ ${valorFormatado}.`;
  } 
  else if (quantidade >= 10) {
    valorUnitario = valorUnitario * quantidade - menosVintePorcento;
    valorFormatado = valorUnitario.toFixed(2);
    valorFormatado = valorFormatado.replace(".", ",");
    return `O valor total da compra é R$ ${valorFormatado}.`;
  } 
  else {
    valorUnitario = valorUnitario * quantidade;
    valorFormatado = valorUnitario.toFixed(2);
    valorFormatado = valorFormatado.replace(".", ",");
    return `O valor total da compra é R$ ${valorUnitario}.`;
  }
}

resultado = calculaCompra(8, 6);
console.log(resultado);

resultado = calculaCompra(16.3, 15);
console.log(resultado);

resultado = calculaCompra(15.46, 3);
console.log(resultado);
