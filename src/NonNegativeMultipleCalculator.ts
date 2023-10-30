import { MultipleCalculator } from "./MultipleCalculator";
import { NonNegativeCalculator } from "./NonNegativeCalculator";

export class NonNegativeMultipleCalculator extends MultipleCalculator {
    constructor() {
        super(new NonNegativeCalculator());
    }
};