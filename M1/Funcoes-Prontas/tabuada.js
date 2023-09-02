//Calculando a tabuada 
let numero = prompt("Digite um número para saber a tabuada:");

for(let i = 1; i <= 10; i++){
    let resultado = i * numero
    console.log(`${i} X ${numero} = ${resultado}`);
}