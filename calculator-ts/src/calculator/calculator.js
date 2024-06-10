"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivideOperation = exports.MultiplyOperation = exports.SubtractOperation = exports.AddOperation = exports.Calculator = exports.Operation = void 0;
// Enum for math operations
var Operation;
(function (Operation) {
    Operation["Add"] = "+";
    Operation["Subtract"] = "-";
    Operation["Multiply"] = "*";
    Operation["Divide"] = "/";
})(Operation || (exports.Operation = Operation = {}));
// Calculate each math operation
class Calculator {
    calculate(number1, number2) {
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
                }
                else {
                    throw new Error("Não há divisão por zero. Tente novamente.");
                }
            default:
                throw new Error("Operação inválida! Tente novamente.");
        }
    }
}
exports.Calculator = Calculator;
// Derived classes for each operation
class AddOperation extends Calculator {
    getOperator() {
        return Operation.Add;
    }
}
exports.AddOperation = AddOperation;
class SubtractOperation extends Calculator {
    getOperator() {
        return Operation.Subtract;
    }
}
exports.SubtractOperation = SubtractOperation;
class MultiplyOperation extends Calculator {
    getOperator() {
        return Operation.Multiply;
    }
}
exports.MultiplyOperation = MultiplyOperation;
class DivideOperation extends Calculator {
    getOperator() {
        return Operation.Divide;
    }
}
exports.DivideOperation = DivideOperation;
