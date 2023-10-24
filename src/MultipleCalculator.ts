const SUPPORTED_OPERATIONS = ["+", "-", "*", "/"];

export class MultipleCalculator {

    calculate(operations: string[]) {
        const operation = operations[1].substring(0,1);
        this.validateOperation(operation);

        const num1 = parseInt(operations[0]);
        const num2 = parseInt(operations[1].substring(1));
        this.validateNumbers(num1, num2);

        if (operation === "-") {
            return num1 - num2;
        }
        if (operation === "*") {
            return num1 * num2;
        }
        if (operation === "/") {
            return num1 / num2;
        }

        return num1 + num2;
    }

    private validateNumbers(num1: number, num2: number) {
        if (isNaN(num1) || isNaN(num2)) {
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
