import { Juridica } from "..";
import { Endereco } from "../../endereco";

export class PrestacaoServico extends Juridica {
    constructor(
        nome: string,
        telefone: string,
        email: string,
        endereco: Endereco,
        cnpj: string,
        inscricaoEstadual: string,
        private contratoInicio: Date, 
        private contratoFim: Date
    ) {
        super(nome, telefone, email, endereco, cnpj, inscricaoEstadual);
    }

    toString(): string {
        return `Prestação de Serviço: ${this.nome}, Telefone: ${this.telefone}, CNPJ: ${this.cnpj}, Inscrição Estadual: ${this.inscricaoEstadual}, Contrato Início: ${this.contratoInicio.toLocaleDateString()}, Contrato Fim: ${this.contratoFim.toLocaleDateString()}`;
    }
}