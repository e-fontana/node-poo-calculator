import { Division } from "./types/division.ts";
import { Multiplication } from "./types/multiplication.ts";
import { Subtraction } from "./types/subtraction.ts";
import { Sum } from "./types/sum.ts";

export const operations = {
    sum: new Sum(),
    subtraction: new Subtraction(),
    multiplication: new Multiplication(),
    division: new Division(),
}