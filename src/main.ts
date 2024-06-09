const readlineSync = require('readline-sync');
import { Menu } from "./calculator/menu";

// Input handler class to get valid number input from user
class InputHandler {
    public static getValidNumberInput(prompt: string): number {
        while (true) {
            const input = parseFloat(readlineSync.question(prompt));
            if (!isNaN(input)) {
                return input;
            } else {
                console.log('Erro: Digite um número válido.');
            }
        }
    }
}

// Calculator app class to run the calculator
class CalculatorApp {
    public run(): void {
        while(true){
            Menu.display();
            const menuOption = readlineSync.question('Escolha uma opcao do menu: '); 
            const calculator = Menu.getCalculateOption(menuOption);
        
            if(calculator){
                const number1 = InputHandler.getValidNumberInput('Digite o primeiro numero: ');
                const number2 = InputHandler.getValidNumberInput('Digite o segundo numero: ');
               
                try{ 
                    const result = calculator.calculate(number1, number2);
                    console.log(`O resultado da operação é: ${result}`);        
                }catch(error: any){
                    console.log("Erro: ", error.message);
                }
            } 
           
        }

    }
}

// Start the calculator application
const app = new CalculatorApp();
app.run();
