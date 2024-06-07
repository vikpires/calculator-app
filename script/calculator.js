"use strict";
var readlineSync = require('readline-sync');
// Enum para representar as operações
var Operation;
(function (Operation) {
    Operation["Add"] = "+";
    Operation["Subtract"] = "-";
    Operation["Multiply"] = "*";
    Operation["Divide"] = "/";
})(Operation || (Operation = {}));
// Classe da calculadora
class Calculator {
    constructor(initialValue = 0) {
        this.operacao = Operation.Add; // Define uma operação padrão, se necessário
    }
    definirOperacao(operacao) {
        this.operacao = operacao;
    }
    // realizar operação
    calcular(numero1, numero2) {
        switch (this.operacao) {
            case Operation.Add:
                return numero1 + numero2;
            case Operation.Subtract:
                return numero1 - numero2;
            case Operation.Multiply:
                return numero1 * numero2;
            case Operation.Divide:
                if (numero2 !== 0) {
                    return numero1 / numero2;
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
// inicial
const calculadora = new Calculator();
//var stt:boolean = false;
let msg = '----------CALCULADORA----------\n';
console.log(msg);
//stt = true;
let op = readlineSync.question('Digite a operação (+, /, *, -): ');
let number1 = readlineSync.question('Digite o primeiro número: ');
let number2 = readlineSync.question('Digite o segundo número: ');
let num1 = parseFloat(number1);
let num2 = parseFloat(number2);
switch (op) {
    case '+':
        calculadora.definirOperacao(Operation.Add);
        console.log(calculadora.calcular(num1, num2));
        break;
    case '/':
        calculadora.definirOperacao(Operation.Divide);
        console.log(calculadora.calcular(num1, num2));
        break;
    case '*':
        calculadora.definirOperacao(Operation.Multiply);
        console.log(calculadora.calcular(num1, num2));
        break;
    case '-':
        calculadora.definirOperacao(Operation.Subtract);
        console.log(calculadora.calcular(num1, num2));
        break;
    default:
        let error = 'Erro. Operação não reconhecida';
        console.log(error);
}
/*if(op == '+'){
    calculadora.definirOperacao(Operation.Add);
    console.log(calculadora.calcular(num1, num2));
} else if (op == '/'){
    calculadora.definirOperacao(Operation.Divide);
    console.log(calculadora.calcular(num1, num2));
}
else if (op == '*'){
    calculadora.definirOperacao(Operation.Multiply);
    console.log(calculadora.calcular(num1, num2));
}
else if (op == '-'){
    calculadora.definirOperacao(Operation.Subtract);
    console.log(calculadora.calcular(num1, num2));
} else{
    var error: String = 'Erro. Operação não reconhecida'
}
}catch(error){
    console.log('Operação não reconhecida')

}*/
/*const calculadora = new Calculator();
calculadora.definirOperacao(Operation.Add);
console.log(calculadora.calcular(9, 3)); */
