import { Juridica } from "..";
import { Endereco } from "../../endereco";
import { Produto } from "./produto";
import { SetorFornecedor } from "./types/setor";

export class Fornecedor extends Juridica {
    constructor(
        nome: string,
        telefone: string,
        email: string,
        endereco: Endereco,
        cnpj: string,
        inscricaoEstadual: string,
        private setor: SetorFornecedor, 
        private produto: Produto
    ) {
        super(nome, telefone, email, endereco, cnpj, inscricaoEstadual);
    }

    toString(): string {
        return `Fornecedor: ${this.nome}, Telefone: ${this.telefone}, CNPJ: ${this.cnpj}, Inscrição Estadual: ${this.inscricaoEstadual}, Setor: ${this.setor}, Produto: ${this.produto.toString()}`;
    }
}