/*  1 ª Parte: Modelagem
Dadas as propriedades: Nome, Ano de nascimento, CPF, Cidade, Estado, Logradouro
Crie o objeto pessoa contendo todas as propriedades citadas. */
let pessoa = {
  nome: "Miguel",
  anoDeNascimento: "1990",
  cpf: "456.159.753-94",
  cidade: "Limeira",
  estado: "SP",
  logradouro: "Rua direita 564, Bom sucesso"
}

/* Dadas as propriedades: Nome, CNPJ, Área de atuação, Cidade, Estado, Logradouro, Curso
Crie o objeto escola contendo todas as propriedades citadas. */
let escola = {
  nome: "Kenzie Academy Brasil",
  cnpj: "32.440.669/0001-90",
  areaDeAtuacao: "Programação",
  cidade: "Curitiba",
  estado: "PR",
  curso: "Desenvolvimento fullstack"
}

/* Dadas as propriedades: Nome, Duração em anos, Turma, Módulos,
Crie o objeto curso contendo todas as propriedades citadas. */
let curso = {
  nome: "Desenvolvimento fullstack",
  duracao: 1,
  turma: "T20",
  modulos: ["M1", "M2", "M3", "M4", "M5", "M6"],
}

/* Dadas as propriedades: Cidade, Estado, Logradouro, Cep
Crie o objeto endereço contendo todas as propriedades citadas. */
let endereco = {
  cidade: "Curitiba",
  estado: "PR",
  logradouro: "Rua direita 100, esquerda",
  cep: "14.400.560"
}

/* 2ª Parte: Manipulação - Estacionamento
Dado o objeto carro que representa um carro estacionado, realize as seguintes tarefas: */

const carro = {  
  placa: "ABC123",   
  classes: ["sedan"],  
  luxo: true,
  potencia: 200, 
  estacionado: true  
}

/* - Escreva uma função chamada obterPlaca:
- A função, quando chamada, deve retornar a placa do carro.

Exemplo de chamada da função: obterPlaca()
Saída: "ABC123" */
function obterPlaca(){
  return carro.placa;
}
console.log(obterPlaca());

/* -Escreva uma função chamada verificarClasses:
-A função, quando chamada, deve retornar a(s) classe(s) do carro.
-Perceba que a propriedade é um array - quando o array possuir apenas um elemento, retorne somente o valor do elemento, e quando o array possuir mais de um elemento, retorne todo o array.

Exemplo de chamada da função: verificarClasses()
Saída: "sedan" */
function verificarClasses(){
  if(carro.classes.length == 1){
    return carro.classes[0];
  }else{
    return carro.classes;
  }
}
console.log(verificarClasses());

/* -Escreva uma função chamada potenciaReal:
-A função, quando chamada, deve retornar a potência real do carro.
-Caso o carro tenha a propriedade luxo definida como true, o valor da propriedade potencia é elevado ao quadrado.
-Retorne o valor da potência do carro.

Exemplo de chamada da função: potenciaReal()
Saída: 40000*/
function potenciaReal(){
  let potencia = carro.potencia;

  if(carro.luxo === true){
    potencia = potencia ** 2;
    return potencia;
  }
  else{
    return carro.potencia;
  }
}
console.log(potenciaReal())

/* -Crie uma função chamada adicionarNovaClasse que recebe uma string como parâmetro:
-Verifique se o número de classes do carro é maior ou igual a 3.
-Se o número de classes for maior ou igual a 3, retorne: "Este carro não pode ter mais classes".
-Se o número de classes for menor que 3, verifique se a classe recebida está entre as classes permitidas: 'sedan', 'hatchback', 'suv', 'crossover' e 'cupê'.
-Caso a classe recebida não estiver entre as classes permitidas, retorne: "Classe inválida. As classes permitidas são: sedan, hatchback, suv, crossover e cupê".
-Se a classe recebida estiver entre as classes permitidas, verifique se ela já está presente no objeto de carro.
-Se a classe já estiver presente, retorne: "O carro já possui a classe x", onde x é o valor da classe.
-Se a classe não estiver presente, adicione-a à lista de classes do carro e retorne: "Classe x adicionada com sucesso", onde x é o valor da classe.

Exemplo de chamada da função: adicionarNovaClasse('cupê')
Saída: "Classe cupê adicionada com sucesso" */
function adicionarNovaClasse(str){
  if(carro.classes.length >= 3){
    return  "Este carro não pode ter mais classes";
  }
  else if(str == "sedan" ||str == "hatchback" ||str == "suv" ||str == "crossover" || str == "cupê" ){
      for(let i = 0; i <= carro.classes.length; i++){
        if(carro.classes[i] == str){
          return `O carro já possui a classe ${str}", onde ${i} é o valor da classe.`;
        }
      }
      carro.classes.push(str);
      return `Classe ${str} adicionada com sucesso", onde ${carro.classes.length - 1} é o valor da classe.`;
    }
    else{
      return "Classe inválida. As classes permitidas são: sedan, hatchback, suv, crossover e cupê.";
    }
}
console.log(adicionarNovaClasse('cupê'));
console.log(adicionarNovaClasse('cupês'));
console.log(adicionarNovaClasse('cupê'));
/* -⁠Escreva uma função chamada naoMaisLuxo:
-Verifique se o carro está estacionado.
-Se o carro não estiver estacionado, retorne: "O carro {placa do carro} não está estacionado".
-Verifique se o atributo "luxo" do carro é verdadeiro.
-Se o atributo "luxo" não for verdadeiro, retorne: "O carro {placa do carro} não é luxuoso".
-Se ambos os atributos estiverem corretos (carro estacionado e luxo verdadeiro), altere o atributo "luxo" para falso.
-Retorne: "O carro {placa do carro} não é mais considerado um carro de luxo",.

Obs.: Substitua "{placa do carro}" pela placa do carro em questão.

Exemplo de chamada da função: naoMaisLuxo()
Saída: "O carro ABC123 não é mais considerado um carro de luxo"  */
function naoMaisLuxo(){
  if(carro.estacionado === false){
    return `O carro ${carro.placa}} não está estacionado`;
  }

  if(carro.luxo === false){
    return `O carro ${carro.placa} não é luxuoso`;
  }

  if(carro.estacionado === true && carro.luxo === true){
    carro.luxo = false;
    return `O carro ${carro.placa} não é mais considerado um carro de luxo.`
  }
}
console.log(naoMaisLuxo())