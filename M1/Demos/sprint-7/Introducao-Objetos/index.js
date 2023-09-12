/* let card = {
    capa: "./ caminho da imagem",
    marca: "Chevrolet",
    modelo: "Celta",
    espec_modelo: "1.0 MPFI LT 8V FLEX 4P MANUAL",
    valor: 35900,
    ano: 2013,
    kilometragem: '7563'
} */

const carro1 = {
    modelo: "Supra",
    marca: "Toyota",
    cor: "Vermelho",
    categoria: "Esportivo",
    potencia: "890cv",
    automatico: false,
    ano: 1998,
};
const carro2 = {
    modelo: "Skyline",
    marca: "Nissan",
    cor: "Azul",
    categoria: "Esportivo",
    potencia: "780cv",
    automatico: true,
    ano: 2002,
};

console.log(`Esse é o carro ${carro1.marca} ${carro1.modelo} fabricado no ano ${carro1.ano} na cor ${carro1.cor}`);

const pessoa = {
    nome: "Thiago",
    sobrenome: "Schmidt",
    peso: 85,
    altura: 1.70,
    nascimento: [22,1,1998],
};

function calculaImc(peso, altura){
    const imc = pessoa.peso / pessoa.altura ** 2;
    return imc;
}

pessoa.imc = calculaImc(pessoa.peso, pessoa.altura);
console.log(pessoa);