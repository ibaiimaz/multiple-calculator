export class MultipleCalculator {
    calculate(operations: string[]) {
        const operation = operations[1].substring(0,1);
        if (operation === "-") {
            return parseInt(operations[0]) - parseInt(operations[1].substring(1));
        }

        return parseInt(operations[0]) + parseInt(operations[1].substring(1));
    }
}
