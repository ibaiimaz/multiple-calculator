import { NonNegativeMultipleCalculator } from "../src/NonNegativeMultipleCalculator";

describe("NonNegativeMultipleCalculator", () => {
    it("should sum the given numbers", () => {
        const multipleCalculator = new NonNegativeMultipleCalculator();

        const result = multipleCalculator.calculate(["4", "+2"]);

        expect(result).toEqual(6);
    });

    it("should subtract the given 2 numbers", () => {
        const multipleCalculator = new NonNegativeMultipleCalculator();

        const result = multipleCalculator.calculate(["10", "-3"]);

        expect(result).toEqual(7);
    });

    it("should multiply the given 2 numbers", () => {
        const multipleCalculator = new NonNegativeMultipleCalculator();

        const result = multipleCalculator.calculate(["3", "*3"]);

        expect(result).toEqual(9);
    });

    it("should divide the given 2 numbers", () => {
        const multipleCalculator = new NonNegativeMultipleCalculator();

        const result = multipleCalculator.calculate(["12", "/4"]);

        expect(result).toEqual(3);
    });

    it("should throw an error if dividing by zero", () => {
        const multipleCalculator = new NonNegativeMultipleCalculator();
        expect(() => multipleCalculator.calculate(["3", "/0"])).toThrow("invalid division by 0")
    });

    it("should accept multiple operations", () => {
        const multipleCalculator = new NonNegativeMultipleCalculator();

        const result = multipleCalculator.calculate(["10", "+2", "-3"]);

        expect(result).toEqual(9);
    });

    it("should not allow negative numbers in initial value", () => {
        const multipleCalculator = new NonNegativeMultipleCalculator();

        expect(() => multipleCalculator.calculate(["-10", "+2"])).toThrow("negative values not supported");
    });

    it("should not allow negative numbers any operation", () => {
        const multipleCalculator = new NonNegativeMultipleCalculator();

        expect(() => multipleCalculator.calculate(["10", "+-2"])).toThrow("negative values not supported");
        expect(() => multipleCalculator.calculate(["10", "--2"])).toThrow("negative values not supported");
        expect(() => multipleCalculator.calculate(["10", "*-2"])).toThrow("negative values not supported");
        expect(() => multipleCalculator.calculate(["10", "/-2"])).toThrow("negative values not supported");
    });

    it("should not allow negative result on subtract", () => {
        const multipleCalculator = new NonNegativeMultipleCalculator();

        expect(() => multipleCalculator.calculate(["2", "-5"])).toThrow("negative values not supported");
    });
});
