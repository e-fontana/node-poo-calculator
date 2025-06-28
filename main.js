import { Calculator } from './calculator.js';

const calculator = new Calculator();

calculator.appendNumber(5);
calculator.setOperator('soma');
calculator.appendNumber(3);
console.log(calculator.calculate());

calculator.appendNumber(5);
calculator.setOperator('subtracao');
calculator.appendNumber(3);
console.log(calculator.calculate());

calculator.appendNumber(5);
calculator.setOperator('multiplicacao');
calculator.appendNumber(3);
console.log(calculator.calculate());

calculator.appendNumber(5);
calculator.setOperator('divisao');
calculator.appendNumber(3);
console.log(calculator.calculate());

calculator.appendNumber('5');
calculator.setOperator('divisao');
calculator.appendNumber('3');
console.log(calculator.calculate());

// Olá, Pedro! Caso queira testar os erros, descomente as linhas abaixo:
// calculator.setOperator('invalidOperator');
// calculator.appendNumber('invalidNumber');