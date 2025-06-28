import { Pessoa } from './pessoa.ts';

export class Juridica extends Pessoa {
    cnpj: string;
    incricaoEstadual: string;

    constructor(nome: string, telefone: string, cnpj: string, inscricaoEstadual: string) {
        super(nome, telefone);
        this.cnpj = cnpj;
        this.incricaoEstadual = inscricaoEstadual;
    }

    toString() {
        return `Nome: ${this.nome}, Telefone: ${this.telefone}, CNPJ: ${this.cnpj}, Inscrição Estadual: ${this.incricaoEstadual}`;
    }
}