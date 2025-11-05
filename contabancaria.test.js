const criarConta = require('./contabancaria');

// Exercício 1: Depósito simples
test('Depósito de 100 em uma conta com saldo 0 deve resultar em saldo 100', () => {
  const conta = criarConta(0);
  conta.depositar(100);
  expect(conta.saldo).toBe(100);
});

// Exercício 2: Saque simples
test('Saque de 50 em uma conta com saldo 200 deve resultar em saldo 150', () => {
  const conta = criarConta(200);
  conta.sacar(50);
  expect(conta.saldo).toBe(150);
});

// Exercício 3: Transferência entre contas
test('Transferir 100 de uma conta com 500 para outra com 200', () => {
  const conta1 = criarConta(500);
  const conta2 = criarConta(200);
  conta1.transferir(100, conta2);
  expect(conta1.saldo).toBe(400);
  expect(conta2.saldo).toBe(300);
});

// Exercício 4: Saldo maior que um valor
test('Após depositar 1000, saldo deve ser maior que 500', () => {
  const conta = criarConta(0);
  conta.depositar(1000);
  expect(conta.saldo).toBeGreaterThan(500);
});

// Exercício 5: Saldo mínimo exigido
test('Saldo deve ser maior ou igual a 50', () => {
  const conta = criarConta(50);
  expect(conta.saldo).toBeGreaterThanOrEqual(50);
});

// Exercício 6: Conta no limite
test('Após saque quase total, saldo deve ser menor que 10', () => {
  const conta = criarConta(9);
  conta.sacar(5);
  expect(conta.saldo).toBeLessThan(10);
});

// Exercício 7: Conta zerada
test('Saque de 300 em conta com 300 deve deixar saldo menor ou igual a 0', () => {
  const conta = criarConta(300);
  conta.sacar(300);
  expect(conta.saldo).toBeLessThanOrEqual(0);
});

// Exercício 8: Correção de arredondamento em juros
test('0.1 + 0.2 deve ficar próximo de 0.3', () => {
  const juros = 0.1 + 0.2;
  expect(juros).toBeCloseTo(0.3);
});

// Exercício 9: Saldo negativo proibido
test('Saque maior que o saldo deve resultar em saldo menor que 0', () => {
  const conta = criarConta(100);
  conta.sacar(150);
  expect(conta.saldo).toBeLessThan(0);
});
