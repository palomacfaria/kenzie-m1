const lista = [1, 2, "3", 5, true, "batata", 7, 15]; //Podemos inserir diversos tipos de dados
//declaração do array com const: não podemos alterar a caixa, os valores sim.
const arr = [];

//Como adicionar elementos em um array?
//PUSH: adiciona elementos no final de um array
arr.push(55);
arr.push(3);
arr.push(9);
arr.push(89);
arr.push(11);
console.log(arr);

//UNSHIFT: adiciona elementos no começo de um array
arr.unshift(100);
console.log(arr);

//como acessar os elementos dentro do Array
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[arr.length - 1]); //Pegando o ultimo elemento
console.log(arr[20]); //undefined

//Alterando elementos da lista (Necessário informar o índice)
arr[2] = 200;
console.log(arr);

//Como remover elementos de um array?
//POP: remove o ultimo elemento dentro de um array
arr.pop();
console.log(arr);

const valorRemovido = arr.pop(); //Removendo o valor e armazenando na variável 
console.log(arr);
console.log(valorRemovido);

//SHIFT: Remove o primeiro elemento de um array
arr.shift();
console.log(arr);

//SPLICE: altera o elemento de um array
const instrutores = ["Alex", "Cristian", "Lorena", "Thiago", "Vislon"];
console.log(instrutores);

instrutores.splice(3, 1, "Paloma"); //Indice, deletamos 1 a partir do indice, inserimos outro no lugar
console.log(instrutores);

//Adicionando um elemento em um local especifico com SPLICE
instrutores.splice(2, 0, "TK");
console.log(instrutores);

//Deletando com SPLICE
instrutores.splice(2, 1);
console.log(instrutores);