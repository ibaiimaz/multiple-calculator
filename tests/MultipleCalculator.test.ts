import { MultipleCalculator as MultipleCalculator } from "../src/MultipleCalculator";

describe("MultipleCalculator", () => {
    it.each([
        {a: "4", b: "+2", expected: 6},
        {a: "3", b: "+5", expected: 8}
    ])('should sum $a and $b', ({a, b, expected}) => {
        const multipleCalculator = new MultipleCalculator();

        const result = multipleCalculator.calculate([a, b]);

        expect(result).toEqual(expected);
    });

    it("should subtract the given 2 numbers", () => {
        const multipleCalculator = new MultipleCalculator();

        const result = multipleCalculator.calculate(["10", "-3"]);

        expect(result).toEqual(7);
    });

    it("should multiply the given 2 numbers", () => {
        const multipleCalculator = new MultipleCalculator();

        const result = multipleCalculator.calculate(["3", "*3"]);

        expect(result).toEqual(9);
    });

    it("should divide the given 2 numbers", () => {
        const multipleCalculator = new MultipleCalculator();

        const result = multipleCalculator.calculate(["12", "/4"]);

        expect(result).toEqual(3);
    });

    it("should throw an error if the operation is not supported", () => {
        const multipleCalculator = new MultipleCalculator();
        expect(() => multipleCalculator.calculate(["12", "%4"])).toThrow("unsuported operation")
    });

    it("should throw an error if the operation is not provided", () => {
        const multipleCalculator = new MultipleCalculator();
        expect(() => multipleCalculator.calculate(["12", "4"])).toThrow("operation not provided")
    });

    it("should throw an error if first number not provided", () => {
        const multipleCalculator = new MultipleCalculator();
        expect(() => multipleCalculator.calculate(["", "+4"])).toThrow("number not provided")
    });

    it("should throw an error if second number not provided", () => {
        const multipleCalculator = new MultipleCalculator();
        expect(() => multipleCalculator.calculate(["3", "+"])).toThrow("number not provided")
    });

    it("should throw an error if dividing by zero", () => {
        const multipleCalculator = new MultipleCalculator();
        expect(() => multipleCalculator.calculate(["3", "/0"])).toThrow("invalid division by 0")
    });

    it("should accept multiple operations", () => {
        const multipleCalculator = new MultipleCalculator();

        const result = multipleCalculator.calculate(["10", "+2", "-3"]);

        expect(result).toEqual(9);
    });

    it("should support negative numbers in all operations", () => {
        const multipleCalculator = new MultipleCalculator();

        const result = multipleCalculator.calculate(["-10", "+-2", "--3", "*-2", "/-2"]);

        expect(result).toEqual(-9);
    });

    describe("non negative calculator", () => {
        it("should not allow negative numbers in initial value", () => {
            const multipleCalculator = new MultipleCalculator({ nonNegative: true });
    
            expect(() => multipleCalculator.calculate(["-10", "+2"])).toThrow("negative values not supported");
        });

        it("should not allow negative numbers any operation", () => {
            const multipleCalculator = new MultipleCalculator({ nonNegative: true });
    
            expect(() => multipleCalculator.calculate(["10", "+-2"])).toThrow("negative values not supported");
            expect(() => multipleCalculator.calculate(["10", "--2"])).toThrow("negative values not supported");
            expect(() => multipleCalculator.calculate(["10", "*-2"])).toThrow("negative values not supported");
            expect(() => multipleCalculator.calculate(["10", "/-2"])).toThrow("negative values not supported");
        });
    });
});
