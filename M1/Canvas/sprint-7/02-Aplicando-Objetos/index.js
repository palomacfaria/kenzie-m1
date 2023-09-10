let listPessoas = [
    {
        nome: 'Manoel',
        idade: 32,
        endereco: {
            rua: 'nova',
            bairro: 'velho',
            numero: 0,
        },
        temCarro: true,
    },
];
//Acessando apenas o objeto
console.log(listPessoas[0]);

//Acessando um atributo
console.log(listPessoas[0].nome);

//Adicionando um novo objeto no Array
listPessoas.push({
    nome: 'José',
    idade: 23,
    endereco: {
        rua: 'nova',
        bairro: 'velho',
        numero: 5,
    },
    temCarro: false,
});

console.log(listPessoas);

//Criar novas propriedades
listPessoas[0].endereco.referencia = 'Ao lado da sorveteria';
console.log(listPessoas[0]);

//Alterar
listPessoas[1].temCarro = true;
console.log(listPessoas[1]);

//Remover
delete listPessoas[0].endereco.referencia;
console.log(listPessoas[0]);