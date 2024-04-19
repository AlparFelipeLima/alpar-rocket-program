class Historico {
  tipo;
  mensagem;
  saldo;

  constructor(tipo, mensagem, saldo) {
    this.tipo = tipo;
    this.mensagem = mensagem;
    this.saldo = saldo;
  }
}

class Bank {
  static instance;
  saldo = 0;
  historico = [];
  observers = [];

  constructor() {
    this.registraHistorico("conta", "Conta criada com sucesso");
    this.registraObserver(this.salva);

    if (localStorage.getItem("saldo")) {
      this.saldo = Number(localStorage.getItem("saldo"));
    }

    if (localStorage.getItem("historico")) {
      this.historico = JSON.parse(localStorage.getItem("historico"));
    }
  }

  saque(valor) {
    if (this.saldo - valor >= 0) {
      this.saldo -= valor;
      this.registraHistorico("saque", Bank.formataDinheiro(valor));
      this.executaObservers();
      return true;
    }
    return false;
  }

  deposito(valor) {
    if (valor >= 5 && valor < 10000) {
      this.saldo += valor;
      this.registraHistorico("deposito", Bank.formataDinheiro(valor));
      this.executaObservers();
      return true;
    }
    return false;
  }

  getSaldo() {
    return this.saldo;
  }

  getHistorico() {
    return this.historico;
  }

  registraHistorico(tipo, mensagem) {
    this.historico.push(
      new Historico(tipo, mensagem, Bank.formataDinheiro(this.saldo))
    );
  }

  salva() {
    localStorage.setItem("saldo", Bank.instance.saldo);
    localStorage.setItem("historico", JSON.stringify(Bank.instance.historico));
  }

  registraObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.observers.findIndex((func) => func == observer);
    if (index >= 0) {
      this.observers.splice(index, 1);
    }
  }

  executaObservers() {
    for (let observer of this.observers) {
      observer();
    }
  }

  static formataDinheiro(valor) {
    return new Intl.NumberFormat("pt-BR", {
      currency: "BRL",
      style: "currency",
    }).format(valor);
  }
}

Bank.instance = new Bank();
