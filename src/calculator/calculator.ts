//Interface for calculator
interface BaseCalculator{
    calculate(number1: number, number2: number): number;
}

// Enum for math operations
export enum Operation {
    Add = "+",
    Subtract = "-",
    Multiply = "*",
    Divide = "/"
}

// Calculate each math operation
export abstract class Calculator implements BaseCalculator {
    public calculate(number1: number, number2: number): number {
        const operator = this.getOperator();
        switch (operator) {
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
    protected abstract getOperator(): Operation;
}

// Derived classes for each operation
export class AddOperation extends Calculator{
    getOperator(): Operation {
        return Operation.Add;
    }
}
export class SubtractOperation extends Calculator{
    getOperator(): Operation {
        return Operation.Subtract;
    }
}
export class MultiplyOperation extends Calculator{
    getOperator(): Operation {
        return Operation.Multiply;
    }
}
export class DivideOperation extends Calculator{
    getOperator(): Operation {
        return Operation.Divide;
    }
}
