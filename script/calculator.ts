// Enum para representar as operações
enum Operation {
    Add = "+",
    Subtract = "-",
    Multiply = "*",
    Divide = "/"
};

//Classe da calculadora
class Calculator {
    private value: number;
    constructor(initialValue: number = 0) {
        this.value = initialValue;
    }
};
