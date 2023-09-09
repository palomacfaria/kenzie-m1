/* O cardápio de uma lanchonete é o seguinte:

ESPECIFICAÇÃO | Cachorro Quente | Bauru Simples | Bauru com ovo | Hambúrguer |

CÓDIGO        |       101       |      102      |      103      |     104    |

PREÇO         |     R$ 1,20     |    R$ 1,30    |    R$ 1,50    |   R$ 1,20  |

Calcule e alerte o total a ser pago. Considere que o cliente deve informar o número 0 quando o pedido for encerrado.

Quando o cliente entrar com um valor inválido alerte com mensagem: "Pedido indisponível" ou "Pedido não encontrado". */
let escolha = parseInt(prompt("Digite o código do produto ou 0 para sair"));
let valorTotalDoPedido = 0;
let quantidade = 0;
while(escolha != 0){
    if(escolha == 100){
        quantidade = parseInt(prompt("Qual a quantidade deste item?"));
        valorTotalDoPedido += quantidade * 1.20;
    }else if(escolha == 101){
        quantidade = parseInt(prompt("Qual a quantidade deste item?"));
        valorTotalDoPedido += quantidade * 1.30;
    }else if(escolha == 102){
        quantidade = parseInt(prompt("Qual a quantidade deste item?"));
        valorTotalDoPedido += quantidade * 1.50;

    }else if(escolha == 103){
        quantidade = parseInt(prompt("Qual a quantidade deste item?"));
        valorTotalDoPedido += quantidade * 1.20;

    }else if(escolha == 104){
        quantidade = parseInt(prompt("Qual a quantidade deste item?"));
        valorTotalDoPedido += quantidade * 1.30;
    }else{
        alert('Produto indisponível');
    }
    escolha = parseInt(prompt("Digite o código do produto ou 0 para finalizar o pedido"));
}
alert(`Seu pedido ficou em ${valorTotalDoPedido}`);

/* 1- Faça um programa que peça um valor entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.  */
let valor = parseFloat(prompt("Digite um valor entre 0 e 10"));
while (valor >= 0 && valor <= 10){
    alert(`O valor diditado foi ${valor}`);
    valor = parseFloat(prompt("Digite um valor entre 0 e 10"));
}
alert("Saiu do laço de repetição");
/* 2- Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações. */
let nomeDeUsuario = prompt("Digite seu nome de usuário");
let senha = prompt("Digite sua senha");

while(nomeDeUsuario == senha){
    alert("ERRO: nome de usuário e senha iguais");
    nomeDeUsuario = prompt("Digite seu nome de usuário");
    senha = prompt("Digite sua senha");
} 
alert("Usuário e senha autenticado com sucesso!");
/* 3- Faça um programa que enquanto a entrada for números inteiros positivos, menores que 10, continue somando. Quando um valor negativo ou maior que 10 for informado, pare a execução, alerte a soma e a média. */
let num = parseFloat(prompt("Digite um número:"));
let soma = 0;
let media = 0;
let contador = 0;

while(num >= 0 && num <= 10){
    soma += num;
    contador++;
    num = parseFloat(prompt("Digite um número:"));
}
media = soma / contador;
alert(`A suma dos números foi de ${soma} e a média dos números é de ${media}`);

/* 4- Faça um programa que registre votos. Em uma eleição para o grêmio estudantil existem apenas 3 candidatos, o candidato a, o candidato b e o candidato c.

Solicite ao usuário que entre com a letra correspondente a um candidato e incremente em +1 o número de votos para o candidato. ⁠Caso o usuário entre com um valor que não seja correspondente a um candidato, alerte: "Candidato não encontrado".

Ao final de cada votação alerte a mensagem: "Voto registrado com sucesso".

Para encerrar a votação é necessário que entre com uma flag (variável de controle) de parada: use o x para isso.

Quando o valor x for inserido alerte o número de votos que cada candidato teve. */
let candidatoA = 0;
let candidatoB = 0;
let candidatoC = 0;

let voto = prompt("Digite seu voto (A, B, C)");

while(voto != 'X'){
    if(voto == 'A'){
        candidatoA++;
        alert("Voto registrado com sucesso!");
    }
    else if(voto == 'B'){
        candidatoB++;
        alert("Voto registrado com sucesso!");
    }
    else if(voto == 'C'){
        candidatoC++;
        alert("Voto registrado com sucesso!");
    }
    else{
        alert("Candidato não encontrado!");
    }
    voto = prompt("Digite seu voto (A, B, C)");
}
alert(`O candidato "A" teve ${candidatoA} votos, o candidato "B" teve ${candidatoB} votos, e o candidado "C" teve ${candidatoC} votos.`);