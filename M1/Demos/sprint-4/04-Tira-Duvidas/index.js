//Verificar se o usuário pode acessar um evento com desconto
//O usuário só pode acessar o evento se tiver a idade maior ou igual a 18 anos
//Se o usuário tiver um cupom de desconto ele paga metade do ingresso

const idadeUsuario = 19;
const cupomDesconto = false;

if(idadeUsuario >= 18 && cupomDesconto === true){
    console.log("O usuário pode acessar o evento com desconto pagando metade do ingresso.");
}else if(idadeUsuario >= 18){
    console.log("Pode acessar o evento pelo valor integral.");
}else{
    console.log("O usuário não tem permissão para acessar o evento.");
}

//Escreva um algoritimo que leia 3 valores inteiros e diferentes e mostre-os em ordem decrescente

const a = prompt("Digite um número: ");
const b = prompt("Digite outro número: ");
const c = prompt("Digite outro número: ");

if(a >= b && a >= c){
    if(b >= c){
        console.log(`${a}, ${b}, ${c}`);
    }else{
        console.log(`${a}, ${c}, ${b}`);
    }
}else if(b >= a && b>= c){
    if(b >= c){
        console.log(`${b}, ${a}, ${c}`); 
    }else{
        console.log(`${b}, ${c}, ${a}`);
    }
}else{
    if(c >= b){
        console.log(`${c}, ${a}, ${b}`); 
    }else{
        console.log(`${c}, ${b}, ${a}`); 
    }
}
