const readlineSync = require('readline-sync');
import { Calculator, AddOperation, SubtractOperation, MultiplyOperation, DivideOperation } from "../calculator/calculator";

// Menu class to handle user input and display menu
export class Menu {
    public static display(): void {
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
    public static getCalculateOption(choice: string): Calculator | null {
        switch (choice) {
            case '1': return new AddOperation();
            case '2': return new SubtractOperation();
            case '3': return new MultiplyOperation();
            case '4': return new DivideOperation();
            case '5':
                console.log('Obrigado por usar a calculadora. Até a próxima!');
                process.exit(0);
            default:
                console.log('Erro: Operação não reconhecida. Tente novamente.');
                return null;
        }     
    }
}
