import { MathOperation } from "../mathOperation.ts";

export class Multiplication extends MathOperation {
    calculate(a: number, b: number): number {
        return a * b;
    }
}