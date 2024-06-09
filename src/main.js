"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = require('readline-sync');
const menu_1 = require("./calculator/menu");
// Input handler class to get valid number input from user
class InputHandler {
    static getValidNumberInput(prompt) {
        while (true) {
            const input = parseFloat(readlineSync.question(prompt));
            if (!isNaN(input)) {
                return input;
            }
            else {
                console.log('Erro: Digite um número válido.');
            }
        }
    }
}
// Calculator app class to run the calculator
class CalculatorApp {
    run() {
        while (true) {
            menu_1.Menu.display();
            const menuOption = readlineSync.question('Escolha uma opcao do menu: ');
            const calculator = menu_1.Menu.getCalculateOption(menuOption);
            if (calculator) {
                const number1 = InputHandler.getValidNumberInput('Digite o primeiro numero: ');
                const number2 = InputHandler.getValidNumberInput('Digite o segundo numero: ');
                try {
                    const result = calculator.calculate(number1, number2);
                    console.log(`O resultado da operação é: ${result}`);
                }
                catch (error) {
                    console.log("Erro: ", error.message);
                }
            }
        }
    }
}
// Start the calculator application
const app = new CalculatorApp();
app.run();
