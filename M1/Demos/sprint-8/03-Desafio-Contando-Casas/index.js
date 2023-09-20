function geraNumeroAleatorio(){
    const numeroAleatorio = Math.floor(Math.random() * 21);
    return numeroAleatorio;
}
let aleatorio = geraNumeroAleatorio();

function verificaPalpite(num, palpite){
    let tentativa = 1;
    while(num !== palpite){
        console.log(`Você acertou na tentativa ${tentativa}`)
        tentativa++
    }
}
console.log(verificaPalpite(aleatorio, 5));