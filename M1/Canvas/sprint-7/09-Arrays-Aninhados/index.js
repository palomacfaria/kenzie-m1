let lista = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let elemento = lista[1][1];
console.log(elemento);

//Reatribuindo valor
elemento = lista[1][1] = 10;
console.log(elemento);

//Usando em laços de repetição
for(let i = 0; i < lista.length; i++){
    for(let j = 0; j < lista[i].length; j++){
        console.log(lista[i][j]);
    }
}