var readlineSync = require('readline-sync');

// Enum para representar as operações
enum Operation {
    Add = "+",
    Subtract = "-",
    Multiply = "*",
    Divide = "/"
}

// Classe da calculadora
class Calculator {
    private value: Operation;
    constructor(initialValue: number = 0) {
        this.value= Operation.Add; // Define uma operação padrão, se necessário
    }

    defineOperation(operation: Operation) {
        this.value = operation;
    }

    // realizar operação
    calculate (number1: number, num2: number): number {
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
                } else {
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
const calculator = new Calculator();
//var stt:boolean = false;

let msg:String = '----------CALCULADORA----------\n';
console.log(msg);

//stt = true;
let operate = readlineSync.question('Digite a operação (+, /, *, -): ');
let readNumber1 = readlineSync.question('Digite o primeiro número: ');
let readNumber2 = readlineSync.question('Digite o segundo número: ');


let number1 = parseFloat(readNumber1);
let number2 = parseFloat(readNumber2);

switch (operate){
    case '+':
        calculator.defineOperation(Operation.Add);
        console.log(calculator.calculate(number1, number2));
        break;

    case '/':
        calculator.defineOperation(Operation.Divide);
        console.log(calculator.calculate(number1, number2));
        break;

        case '*':
            calculator.defineOperation(Operation.Multiply);
    console.log(calculator.calculate(number1, number2));
        break;

    case '-':
        calculator.defineOperation(Operation.Subtract);
        console.log(calculator.calculate(number1, number2));
        break;

    default:
        let error: String = 'Erro. Operação não reconhecida';
        console.log(error);


}
