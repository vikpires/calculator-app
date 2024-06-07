// Enum para representar as operações
enum Operation {
    Sum = "add",
    Subtract = "subtract",
    Multiply = "multiply",
    Divide = "divide"
};

//Classe da calculadora
class Calculator {
    private value: number;
    constructor(initialValue: number = 0) {
        this.value = initialValue;
    }
};