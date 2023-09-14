let listaAlunos = [
  {
    nome: "João",
    curso: "Ciencia da Computação",
    turno: "Noturno",
    mediaCorte: 7,
    materias: [
      {
        nome: "Calculo I",
        avaliacoes: [6, 8, 10, 8]
      },
      {
        nome: "Pensamento Computacional",
        avaliacoes: [6, 8, 6, 8]
      },
      {
        nome: "Linguagem Orientada a Objetos",
        avaliacoes: [7, 8, 9, 10]
      },
      {
        nome: "Arquitetura de Organização de Computadores",
        avaliacoes: [6, 8, 7, 8]
      }
    ]
  }
];

/* Exercício 1 - Verificando aprovações 
Cada aluno é representado por um objeto, contendo os seguintes atributos:

nome, curso, turno, mediaCorte, matérias:(lista de materias), avaliacoes(lista de notas)
Sua tarefa é determinar em quantas matérias o aluno foi aprovado. Se o aluno obteve nota maior ou igual a 6, está aprovado.*/

/* Exercício 2 - Verificando aprovações no semestre
Sua tarefa é verificar se o aluno foi aprovado no semestre atual e poderá prosseguir para o próximo. Crie uma função chamada calculaMedia para saber média total do aluno, a partir das notas que ele obteve nas avaliações do semestre. */

const onibus = {
  capacidade: 40,
  origem: "Curitiba-PR",
  destino: "Rio de Janeiro-RJ",
  paradas: [
    "São Paulo-SP",
    "Campinas-SP",
    "São José dos Campos-SP",
    "Volta Redonda-RJ"
  ],
  passageiros: [
    {
      nome: "Luis da Silva",
      rg: "1234567890",
      bilhete: {
        origem: "Curitiba-PR",
        destino: "São José dos Campos-SP",
        poltrona: 15
      }
    },
    {
      nome: "João da Silva",
      rg: "1234567891",
      bilhete: {
        origem: "São Paulo-SP",
        destino: "Rio de Janeiro-RJ",
        poltrona: 16
      }
    }
  ]
};
/* Exercício 3 - Verificando destino de passageiros
Um ônibus possui as seguintes propriedades:

capacidade, origem, destino, paradas(lista cidades), passageiros{nome,rg, bilhete{origen, destino, poltrona}}

-Sua tarefa é determinar quais passageiros irão descer do ônibus em determinada parada.

-Desenvolva um método que recebe a parada atual como parâmetro e verifica se é igual ao valor de paradas do objeto onibus. Esse método deverá verificar em quais passageiros o destino é igual à parada atual do ônibus.

-Em seguida, deve retornar um array com todos os passageiros que irão descer na parada atual. */