const SUPPORTED_OPERATIONS = ["+", "-", "*", "/"];

export class MultipleCalculator {

    calculate(operations: string[]) {
        const [initialValue, ...steps] = operations;

        const num1 = parseInt(initialValue);
        this.validateNumber(num1);

        return steps.reduce((acc, step) => {
            const operation = step.substring(0,1);
            this.validateOperation(operation);

            const num2 = parseInt(step.substring(1));
            this.validateNumber(num2);

            return this.performOperation(operation, acc, num2);
        }, num1);
    }

    private performOperation(operation: string, accum: number, num2: number): number {
        if (operation === "+") {
            return accum + num2;
        }
        if (operation === "-") {
            return accum - num2;
        }
        if (operation === "*") {
            return accum * num2;
        }
        if (operation === "/") {
            if (num2 === 0) {
                throw new Error("invalid division by 0");
            }
            return accum / num2;
        }

        return accum;
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
