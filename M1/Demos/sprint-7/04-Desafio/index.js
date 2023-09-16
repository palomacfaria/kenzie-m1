//Locadora de veículos
//Carros e motos

const kenzieCars = {
    carros: [
        {
            id: 1,
            marca: 'Fiat',
            modelo: 'Uno',
            ano: 2015,
            preco: 80,
            oucupado: false
        },
        {
            id: 2,
            marca: 'Chrevolet',
            modelo: 'Celta', 
            ano: 2011,
            preco: 75,
            oucupado:false
        },
        {
            id: 3,
            marca: 'Nissan',
            modelo: 'Sentra',
            ano: 2018,
            preco: 120,
            oucupado: false
        }
    ],
    motos: [
        {
            id: 1,
            marca: 'Honda',
            modelo: 'CG 160',
            ano: 2012,
            preco: 50,
            oucupado: false
        },
        {
            id: 2,
            marca: 'Yamaha',
            modelo: 'DT 180', 
            ano: 2015,
            preco: 45,
            oucupado:false
        },
        {
            id: 3,
            marca: 'Caloi',
            modelo: 'Mobilete',
            ano: 1975,
            preco: 90,
            oucupado: false
        }
    ]
}
/* Alugar um carro
-Acessar o meu array de carros
-Percorrer o array de carros até encontrar o id recebido por parâmetro
-Quando encontrar o Id, atualizar o valor da chave oucupado para */
function alugaCarro(id){
    const carros = kenzieCars.carros;
    for(let i = 0; i < carros.length; i++){
        if(carros[i].id === id){
            if(carros[i].oucupado){
                console.log('Este veículo está oucupado!');
            }else{
                carros[i].oucupado = true;
            }
        }
    }
}
alugaCarro(2);
//console.log(kenzieCars.carros);

//Alugar uma moto
function alugaMoto(id){
    const motos = kenzieCars.motos;
    for(let i = 0; i < motos.length; i++){
        if(motos[i].id === id){
            if(motos[i].oucupado){
                console.log('Este veículo está oucupado!')
            }
            else{
                motos[i].oucupado = true;
            }
        }
    }
}
alugaMoto(3);
console.log(kenzieCars.motos);

//Listar carros
function listaCarros(){
    const carros = kenzieCars.carros;
    console.log('***** CARROS *****');

    for(let i = 0; i < carros.length; i++){
        const carro = carros[i];
        console.log(`${carro.id} - ${carro.marca} - ${carro.modelo} - ${carro.ano} - R$${carro.preco},00`);
    }
}
listaCarros();

//Listar motos
function listaMotos(){
    const motos = kenzieCars.motos;
    console.log('***** MOTOS *****');

    for(let i = 0; i < motos.length; i++){
        const moto = motos[i];
        console.log(`${moto.id} - ${moto.marca} - ${moto.modelo} - ${moto.ano} - R$${moto.preco},00`);
    }
}
listaMotos();

//Listar Veículo por tipo
function listaVeiculoPorTipo(tipo){
    const veiculos = kenzieCars[tipo];
    console.log(`***** ${tipo.toUpperCase()} *****`);
    
    for(let i = 0; i < veiculos.length; i++){
        const veiculo = veiculos[i];
        console.log(`${veiculo.id} - ${veiculo.marca} - ${veiculo.modelo} - ${veiculo.ano} - R$${veiculo.preco},00`);
    }
}
listaVeiculoPorTipo('carros');

//Adicionar veículo
let globalIdMoto = 4;
let globalIdCarro = 4;

function adicionarVeiculos(tipo, marca, modelo, ano, preco){

    let id = 0;
    
    if(tipo == 'carro'){
        id = globalIdCarro;
        globalIdCarro++;
    }
    else if(tipo == 'moto'){
        id = globalIdMoto;
        globalIdMoto++;
    }

    const veiculo = {
        id: id,
        marca: marca,
        modelo: modelo,
        ano: ano,
        preco: preco,
        oucupado: false
    }
    kenzieCars[tipo+'s'].push(veiculo);
    return veiculo;
}
console.log(adicionarVeiculos('carro', 'Honda', 'Hb20', 2019, 135));
console.log(adicionarVeiculos('carro', 'VW', 'Fox', 2010, 70));
console.log(adicionarVeiculos('moto', 'Suzuki', 'GSX-R1000R', 2021, 200));

listaCarros();
listaMotos();