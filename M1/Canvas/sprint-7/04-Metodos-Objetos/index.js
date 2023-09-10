let carro = {
    fabricante: "Kenzie",
    modelo: "FordKenzie",
    cv: 150,
    cor: "Azul",
    ano: 2019,
    ligado: false,
    velocidade: 0,
    velocidadeMaxima: 260,

    ligar: function(){
        if(this.ligado){
            return "Veículo já está ligado!"
        }
        this.ligado = true;
        return "Ligado";
    },

    desligar: function(){
        if(!this.ligado){
            return "Veículo já está desligado."
        }
        this.ligado = false;
        return "Desligado";
    },

    acelerar: function(){
        if(!this.ligado){
            return "Ligue o carro antes de tentar acelerar!";
        }
        else if(carro.velocidade == 260){
            return "Não é possível acelerar, o carro já atingiu sua velocidade máxima!";
        }
        else if(carro.velocidade < carro.velocidadeMaxima){
            this.velocidade += 10;
            return "Velocidade aumentada!";
        }
    }, 

    frear: function(){
        if(!this.ligado){
            return "Ligue o carro antes de tentar frear";
        }
        else if(carro.velocidade == 0){
            return "O carro já está parado!"
        }
        else if(carro.velocidade > 0){
            this.velocidade -= 5;
            return "Velocidade reduzida!";
        }
    },
};
//Ligando o carro
console.log(carro.ligar());

//Desligando o carro
console.log(carro.desligar());
console.log(carro.desligar());

//Acelerar carro
console.log(carro.ligar());
console.log(carro.acelerar());

//Frear carro
console.log(carro.frear());
console.log(carro.frear());
console.log(carro.frear());
console.log(carro.velocidade);