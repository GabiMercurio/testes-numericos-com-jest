// Regras de negócio da conta bancária

function criarConta(saldoInicial = 0) {
    return {
      saldo: saldoInicial,
      depositar(valor) {
        this.saldo += valor;
      },
      sacar(valor) {
        this.saldo -= valor;
      },
      transferir(valor, outraConta) {
        this.saldo -= valor;
        outraConta.saldo += valor;
      }
    };
  }
  
  module.exports = criarConta;
  