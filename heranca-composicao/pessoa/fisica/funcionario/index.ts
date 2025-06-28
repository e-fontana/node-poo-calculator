import { Fisica } from "..";
import { Endereco } from "../../endereco";
import { EstadoCivil } from "../estadoCivil";
import { Genero } from "../genero";
import { IFuncionario } from "./types/funcionario";
import { Setor } from "./types/setor";

export abstract class Funcionario extends Fisica implements IFuncionario {
    constructor(
        nome: string,
        telefone: string,
        email: string,
        endereco: Endereco,
        genero: Genero,
        estadoCivil: EstadoCivil,
        dataNascimento: Date,
        protected cpf: string,
        protected rg: string,
        protected matricula: string,
        protected setor: Setor,
        protected salario: number
    ) {
        super(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento);
    }

    abstract getSalarioFinal(): number;

    abstract toString(): string;
}