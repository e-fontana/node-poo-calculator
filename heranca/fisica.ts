import { Pessoa } from './pessoa.ts';

export class Fisica extends Pessoa {
    cpf: string;
    rg: string;
    dataNascimento: Date;

    constructor(nome: string, telefone: string, cpf: string, rg: string, dataNascimento: Date) {
        super(nome, telefone);
        this.cpf = cpf;
        this.rg = rg;
        this.dataNascimento = dataNascimento;
    }

    getIdade() {
        const today = new Date();
        let idade = today.getFullYear() - this.dataNascimento.getFullYear();
        const mes = today.getMonth() - this.dataNascimento.getMonth();

        if (mes < 0 || (mes === 0 && today.getDate() < this.dataNascimento.getDate())) idade--;
        return idade;
    }

    toString() {
        return `Nome: ${this.nome}, Telefone: ${this.telefone}, CPF: ${this.cpf}, RG: ${this.rg}, Data de Nascimento: ${this.dataNascimento.toLocaleDateString('pt-BR', { dateStyle: 'short' })}, Idade: ${this.getIdade()}`;
    }
}