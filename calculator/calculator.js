export class Calculator {
    constructor() {
        this.currentInput;
        this.operation;
        this.previousInput;
    }

    appendNumber(number) {
        if (isNaN(number)) throw new Error("Invalid number input: " + number);
        this.previousInput = this.currentInput;
        this.currentInput = parseFloat(number);
    }

    setOperator(operator) {
        const validOperators = ['soma', 'subtracao', 'multiplicacao', 'divisao'];
        if (!validOperators.includes(operator)) throw new Error("Invalid operator: " + operator);
        
        this.operation = operator;
    }

    calculate() {
        switch(this.operation) {
            case 'soma': return this.previousInput + this.currentInput;
            case 'subtracao': return this.previousInput - this.currentInput;
            case 'multiplicacao': return this.previousInput * this.currentInput;
            case 'divisao': return this.previousInput / this.currentInput;
            default: return null;
        }
    }
}