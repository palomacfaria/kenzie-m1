// for(inicialização; condição; incremento)

//Calculando a tabuada 
let numero = 9;

for(let i = 1; i <= 10; i++){
    let resultado = i * numero
    console.log(`${i} X ${numero} = ${resultado}`);
}

//Verificando se o contador é par ou impar
function parOuImparDeZeroAVinte(){
    for(let contador = 0; contador <= 20; contador++){
        if(contador % 2 == 0){
            console.log(`O número ${contador} é par!`);
        }else{
            console.log(`O número ${contador} é impar!`);
        }
    }
    console.log("Saimos do laço de repetição FOR!");
}
parOuImparDeZeroAVinte();