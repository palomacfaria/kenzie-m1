function descobriQuantidadeDeMensagens(texto){
    let numeroDePalavras = 0;

    if(texto.length > 250){
        return 'Texto muito grande para ser analisado';
    }

    if(texto[0] != texto[0].toUpperCase()){
        numeroDePalavras++;
    }

    for(let i = 0; i < texto.length; i++){
        if(texto[i] == texto[i].toUpperCase() || texto[i] == '.'){
            numeroDePalavras++;
        } 
    }
    return numeroDePalavras;
}
console.log(descobriQuantidadeDeMensagens('sss.aaad.sss'));
console.log(descobriQuantidadeDeMensagens('sssaasdsSs'));