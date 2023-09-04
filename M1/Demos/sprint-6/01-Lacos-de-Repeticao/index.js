/*
for(inicialização; condição; iteração){

}
Inicialização: trecho que será executado antes da primeira iteração.
Condição: condição de execução do loop
Iteração: será executado a cada loop
*/

for(let i = 1; i < 10; i++){
    console.log(i);
}
console.log("Finalizou o loop");

// i = 1 -> true
// i = 2 -> true
// i = 3 -> true
//...
// i = 8 -> true
// i = 9 -> true
// i = 10 -> false

let str = "Kenzie Academy Brasil";
let strAux = "";

for(let i = 0; i < str.length; i++){
    let char = str[i];
    if(char.toLocaleLowerCase() == "a"){
        strAux += "*";
    }else{
        strAux += char;
    }
    console.log(strAux);
}

/******************************************* */
let soma = 0;
for(let i = 0; i <= 5; i++){
    let nota = prompt("Digite uma nota: ");
    soma += nota;
}
console.log(`Soma: ${soma}`);
console.log(`Média: ${soma / 5}`);

/******************************************* */
function teste(){
    for(let i = 0; i < 100; i+=4){
        console.log(i)
    }
}
console.log(teste());

/*Exemplo de loop infinito
 for(let i = 0; i < 10; i = true){
    console.log(i);
} */


