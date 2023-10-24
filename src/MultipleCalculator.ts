const SUPPORTED_OPERATIONS = ["+", "-", "*", "/"];

export class MultipleCalculator {

    calculate(operations: string[]) {
        const num1 = parseInt(operations[0]);
        this.validateNumber(num1);

        let result = num1;

        for (let i = 1; i < operations.length; i++) {
            const operation = operations[i].substring(0,1);
            this.validateOperation(operation);

            const num2 = parseInt(operations[i].substring(1));
            this.validateNumber(num2);

            if (operation === "+") {
                result = result + num2;
            }
            if (operation === "-") {
                result = result - num2;
            }
            if (operation === "*") {
                result = result * num2;
            }
            if (operation === "/") {
                if (num2 === 0) {
                    throw new Error("invalid division by 0")
                }
                result = result / num2;
            }
        }

        return result;
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
