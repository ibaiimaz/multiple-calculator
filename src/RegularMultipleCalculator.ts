import { MultipleCalculator } from "./MultipleCalculator";
import { RegularCalculator } from "./RegularCalculator";

export class RegularMultipleCalculator extends MultipleCalculator {
    constructor() {
        super(new RegularCalculator());
    }
};