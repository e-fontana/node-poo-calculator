import { Fisica } from "..";
import { Endereco } from "../../endereco";
import { EstadoCivil } from "../estadoCivil";
import { Genero } from "../genero";

export class Cliente extends Fisica {

    constructor(
        nome: string,
        telefone: string,
        email: string,
        endereco: Endereco,
        genero: Genero,
        estadoCivil: EstadoCivil,
        dataNascimento: Date,
        private protocoloAtendimento: number
    ) {
        super(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento);
    }

    toString(): string {
        return `Cliente: ${this.nome}, Telefone: ${this.telefone}, Email: ${this.email}, Endereço: ${this.endereco.toString()}, Gênero: ${this.genero}, Estado Civil: ${this.estadoCivil}, Data de Nascimento: ${this.dataNascimento.toLocaleDateString('pt-BR', { dateStyle: 'short' })}, Idade: ${this.getIdade()}, Protocolo de Atendimento: ${this.protocoloAtendimento}`;
    }
}