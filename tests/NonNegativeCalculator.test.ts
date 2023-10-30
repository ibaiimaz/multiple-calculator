import { NonNegativeCalculator } from "../src/NonNegativeCalculator";

describe("NonNegativeCalculator", () => {
    describe("sum", () => {
        it("should sum given numbers", () => {
            const calculator = new NonNegativeCalculator();
    
            const result = calculator.sum(5, 4);
    
            expect(result).toEqual(9);
        });
    
        it("should not allow negative numbers", () => {
            const multipleCalculator = new NonNegativeCalculator();
    
            expect(() => multipleCalculator.sum(-10, 2)).toThrow("negative values not supported");
            expect(() => multipleCalculator.sum(10, -2)).toThrow("negative values not supported");
        });
    });

    describe("subtract", () => {
        it("should subtract given numbers", () => {
            const calculator = new NonNegativeCalculator();
    
            const result = calculator.subtract(5, 4);
    
            expect(result).toEqual(1);
        });
    
        it("should not allow negative numbers", () => {
            const calculator = new NonNegativeCalculator();
    
            expect(() => calculator.subtract(-10, 2)).toThrow("negative values not supported");
            expect(() => calculator.subtract(10, -2)).toThrow("negative values not supported");
        });

        it("should not allow negative result on subtract", () => {
            const calculator = new NonNegativeCalculator();
    
            expect(() => calculator.subtract(2, -5)).toThrow("negative values not supported");
        });
    });

    describe("multiply", () => {
        it("should multiply given numbers", () => {
            const calculator = new NonNegativeCalculator();
    
            const result = calculator.multiply(5, 4);
    
            expect(result).toEqual(20);
        });
    
        it("should not allow negative numbers", () => {
            const multipleCalculator = new NonNegativeCalculator();
    
            expect(() => multipleCalculator.multiply(-10, 2)).toThrow("negative values not supported");
            expect(() => multipleCalculator.multiply(10, -2)).toThrow("negative values not supported");
        });
    });

    describe("divide", () => {
        it("should divide given numbers", () => {
            const calculator = new NonNegativeCalculator();
    
            const result = calculator.divide(12, 4);
    
            expect(result).toEqual(3);
        });
    
        it("should not allow negative numbers", () => {
            const multipleCalculator = new NonNegativeCalculator();
    
            expect(() => multipleCalculator.divide(-10, 2)).toThrow("negative values not supported");
            expect(() => multipleCalculator.divide(10, -2)).toThrow("negative values not supported");
        });

        it("should throw an error if dividing by zero", () => {
            const calculator = new NonNegativeCalculator();
            expect(() => calculator.divide(3, 0)).toThrow("invalid division by 0")
        });
    });
});