import { Pessoa } from "..";
import { Endereco } from "../endereco";

export abstract class Juridica extends Pessoa {
    constructor(nome: string, telefone: string, email: string, endereco: Endereco, public cnpj: string, public inscricaoEstadual: string) {
        super(nome, telefone, email, endereco);
    }

    abstract toString(): string;
}