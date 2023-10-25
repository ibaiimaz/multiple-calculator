const SUPPORTED_OPERATIONS = ["+", "-", "*", "/"];

export class MultipleCalculator {

    calculate(operations: string[]) {
        const [initialValue, ...steps] = operations;

        return steps.reduce(
            this.performOperationFromStep,
            this.toNumber(initialValue)
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
            return num1 + num2;
        }
        if (operation === "-") {
            return num1 - num2;
        }
        if (operation === "*") {
            return num1 * num2;
        }
        if (operation === "/") {
            if (num2 === 0) {
                throw new Error("invalid division by 0");
            }
            return num1 / num2;
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
