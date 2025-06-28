import { Funcionario } from "..";
import { IContratacao } from "./types/contratacao";

export class Diretor extends Funcionario implements IContratacao {
    private readonly PREMIO: number = 0.2;

    toString(): string {
        return `Diretor: ${this.nome}, Setor: ${this.setor}, Salário: ${this.salario}`;
    }

    getSalarioFinal(): number {
        return this.salario + (this.salario * this.PREMIO);
    }

    admitir(funcionario: Funcionario): void {
        console.log(`Admitindo funcionário: ${funcionario.getNome()}`);
    }

    demitir(funcionario: Funcionario): void {
        console.log(`Demitindo funcionário: ${funcionario.getNome()}`);
    }
}