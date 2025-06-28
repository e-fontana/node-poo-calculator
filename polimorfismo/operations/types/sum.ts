import { MathOperation } from "../mathOperation.ts";

export class Sum extends MathOperation {
    calculate(a: number, b: number): number {
        return a + b;
    }
}