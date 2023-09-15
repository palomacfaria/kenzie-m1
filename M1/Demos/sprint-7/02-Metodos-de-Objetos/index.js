const pet = {
    nome: 'Felícia',
    raca: 'Sianes',
    especie: 'Gato',
    pelagem: 'Curta',
    cor: 'Preto',

    latir: function(){
        console.log('Au au au')
    },
    miar: function(){
        console.log('Miauuu');
    },
    comer: function(){
        console.log('Nham nham');
    },
    brincar: function(tipo){
        console.log(`Iniciando brincadeira ${tipo}`);
    },
    resumoPet: function(){
        const texto = `Esse pet é da especie ${this.especie} da raça ${this.raca} de cor ${this.cor}, chamando(a) ${this.nome}`;

        return texto;
    },
    isGato: function(){
        if(this.especie.toLocaleLowerCase() === 'gato'){
            return true;
        }
        return false;
    },
    isCao: function(){
        if(this.especie.toLocaleLowerCase() === 'cachorro'){
            return true;
        }
        return false;
    }
}

console.log(pet.nome);
console.log(pet.especie);

pet.miar();
pet.comer();
pet.brincar('pega pega');
console.log(pet.resumoPet());

/* function brincar(tipo){
    console.log(tipo);
}
brincar('teste'); */

console.log(pet.isGato());
console.log(pet.isCao());


//********************************************** */
const ferramentas = {
    Format2Decimais: function(n){
        if(n < 10){
            return `0${n}`;
        }
        return n;
    },
    porcentageToUnity: function(n){
        return n / 100;
    }
}

console.log(ferramentas.Format2Decimais(1));
console.log(ferramentas.porcentageToUnity(2));

/*
OBJETOS
Atributos: Informações do objeto
Métodos: Ações do objeto

FUNÇÕES:
Executam um conjunto de instruções
*/

//********************************************** */
const pessoa = {
    //Atributos
    nome: 'Paloma',
    sobrenome: 'Faria',
    idade: '23',
    genero: 'Feminino',
    peso: '60Kg',
    altura: '1.60',
    nascimento: {
        dia: 8,
        mes: 2,
        ano: 2000,
        formataData: function(){
            return `${this.dia}/${this.mes}/${this.ano}`
        }
    },
    profissao: 'Técnica de informática',
    escolaridade: 'Superior completo',
    nascionalidade: 'Brasileira',
    estadoCivil: 'Solteira',
    qi: 98,
    endereco: 'Rua de todos',
    numEndereco: 0,
    complementoEndereco: 'Casa',
    cpf: '123.456.789-10',
    rg: '12.345.678-9',
    hobby: 'Assistir séries',

    //Métodos
    correr: function(){
        console.log('Correndo');
    },
    pular: function(){
        console.log('Pulando');
    },
    comer:function(){
        console.log('Comendo');
    },
    trabalhar:function(){
        console.log('Trabalhando');
    },
    beberAgua: function(){
        console.log('Bebendo água');
    },
    atirar: function(){
        console.log('Piu piu piu');
    },
    dormir: function(){
        console.log('Dormindo');
    },
    chorar: function(){
        console.log('Chorando');
    },
    estudar:function(){
        console.log('Estudando');
    },
    codar: function(){
        console.log('Desenvolvendo');
    },
}

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.nascimento.dia);

pessoa.comer();
pessoa.correr();
pessoa.atirar();

console.log(pessoa.nascimento.formataData());