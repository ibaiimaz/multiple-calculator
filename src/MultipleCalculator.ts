const SUPPORTED_OPERATIONS = ["+", "-", "*", "/"];

export class MultipleCalculator {

    calculate(operations: string[]) {
        const operation = operations[1].substring(0,1);
        this.validateOperation(operation);

        const num1 = parseInt(operations[0]);
        const num2 = parseInt(operations[1].substring(1));

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

    private validateOperation(operation: string) {
        if (!SUPPORTED_OPERATIONS.includes(operation)) {
            throw new Error("unsuported operation");
        }
    }
}
