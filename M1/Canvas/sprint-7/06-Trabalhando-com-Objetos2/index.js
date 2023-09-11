const carros = [
    {
      modelo: 'Ka',
      marca: 'Ford',
      ano: '2000',
      cor: 'Branco',
      completo: false,
      acessorios: ['Vidro Elétrico'],
      preco: 6799.33,
    },
    {
      modelo: 'Gol',
      marca: 'VW',
      ano: '1996',
      cor: 'Preto',
      completo: false,
      acessorios: ['Trava'],
      preco: 12199.13,
    },
    {
      modelo: 'Palio',
      marca: 'Fiat',
      ano: '1995',
      cor: 'Verde',
      completo: false,
      acessorios: [],
      preco: 11099.1,
    },
    {
      modelo: 'Monza',
      marca: 'Chevrolet',
      ano: '1993',
      cor: 'Vinho',
      completo: false,
      acessorios: [],
      preco: 14578.25,
    },
    {
      modelo: 'Saveiro',
      marca: 'VW',
      ano: '2013',
      cor: 'Prata',
      completo: false,
      acessorios: [],
      preco: 28399.13,
    },
    {
      modelo: 'Gol',
      marca: 'VW',
      ano: '1996',
      cor: 'Preto',
      completo: true,
      acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
      preco: 14350.45,
    },
    {
      modelo: 'Gol',
      marca: 'VW',
      ano: '2013',
      cor: 'Preto',
      completo: true,
      acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
      preco: 22109.21,
    },
    {
      modelo: 'Montana',
      marca: 'Chevrolet',
      ano: '2011',
      cor: 'Azul',
      completo: false,
      acessorios: [],
      preco: 15999.13,
    },
    {
      modelo: 'Stilo',
      marca: 'Fiat',
      ano: '2000',
      cor: 'Preto',
      completo: false,
      acessorios: [],
      preco: 17251.36,
    },
  ];
  /*Crie uma função que recebe a lista de carros como parâmetro e retorna a quantidade total de veículos. */
  function contaTotal() {
    console.log(`A quantidade total de veículos é de ${carros.length}`);
  }
  contaTotal();
  
   
  
  /* Crie uma função que recebe a lista de carros como parâmetro e retorna a soma do preço dos veículos.
  
   
  
  Retorne uma string com o seguinte formato: 'A soma do preço de todos veículos é R$ 00000000,00 */
  function precoTotal(carro) {
    let somaTotal = 0;
    for (let i = 0; i <= carro.length - 1; i++) {
      somaTotal += carros[i].preco;
    }
    return `A soma do preço de todos veículos é R$${somaTotal}`;
  }
  console.log(precoTotal(carros));
  
   
  
  /* Crie uma função que recebe a lista de carros e a marca procurada como parâmetro, filtre e retorne todos veículos da marca. */
  function filtraPorMarca(marcaCarro) {
    let carrosDaMesmaMarca = [];
  
   
  
    for (let i = 0; i <= carros.length - 1; i++) {
      if (marcaCarro == carros[i].marca) {
        carrosDaMesmaMarca.push(carros[i].modelo);
      }
    }
    return `Os carros da mesma marca ${marcaCarro} são ${carrosDaMesmaMarca}.`;
  }
  console.log(filtraPorMarca('Fiat'));
  
   
  
  /* Crie uma função que recebe a lista de carros e o acessório procurado como parâmetro, filtre e retorne todos veículos que tenham o acessório. 
  function filtraPorAcessorio(carro, carroAcessorio) {
  
   
  
  }
  console.log(filtraPorAcessorio(carros, 'Alarme'))*/
  
   
  
  /* Crie uma função que recebe a lista de carros como parâmetro, filtre e retorne todos veículos que sejam completos. */
  function eCarroCompleto(carro) {
    let carrosCompletos = [];
    for (let i = 0; i <= carro.length - 1; i++) {
      if (carros[i].completo == true) {
        carrosCompletos.push(carros[i].modelo);
      }
    }
    return carrosCompletos;
  }
  console.log(eCarroCompleto(carros));
  
   
  
  /* Crie uma função para adicionar novos carros a lista. Retorne a lista de carros atualizada. 
  function adicionaCarro(carro) {
  
  }*/
  
   
  
  /* Crie uma função que recebe como parâmetro a lista de carros e o índice de um veículo.
  Remova o elemento referente ao indice e retorne a lista atualizada.
  Lembre-se de tratar quando a posição for inválida. */
  function removeCarro(carro, indice) {
    for (let i = 0; i <= carro.length - 1; i++) {
      if (indice <= carro.length) {
        carros.splice(carro[i], 1);
      } else {
        return 'O indice informado não existe!';
      }
    }
    return carros;
  }
  //console.log(removeCarro(carros, 4));
  
   
  
  /* Crie uma função que recebe a lista de carros como parâmetro.
  Retorne a quantidade de carros com menos de 10 anos.*/
  function contaCarrosNovos(carro) {
    let quantidade = 0;
    for (let i = 0; i <= carro.length; i++) {
      console.log(carros[i].ano);
      if (2023 - parseInt(carros[i].ano) <= 10) {
        quantidade = 10;
      }
    }
    return quantidade;
  }
  console.log(contaCarrosNovos(carros));
  
   
  
  /* Seu chefe percebeu que deixou de incluir um campo importante nos objetos, o campo 'donos'.Todos os carros da concessionária são de segunda mão.
  
   
  
  Com isso, desenvolva uma função que recebe como parâmetro a lista de carros, um índice da lista e um objeto pessoa. Dentro do objeto pessoa deve constar o nome do proprietário e um telefone para contato.
  
   
  
  Sabemos que não existe esta propriedade, então a propriedade donos deverá ser criada.
  
   
  
  Retorne a lista atualizada. */