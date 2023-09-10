const user = {
    username: "Pedro",
    password: "1234",
};

function alterName(newName){
    user.username = newName;
}

function alterPass(newPass){
    user.password = newPass;
}

function login({password, username, city}){
    if(user.username == username && user.password == password){
        console.log(`O usuário de ${city} logou`);
    }else{
        console.log("Usuário inválido!");
    }
}

//alterPass("123@"); //-> Usuário inválido

const userAcess = {
    username: "Pedro",
    password: "1234",
    age: 20,
    city: "Curitiba",
}

login(userAcess);

//*********************************************** */

function criarPessoa(nome, idade, cidade){
    const pessoa = {
        nome: nome,
        idade: idade,
        cidade: cidade,
    }
    return pessoa;
}
console.log(criarPessoa("Jess", "26", "San Francisco"))

function alterarNome(novoNome, pessoa){
    pessoa.nome = novoNome;
    return novoNome;
}
console.log(alterarNome("Amy", "Jess"));

function alterarIdade(novaIdade, pessoa){
    pessoa.idade = novaIdade;
    return novaIdade;
}
console.log(alterarIdade("9", "26"));


function alterarCidade(novaCidade, pessoa){
    pessoa.cidade = novaCidade;
    return novaCidade;
}
console.log(alterarNome("Novo México", "San Francisco"));
