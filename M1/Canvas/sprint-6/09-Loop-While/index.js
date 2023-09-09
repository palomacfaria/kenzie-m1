const produtos =["banana", "maça", "uva"];

let indice = 0;

while(indice < produtos.length){
    console.log(produtos[indice]);
    indice ++;
} 
console.log("Fim do While");

/*************************************************** */
let codigo = prompt("Digite o código enviado para seu e-mail");

while(codigo != 1234){
    alert("Código incorreto!");
    codigo = prompt("Digite o código correto");
}
alert("Código correto, sua senha pode ser recuperada!");

/***************TABUADA DO DOIS SOMENTE IMPARES*************** */
function tabuadaDoDoisSomenteImpares(){
    // Contador inicializado em 1
    let contador = 1;
  
    // Condição de parada do loop (MENOR ou IGUAL a 10)
    while (contador <= 10){
      // Esse trecho só será executado caso a condição de parada seja verdadeira
      console.log(`Valor atual do contador: ${contador}`)    
  
      console.log(`2 x ${contador} = ${contador * 2}`)
  
      // O contador é incrementado em 2 a cada iteração
      contador += 2;
    }
  
    // Esse trecho só será executado após o loop while ser finalizado
    console.log("Saímos do loop!!");
  }
  
  tabuadaDoDoisSomenteImpares();