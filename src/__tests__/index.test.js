const soma = require('../index');

describe('Operação de Soma', () => {
  describe('Quando funcao soma for chamada', () => {
    test('Deverá retornar a soma entre dois parametros', () => {
      const calculo = soma(4,6);
      expect(calculo).toBe(10);
    })
  })
});
