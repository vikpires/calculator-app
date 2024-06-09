const readlineSync = require('readline-sync');

// Enum for operations
enum Operation {
    Add = "+",
    Subtract = "-",
    Multiply = "*",
    Divide = "/"
}

// Setting calculator class
class Calculator {
    private operation: Operation;
    constructor() {
        this.operation = Operation.Add; //Default operation
    }

    setOperation(operation: Operation) {
        this.operation = operation;
    }

    getOperation(): Operation{
        return this.operation;
    }

// Calculate math operations
    calculate(number1: number, number2: number): number {
        switch (this.operation) {
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
                    throw new Error("Não há divisão por zero. Tente novamente.")
                }
            default:
                throw new Error ("Operação inválida! Tente novamente.");
        }
    }
}

// Function to obtain valid number inputs
function getValidNumberInput(prompt: string): number {
    while (true) {
        const input = parseFloat(readlineSync.question(prompt));
        if (!isNaN(input)) {
            return input;
        } else {
            console.log('Erro: Digite um número válido.');
        }
    }
}

// Setting menu
const calculator = new Calculator();

function displayMenu(){
    console.log(`
----------CALCULADORA----------

1 - Adição (+)
2 - Subtração (-)
3 - Multiplicação (*)
4 - Divisão (/)
5 - Sair
--------------------------------
`);
}

// Setting operations with looping and error handling
while(true){
    displayMenu();
    const menuOption = readlineSync.question('Escolha uma opcao do menu: '); 

    switch (menuOption) {
        case '1':
            calculator.setOperation(Operation.Add);
            break;
        case '2':
            calculator.setOperation(Operation.Subtract);
            break;
        case '3':
            calculator.setOperation(Operation.Multiply);
            break;
        case '4':
            calculator.setOperation(Operation.Divide);
            break;
        case '5':
            console.log('Obrigado por usar a calculadora. Até a próxima!');
            process.exit(0);
        default:
            console.log('Erro: Operação não reconhecida. Tente novamente.');
            process.exit(1);
    }
    const number1 = getValidNumberInput('Digite o primeiro numero: ');
    const number2 = getValidNumberInput('Digite o segundo numero: ');

    try{ 
        const result = calculator.calculate(number1, number2);
        console.log(`O resultado é: ${result}`);        
    }catch(error: any){
        console.log("Erro: ", error.message);
    }    
}