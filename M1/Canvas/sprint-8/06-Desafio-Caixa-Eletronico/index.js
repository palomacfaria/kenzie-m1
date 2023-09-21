const user = {
  name: "Jhon Doyle Fox",
  savingsBalance: 500,
  cardsInformation: [
    {
      number: "5160 4196 4843 3388",
      creditBalance: 1000,
      ensign: "American Express"
    }
  ]
};

//Saque
function makeWithDrawal(usuario) {
  let responseWithDraw = parseInt(
    prompt('Digite "1" para poupança e "2" para crédito')
  );

  let withdrawnAmount = parseInt(
    prompt("Digite o valor que deseja sacar")
  );

  if (withdrawnAmount < 5 || withdrawnAmount > 500) {
    alert("Este valor não é permitido");
  }

  if (responseWithDraw === 1) {
    if (withdrawnAmount < usuario.savingsBalance) {
      usuario.savingsBalance -= withdrawnAmount;
      alert("Retirada realizada.");
    } else {
      alert("Saldo indisponível");
    }
  }
  else if (responseWithDraw === 2) {
    if (withdrawnAmount < usuario.cardsInformation[0].creditBalance) {
      usuario.cardsInformation[0].creditBalance -= withdrawnAmount;
      alert("Retirada realizada.");
    } else {
      alert("Saldo indisponível");
    }
  }
  return 'Valor inválido';
}
console.log(makeWithDrawal(user));

//Saldo
function getBalance(usuario){
  let responseBalance = parseInt(
    prompt('Digite "1" para poupança e "2" para crédito'));

    if(responseBalance === 1){
      alert(`Seu saldo na poupança é de: R$${usuario.savingsBalance}`);
    }
    else if(responseBalance === 2){
      alert(`Seu saldo na poupança é de: R$${usuario.cardsInformation[0].creditBalance}`);
    }
}
console.log(getBalance(user));

//Deposito
function makeDeposit(usuario){
  let valueForDeposit = parseInt(prompt("Digite o valor que deseja depositar"));

  if(valueForDeposit < 5 || valueForDeposit > 500){
    alert('Este valor não é permitido');
  }
  usuario.savingsBalance += valueForDeposit;
}
console.log(makeDeposit(user));