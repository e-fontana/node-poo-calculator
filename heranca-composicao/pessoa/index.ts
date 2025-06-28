import { Endereco } from "./endereco";

export abstract class Pessoa {
    constructor(protected nome: string, protected telefone: string, protected email: string, protected endereco: Endereco) {}

    getNome(): string {
        return this.nome;
    }

    abstract toString(): string;
}