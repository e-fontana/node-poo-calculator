import { MathOperation } from "../mathOperation.ts";

export class Division extends MathOperation {
    calculate(a: number, b: number): number {
        return a / b;
    }
}