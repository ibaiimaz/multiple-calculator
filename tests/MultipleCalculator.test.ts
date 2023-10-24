import { MultipleCalculator as MultipleCalculator } from "../src/MultipleCalculator";

describe("MultipleCalculator", () => {
    it("should sum the given 2 numbers", () => {
        const multipleCalculator = new MultipleCalculator();

        const result = multipleCalculator.calculate(["4", "+2"]);

        expect(result).toEqual(6);
    });
});
