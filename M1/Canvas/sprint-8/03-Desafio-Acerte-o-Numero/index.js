// Função para gerar um número aleatório entre 1 e 20
function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 20) + 1;
}

// Função para verificar o palpite do usuário
function verificarPalpite(numeroAleatorio, palpite) {
  let tentativa = 1;

  if(palpite > 20 || palpite < 0){
    alert("Número inválido")
  }
  
  while (numeroAleatorio !== palpite) {
    alert("Tente novamente");
    palpite = parseInt(prompt("Digite seu palpite (um número inteiro positivo):"));
    tentativa++;
  }
  
  alert(`Você acertou na tentativa ${tentativa}.`);
}

// Gerar um número aleatório
const numeroAleatorio = gerarNumeroAleatorio();

// Pedir o palpite do usuário
const palpiteUsuario = parseInt(prompt("Digite seu palpite (um número inteiro positivo):"));

// Verificar o palpite
verificarPalpite(numeroAleatorio, palpiteUsuario);