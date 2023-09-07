/* 
1- Escreva uma função que recebe um valor do tipo string e com no mínimo 5 caracteres. Insira o valor recebido em um array e retorne o array gerado.
 */

function gerandoArray(str){
    if(str.length >= 5){
        let arr = [];
        let caractere = "";
        for(let i = 0; i <= str.length - 1; i++){
            caractere = str[i];
            arr.push(caractere);
        }
        return(arr);
    }
    return "A string passada possui menos de 5 caracteres, portanto não é valida para este teste."
}
console.log(gerandoArray("teste"));
console.log(gerandoArray("Kenzie"));
console.log(gerandoArray("Olá"));

/* 2- Escreva uma função que recebe um valor do tipo number. Use o valor recebido para acessar uma posição do seguinte array:

let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"]⁠

Caso a posição exista, retorne o nome que se encontra nela. ⁠Caso não seja acessado nenhuma posição com o valor recebido, ⁠alerte: "Valor não encontrado". */

function verificaPosicaoDoArray(number){
    let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"];
    for(let i = 0; i <= arr.length -1; i++){
        if(number == i){
            return(arr[i]);
        }
        return "Valor não encontrado!"
    }
}
console.log(verificaPosicaoDoArray(0));
console.log(verificaPosicaoDoArray(20));

/* 3-Crie um array de números, contendo os valores de 1 a 10. Crie uma função que recebe um número inteiro.

Acesse a posição do array de números usando o valor recebido. Teste se o valor contido na posição é par ou ímpar.

Caso seja par retorne: "O valor encontrado nesta posição é par",
Caso seja ímpar retorne: "O valor encontrado nesta posição é ímpar". */
const numeros = [1,2,3,4,5,6,7,8,9,10];
function parOuImparComArray(number){
    for(let i = 0; i <= numeros.length - 1; i++){
        if (number == i){
            if(numeros[i] % 2 === 0){
                return "O valor encontrado nesta posição é par";
            }
            else{
                return "O valor encontrado nesta posição é impar";
            }
        }
    }
}
console.log(parOuImparComArray(5));
console.log(parOuImparComArray(2));

/* 4- Dado o array de nomes:
⁠let nomes = ["Pedro", "Rafael", "José"]⁠

Crie uma função que recebe a lista de nomes como parâmetro. A função deve verificar qual dos nomes da lista tem a maior quantidade de caracteres e retornar o nome.

Teste cada posição usando estrutura de repetição, a menos que a lista tenha apenas um valor inserido.

Use este formato: "O nome x é o maior da lista"; */
let nomes = ["Pedro"];
function nomeComMaisCaracteres(lista){
    let qtdeCaracteres = 0;
    let qtdeCaracteresAnterior = -1;
    let maiorQtde = 0;
    let maiorNome = "";
    if(lista.length <= 1){
        console.log("A lista de nomes precisa ter pelo menos mais de um item.");
    }else{
        for(let i = 0; i <= lista.length -1; i++){
            qtdeCaracteres = lista[i].length;

            if(qtdeCaracteres > qtdeCaracteresAnterior){
                maiorQtde = qtdeCaracteres;
                maiorNome = lista[i];
                qtdeCaracteresAnterior = qtdeCaracteres;
            }
        }
        console.log(`O nome ${maiorNome} é o maior da lista`);
    }
}
nomeComMaisCaracteres(nomes);

/* 5- Dado o array de números como exemplo:
⁠numeros = [1,4,6,9,11,8]

Escreva uma função que recebe a lista de números como parâmetro. A função deve realizar a soma dos valores das duas últimas posições da lista e armazenar o valor da soma em uma variável.

Use a variável para testar se o valor da soma é um múltiplo de 2.

Se sim, retorne: "A soma é um múltiplo de 2".
Caso contrário: "A soma não é um múltiplo de 2" */
const numeros2 = [1,4,6,9,11,8];
function multiploDeDois(numeros){
    let valor1 = numeros[numeros.length - 2];
    let valor2 = numeros[numeros.length - 1];
    let soma = valor1 + valor2;

    if(soma % 2 == 0){
        console.log("A soma é um múltiplo de 2");
    }
    else{
        console.log("A soma não é um múltiplo de 2");  
    }
}
multiploDeDois(numeros2);

/* 6- Dado o array de nomes como exemplo:
⁠let nomes = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"]⁠

Escreva uma função que recebe como parâmetros a lista de nomes, um nome (string) e um valor inteiro (number) para representar a posição.

Acesse a lista na posição que corresponde ao valor inteiro recebido e armazene o valor contido na posição em uma variável.

Teste se o nome recebido pela função como parâmetro é o mesmo que o armazenado na variável.

Lembre-se de normalizar os dados antes de testar.

Caso os valores sejam iguais, retorne: "Acertei".
Caso não sejam, retorne: "Não é quem eu pensava" */
let nomes2 = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"];

function mesmoNome(nomes, str, num){
    let nomeDaPosicao = nomes[num];
    if(str.toLowerCase() === nomeDaPosicao.toLowerCase()){
        console.log("Acertei");
    }
    console.log("Não é quem eu pensava");
}

mesmoNome(nomes2, "Josef", 5);
mesmoNome(nomes2, "Maria", 3);
/* 7-Dado dois arrays numéricos como exemplo.
⁠let numeros = [1,2,3,4,5,6,10,7]
⁠let outrosNumeros = [5,7,9,4,2,3,9]

Escreva uma função que recebe as duas listas de números como parâmetro. A função deve conseguir identificar qual dos dois arrays é o maior.

Após identificar o maior array, retorne o último elemento do array.

Use este formato: "A maior lista é a lista cujo último número é: x" */
let numbers = [1,2,3,4,5,6,10,7];
let numbers2 = [5,7,9,4,2,3,9];

function maiorNumeroDoMaiorArray(nums1, nums2){
    let qtdeNums1 = nums1.length;
    let qtdeNums2 = nums2.length;

    if(qtdeNums1 > qtdeNums2){
        console.log(`A maior lista é a lista cujo último número é: ${nums1[qtdeNums1 - 1]}`);
    }
    else{
        console.log(`A maior lista é a lista cujo último número é: ${nums2[qtdeNums2 - 1]}`);
    }
}
maiorNumeroDoMaiorArray(numbers, numbers2);