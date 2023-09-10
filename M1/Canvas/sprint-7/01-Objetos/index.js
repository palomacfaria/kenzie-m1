let minhaXicara = {
    cor: "Marrom",
    peso: 30,
}

let meuPrimeiroItemDoPedido = {
    id: 0,
    nome: "X-Burguer",
    preco: 30,
    disponivel: true,
    ingredientes: ["pão", "tomate", "alface", "hamburguer", "queijo"],
}

//Acessando dados de um objeto
console.log(meuPrimeiroItemDoPedido);
console.log(meuPrimeiroItemDoPedido.nome);
console.log(meuPrimeiroItemDoPedido.ingredientes);

//Alterando objeto
meuPrimeiroItemDoPedido.preco = 25;
console.log(meuPrimeiroItemDoPedido.preco);

//Atribuindo propriedades ao objeto
meuPrimeiroItemDoPedido.peso = "500g";
console.log(meuPrimeiroItemDoPedido);

console.log(`O lanche ${meuPrimeiroItemDoPedido.nome} é muito bom!`);

//Atribuindo a uma variável
let lanche = meuPrimeiroItemDoPedido.nome;
console.log(lanche);


