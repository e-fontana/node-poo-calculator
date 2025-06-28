import { operations } from "./operations/index.ts";

function main() {
    const a = 10;
    const b = 5;

    const sum = operations.sum;
    const subtraction = operations.subtraction;
    const multiplication = operations.multiplication;
    const division = operations.division;

    console.log(`Sum: ${sum.calculate(a, b)}`);
    console.log(`Subtraction: ${subtraction.calculate(a, b)}`);
    console.log(`Multiplication: ${multiplication.calculate(a, b)}`);
    console.log(`Division: ${division.calculate(a, b)}`);
}

main();