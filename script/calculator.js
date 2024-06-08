"use strict";
const readlineSync = require('readline-sync');
// enum para as operações
var Operation;
(function (Operation) {
    Operation["Add"] = "+";
    Operation["Subtract"] = "-";
    Operation["Multiply"] = "*";
    Operation["Divide"] = "/";
})(Operation || (Operation = {}));
// classe calculadora
class Calculator {
    constructor() {
        this.value = Operation.Add; // operacao padrao
    }
    defineOperation(operation) {
        this.value = operation;
    }
    // operação
    calculate(number1, number2) {
        switch (this.value) {
            case Operation.Add:
                return number1 + number2;
            case Operation.Subtract:
                return number1 - number2;
            case Operation.Multiply:
                return number1 * number2;
            case Operation.Divide:
                if (number2 !== 0) {
                    return number1 / number2;
                }
                else {
                    console.log("Erro: Divisão por zero!");
                    return NaN;
                }
            default:
                console.log("Operação inválida!");
                return NaN;
        }
    }
}
// inicio
const calculator = new Calculator();
let menuMessage = `
----------CALCULADORA----------
1 - Adição (+)
2 - Subtração (-)
3 - Multiplicação (*)
4 - Divisão (/)
5 - Sair
--------------------------------
`;
console.log(menuMessage);
let menuOption = readlineSync.question('Escolha uma opção do menu: ');
let switchOperation;
switch (menuOption) {
    case '1':
        switchOperation = 'adição';
        calculator.defineOperation(Operation.Add);
        break;
    case '2':
        switchOperation = 'subtração';
        calculator.defineOperation(Operation.Subtract);
        break;
    case '3':
        switchOperation = 'multiplicação';
        calculator.defineOperation(Operation.Multiply);
        break;
    case '4':
        switchOperation = 'divisão';
        calculator.defineOperation(Operation.Divide);
        break;
    case '5':
        console.log('Obrigado por usar a calculadora!');
        process.exit(0);
    default:
        console.log('Erro. Operação não reconhecida.');
        process.exit(1);
}
let number1 = readlineSync.question('Digite o primeiro número: ');
let number2 = readlineSync.question('Digite o segundo número: ');
let num1 = parseFloat(number1);
let num2 = parseFloat(number2);
if (isNaN(num1) || isNaN(num2)) {
    console.log('Erro: Entrada inválida. Certifique-se de digitar números válidos.');
    process.exit(1);
}
let result = calculator.calculate(num1, num2);
console.log(`Resultado da operação de ${switchOperation} entre ${num1} e ${num2} é: ${result}`);
