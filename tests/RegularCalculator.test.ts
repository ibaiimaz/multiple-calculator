import { RegularCalculator } from "../src/RegularCalculator";

describe("RegularCalculator", () => {
    it("should sum given numbers", () => {
        const calculator = new RegularCalculator();

        const result = calculator.sum(5, 4);

        expect(result).toEqual(9);
    });

    it("should subtract given numbers", () => {
        const calculator = new RegularCalculator();

        const result = calculator.subtract(5, 4);

        expect(result).toEqual(1);
    });

    it("should multiply given numbers", () => {
        const calculator = new RegularCalculator();

        const result = calculator.multiply(5, 4);

        expect(result).toEqual(20);
    });

    it("should divide given numbers", () => {
        const calculator = new RegularCalculator();

        const result = calculator.divide(8, 4);

        expect(result).toEqual(2);
    });

    it("should throw an error if dividing by zero", () => {
        const calculator = new RegularCalculator();
        expect(() => calculator.divide(3, 0)).toThrow("invalid division by 0")
    });
});