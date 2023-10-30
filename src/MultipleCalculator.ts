const SUPPORTED_OPERATIONS = ["+", "-", "*", "/"];

interface Calculator {
    sum (num1: number, num2: number): number,
    subtract (num1: number, num2: number): number,
    multiply (num1: number, num2: number): number,
    divide (num1: number, num2: number): number,
}

export class MultipleCalculator {
    private calculator: Calculator;

    constructor (calculator: Calculator) {
        this.calculator = calculator;
    }

    calculate(operations: string[]) {
        const [initialValue, ...steps] = operations;
        const initialNum = this.toNumber(initialValue);

        return steps.reduce(
            this.performOperationFromStep,
            initialNum
        );
    }

    private performOperationFromStep = (acc: number, step: string) => {
        const operation = this.getOperation(step);
        const num = this.getOperationValue(step);

        return this.performOperation(operation, acc, num);
    }

    private getOperation(step: string) {
        const operation = step.substring(0, 1);
        this.validateOperation(operation);
        return operation;
    }

    private getOperationValue(step: string) {
        return this.toNumber(step.substring(1));
    }

    private toNumber(value: string) {
        const num = parseInt(value);
        this.validateNumber(num);
        return num;
    }

    private performOperation(operation: string, num1: number, num2: number): number {
        if (operation === "+") {
            return this.calculator.sum(num1, num2);
        }
        if (operation === "-") {
            return this.calculator.subtract(num1, num2);
        }
        if (operation === "*") {
            return this.calculator.multiply(num1, num2);
        }
        if (operation === "/") {
            return this.calculator.divide(num1, num2);
        }
        return num1;
    }

    private validateNumber(num: number) {
        if (isNaN(num)) {
            throw new Error("number not provided");
        }
    }

    private validateOperation(operation: string) {
        if (!isNaN(parseInt(operation))) {
            throw new Error("operation not provided");
        }

        if (!SUPPORTED_OPERATIONS.includes(operation)) {
            throw new Error("unsuported operation");
        }
    }
}
