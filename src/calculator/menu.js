"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const readlineSync = require('readline-sync');
const calculator_1 = require("../calculator/calculator");
// Display menu and select operations
class Menu {
    static display() {
        console.log(`
            ----------CALCULADORA----------

            1 - Adição (+)
            2 - Subtração (-)
            3 - Multiplicação (*)
            4 - Divisão (/)
            5 - Sair        

            -------------------------------
            `);
    }
    static getCalculateOption(choice) {
        switch (choice) {
            case '1': return new calculator_1.AddOperation();
            case '2': return new calculator_1.SubtractOperation();
            case '3': return new calculator_1.MultiplyOperation();
            case '4': return new calculator_1.DivideOperation();
            case '5':
                console.log('\nObrigado por usar a calculadora. Até a próxima!\n');
                process.exit(0);
            default:
                console.log('Erro: Operação não reconhecida. Tente novamente.\n');
                return null;
        }
    }
}
exports.Menu = Menu;
