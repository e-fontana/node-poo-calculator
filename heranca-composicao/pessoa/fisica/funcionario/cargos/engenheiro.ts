import { Funcionario } from "..";
import { Endereco } from "../../../endereco";
import { EstadoCivil } from "../../estadoCivil";
import { Genero } from "../../genero";
import { Setor } from "../types/setor";

export class Engenheiro extends Funcionario {
    constructor(
        nome: string,
        telefone: string,
        email: string,
        endereco: Endereco,
        genero: Genero,
        estadoCivil: EstadoCivil,
        dataNascimento: Date,
        cpf: string,
        rg: string,
        matricula: string,
        setor: Setor,
        salario: number,
        public crea: string
    ) {
        super(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento, cpf, rg, matricula, setor, salario);
    }

    toString(): string {
        return `Engenheiro: ${this.nome}, Setor: ${this.setor}, Salário: ${this.salario}, CREA: ${this.crea}`;
    }

    getSalarioFinal(): number {
        return this.salario;
    }
}