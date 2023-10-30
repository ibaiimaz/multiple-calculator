import { MultipleCalculator } from "../src/MultipleCalculator";

const mockCalculator = {
    sum: jest.fn().mockReturnValue(1),
    subtract: jest.fn().mockReturnValue(1),
    multiply: jest.fn().mockReturnValue(1),
    divide: jest.fn().mockReturnValue(1),
}

describe("MultipleCalculator", () => {
    it("should use 'sum' from calculator when sum operator", () => {
        const multipleCalculator = new MultipleCalculator(mockCalculator);

        multipleCalculator.calculate(["4", "+2"]);
        
        expect(mockCalculator.sum).toHaveBeenCalledTimes(1);
        expect(mockCalculator.sum).toHaveBeenCalledWith(4, 2);
    });

    it("should use 'subtract' from calculator when subtract operator", () => {
        const multipleCalculator = new MultipleCalculator(mockCalculator);

        multipleCalculator.calculate(["10", "-3"]);
        
        expect(mockCalculator.subtract).toHaveBeenCalledTimes(1);
        expect(mockCalculator.subtract).toHaveBeenCalledWith(10, 3);
    });

    it("should use 'multiply' from calculator when multiply operator", () => {
        const multipleCalculator = new MultipleCalculator(mockCalculator);

        multipleCalculator.calculate(["3", "*3"]);
        
        expect(mockCalculator.multiply).toHaveBeenCalledTimes(1);
        expect(mockCalculator.multiply).toHaveBeenCalledWith(3, 3);
    });

    it("should use 'divide' from calculator when divide operator", () => {
        const multipleCalculator = new MultipleCalculator(mockCalculator);

        multipleCalculator.calculate(["12", "/4"]);
        
        expect(mockCalculator.divide).toHaveBeenCalledTimes(1);
        expect(mockCalculator.divide).toHaveBeenCalledWith(12, 4);
    });

    it("should throw an error if the operation is not supported", () => {
        const multipleCalculator = new MultipleCalculator(mockCalculator);
        expect(() => multipleCalculator.calculate(["12", "%4"])).toThrow("unsuported operation")
    });

    it("should throw an error if the operation is not provided", () => {
        const multipleCalculator = new MultipleCalculator(mockCalculator);
        expect(() => multipleCalculator.calculate(["12", "4"])).toThrow("operation not provided")
    });

    it("should throw an error if first number not provided", () => {
        const multipleCalculator = new MultipleCalculator(mockCalculator);
        expect(() => multipleCalculator.calculate(["", "+4"])).toThrow("number not provided")
    });

    it("should throw an error if second number not provided", () => {
        const multipleCalculator = new MultipleCalculator(mockCalculator);
        expect(() => multipleCalculator.calculate(["3", "+"])).toThrow("number not provided")
    });

    it("should accept multiple operations", () => {
        const multipleCalculator = new MultipleCalculator(mockCalculator);

        multipleCalculator.calculate(["10", "+2", "-3", "*3", "/9"]);
        
        expect(mockCalculator.sum).toHaveBeenCalledWith(10, 2);
        expect(mockCalculator.subtract).toHaveBeenCalledWith(expect.any(Number), 3);
        expect(mockCalculator.multiply).toHaveBeenCalledWith(expect.any(Number), 3);
        expect(mockCalculator.divide).toHaveBeenCalledWith(expect.any(Number), 9);
    });
});
