import { Pessoa } from "..";
import { Endereco } from "../endereco";
import { EstadoCivil } from "./estadoCivil";
import { Genero } from "./genero";

export abstract class Fisica extends Pessoa {
    constructor(
        nome: string,
        telefone: string,
        email: string,
        endereco: Endereco,
        protected genero: Genero,
        protected estadoCivil: EstadoCivil,
        protected dataNascimento: Date
    ) {
        super(nome, telefone, email, endereco);
    }

    getIdade(): number {
        const today = new Date();
        let idade = today.getFullYear() - this.dataNascimento.getFullYear();
        const mes = today.getMonth() - this.dataNascimento.getMonth();

        if (mes < 0 || (mes === 0 && today.getDate() < this.dataNascimento.getDate())) idade--;
        return idade;
    }
}