"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = require('readline-sync');
const menu_1 = require("./calculator/menu");
// Handling of valid value in user input
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
// Valid user input loop and output
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
                    console.log(`\nO resultado da operação é: ${result}\n`);
                }
                catch (error) {
                    console.log("Erro: ", error.message);
                }
            }
        }
    }
}
// Run the application
const app = new CalculatorApp();
app.run();
