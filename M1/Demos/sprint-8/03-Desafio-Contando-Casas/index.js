function geraNumeroAleatorio(){
    const numeroAleatorio = Math.floor(Math.random() * 21);
    return numeroAleatorio;
}

const numAleatorio = geraNumeroAleatorio();
let palpiteUsuario = parseInt(prompt('Digite um número de 0 a 20: '));

function verificaPalpite(num, palpite){
    let tentativa = 1;
    console.log(num);

    while(num !== palpite){
        alert("Ops! Tente novamente.");
        palpite = parseInt(prompt('Digite um número de 0 a 20: '));
        tentativa++;
    }
    alert(`Você acertou na tentativa ${tentativa}`)
}
console.log(verificaPalpite(numAleatorio, palpiteUsuario));