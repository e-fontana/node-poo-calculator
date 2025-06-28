import { MathOperation } from "../mathOperation.ts";

export class Subtraction extends MathOperation {
    calculate(a: number, b: number): number {
        return a - b;
    }
}