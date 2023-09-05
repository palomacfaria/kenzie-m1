function isPalindrome(str) {
     //Transformando o parametro em letras minusculas e removendo espços
    str = str.toLowerCase().replace(/\s/g, '');
    let inicioDaString = 0;
    let finalDaString = str.length - 1; //-1 pois o indice vai iniciar em 0
    let metadeDaString = str.length / 2; //Dividindo para comparar as 2 metades

    for(let i = 0; i <= metadeDaString; i++){ 
      if(str[inicioDaString] !== str[finalDaString]){
        return false; 
      }
      inicioDaString++; 
      finalDaString--;
    }
    return true; 
  }
