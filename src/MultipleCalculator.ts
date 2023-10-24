export class MultipleCalculator {
    calculate(operations: string[]) {
        return parseInt(operations[0]) + parseInt(operations[1].substring(1));
    }
}
