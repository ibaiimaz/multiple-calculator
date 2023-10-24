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
});
