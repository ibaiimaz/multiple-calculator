import { RegularCalculator } from "./RegularCalculator";

const SUPPORTED_OPERATIONS = ["+", "-", "*", "/"];

interface PerformInterface {
    (operation: string, num1: number, num2: number): number
  }

export class MultipleCalculator {
    private performOperation: PerformInterface;
    private regularCalculator: RegularCalculator;

    constructor ({ nonNegative } = { nonNegative: false }) {
        this.regularCalculator = new RegularCalculator();
        this.performOperation = nonNegative ? this.performNonNegativeOperation : this.performRegularOperation;
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

    private performRegularOperation(operation: string, num1: number, num2: number): number {
        if (operation === "+") {
            return this.regularCalculator.sum(num1, num2);
        }
        if (operation === "-") {
            return this.regularCalculator.subtract(num1, num2);
        }
        if (operation === "*") {
            return this.regularCalculator.multiply(num1, num2);
        }
        if (operation === "/") {
            return this.regularCalculator.divide(num1, num2);
        }
        return num1;
    }

    private performNonNegativeOperation(operation: string, num1: number, num2: number): number {
        if (operation === "+") {
            this.validateNonNegativeNumbers(num1, num2);

            return num1 + num2;
        }
        if (operation === "-") {
            this.validateNonNegativeNumbers(num1, num2);
            const result = num1 - num2;
            if (result < 0) {
                throw new Error("negative values not supported");
            }

            return result;
        }
        if (operation === "*") {
            this.validateNonNegativeNumbers(num1, num2);

            return num1 * num2;
        }
        if (operation === "/") {
            this.validateNonNegativeNumbers(num1, num2);
            if (num2 === 0) {
                throw new Error("invalid division by 0");
            }

            return num1 / num2;
        }

        return num1;
    }

    private validateNonNegativeNumbers(num1: number, num2: number) {
        if (num1 < 0 || num2 < 0) {
            throw new Error("negative values not supported");
        }
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
