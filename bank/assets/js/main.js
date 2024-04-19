const inputEl = document.querySelector("#input");
const saqueBtnEl = document.querySelector("#saque-btn");
const depoisitoBtnEl = document.querySelector("#deposito-btn");
const saldoEl = document.querySelector("#saldo");
const historicoEl = document.querySelector("#historico");

mostrarNaTela();
Bank.instance.registraObserver(mostrarNaTela);

saqueBtnEl.addEventListener("click", () => {
  const valor = Number(inputEl.value);
  if (!valor || isNaN(valor)) {
    alert("Valor inválido.");
    return;
  }

  if (!Bank.instance.saque(valor)) {
    alert(
      "Não foi possível realizar o saque, verifique se você possui dinheiro o suficiente para esta operação."
    );
  }
});

depoisitoBtnEl.addEventListener("click", () => {
  const valor = Number(inputEl.value);
  if (!valor || isNaN(valor)) {
    alert("Valor inválido.");
    return;
  }

  if (!Bank.instance.deposito(valor)) {
    alert(
      "Não foi possível realizar o deposito, o deposito tem um valor mínimo de R$ 5,00, e um valor máximo de R$ 9.999,00."
    );
  }
});

function mostrarNaTela() {
  saldoEl.innerHTML = Bank.formataDinheiro(Bank.instance.getSaldo());
  historicoEl.innerHTML = "";
  for (let historico of Bank.instance.getHistorico()) {
    historicoEl.innerHTML += `<p>${historico.tipo}: ${historico.mensagem} - ${historico.saldo}</p>`;
  }
}
