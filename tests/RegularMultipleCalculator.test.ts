import { RegularMultipleCalculator } from "../src/RegularMultipleCalculator";

describe("RegularMultipleCalculator", () => {
    it("should sum the given numbers", () => {
        const multipleCalculator = new RegularMultipleCalculator();

        const result = multipleCalculator.calculate(["4", "+2"]);

        expect(result).toEqual(6);
    });

    it("should subtract the given 2 numbers", () => {
        const multipleCalculator = new RegularMultipleCalculator();

        const result = multipleCalculator.calculate(["10", "-3"]);

        expect(result).toEqual(7);
    });

    it("should multiply the given 2 numbers", () => {
        const multipleCalculator = new RegularMultipleCalculator();

        const result = multipleCalculator.calculate(["3", "*3"]);

        expect(result).toEqual(9);
    });

    it("should divide the given 2 numbers", () => {
        const multipleCalculator = new RegularMultipleCalculator();

        const result = multipleCalculator.calculate(["12", "/4"]);

        expect(result).toEqual(3);
    });

    it("should throw an error if dividing by zero", () => {
        const multipleCalculator = new RegularMultipleCalculator();
        expect(() => multipleCalculator.calculate(["3", "/0"])).toThrow("invalid division by 0")
    });

    it("should accept multiple operations", () => {
        const multipleCalculator = new RegularMultipleCalculator();

        const result = multipleCalculator.calculate(["10", "+2", "-3"]);

        expect(result).toEqual(9);
    });

    it("should support negative numbers in all operations", () => {
        const multipleCalculator = new RegularMultipleCalculator();

        const result = multipleCalculator.calculate(["-10", "+-2", "--3", "*-2", "/-2"]);

        expect(result).toEqual(-9);
    });
});
