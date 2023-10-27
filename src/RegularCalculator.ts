export class RegularCalculator {
    sum(num1: number, num2: number) {
        return num1 + num2;
    }

    subtract(num1: number, num2: number) {
        return num1 - num2;
    }

    multiply(num1: number, num2: number) {
        return num1 * num2;
    }

    divide(num1: number, num2: number) {
        if (num2 === 0) {
            throw new Error("invalid division by 0");
        }
        return num1 / num2;
    }
}