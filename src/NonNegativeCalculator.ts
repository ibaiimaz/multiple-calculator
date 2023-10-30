export class NonNegativeCalculator {
    sum (num1: number, num2: number) {
        this.validateNonNegativeNumbers(num1, num2);
        return num1 + num2;
    }

    subtract (num1: number, num2: number) {
        this.validateNonNegativeNumbers(num1, num2);
        const result = num1 - num2;
        if (result < 0) {
            throw new Error("negative values not supported");
        }

        return result;
    };

    multiply (num1: number, num2: number) {
        this.validateNonNegativeNumbers(num1, num2);

        return num1 * num2;
    };

    divide (num1: number, num2: number) {
        this.validateNonNegativeNumbers(num1, num2);
        if (num2 === 0) {
            throw new Error("invalid division by 0");
        }

        return num1 / num2;
    };

    private validateNonNegativeNumbers(num1: number, num2: number) {
        if (num1 < 0 || num2 < 0) {
            throw new Error("negative values not supported");
        }
    }
};