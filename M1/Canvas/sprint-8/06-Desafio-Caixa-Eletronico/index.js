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

function makeWithDrawal(obj, valorSacado, tipoConta) {
  let responseWithDraw = parseInt(
    prompt('Digite "1" para poupança e "2" para crédito')
  );
  let withdrawnAmount;

  if (responseWithDraw === 1) {
    withdrawnAmount = parseInt(prompt("Digite o valor que deseja sacar"));

    if (withdrawnAmount < 5 || withdrawnAmount > 500) {
      return "This value is not allowed";
    }
  }
}
console.log(makeWithDrawal());
