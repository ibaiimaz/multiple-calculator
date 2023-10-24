export class MultipleCalculator {
    calculate(operations: string[]) {
        const operation = operations[1].substring(0,1);
        const num1 = parseInt(operations[0]);
        const num2 = parseInt(operations[1].substring(1));
        
        if (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/") {
            throw new Error("unsuported operation");
        }

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
}
